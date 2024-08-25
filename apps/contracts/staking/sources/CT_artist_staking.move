module chain_tune::locked_coins {
    use aptos_framework::coin::{Self, Coin};
    use aptos_framework::event;
    use aptos_std::table::{Self, Table};
    use std::error;
    use std::signer;
    
    struct Lock<phantom CoinType> has store {
        coins: Coin<CoinType>,
        unlock_streams: u64,
    }
    struct Locks<phantom CoinType> has key {
        // Map from recipient address => locked coins.
        locks: Table<address, Lock<CoinType>>,
        // Predefined withdrawal address. This cannot be changed if there's any active lock.
        withdrawal_address: address,
        // Number of locks that have not yet been claimed.
        total_locks: u64,
    }

    #[event]
    /// Event emitted when a lock is canceled.
    struct CancelLockup has drop, store {
        sponsor: address,
        recipient: address,
        amount: u64,
    }

    #[event]
    /// Event emitted when a recipient claims unlocked coins.
    struct Claim has drop, store {
        sponsor: address,
        recipient: address,
        amount: u64,
        claimed_streams: u64,
    }

    #[event]
    /// Event emitted when lockup is updated for an existing lock.
    struct UpdateLockup has drop, store {
        sponsor: address,
        recipient: address,
        old_unlock_streams: u64,
        new_unlock_streams: u64,
    }

    #[event]
    /// Event emitted when withdrawal address is updated.
    struct UpdateWithdrawalAddress has drop, store {
        sponsor: address,
        old_withdrawal_address: address,
        new_withdrawal_address: address,
    }

    /// No locked coins found to claim.
    const ELOCK_NOT_FOUND: u64 = 1;
    /// Lockup has not expired yet.
    const ELOCKUP_HAS_NOT_EXPIRED: u64 = 2;
    /// Can only create one active lock per recipient at once.
    const ELOCK_ALREADY_EXISTS: u64 = 3;
    /// The length of the recipients list doesn't match the amounts.
    const EINVALID_RECIPIENTS_LIST_LENGTH: u64 = 3;
    /// Sponsor account has not been set up to create locks for the specified CoinType yet.
    const ESPONSOR_ACCOUNT_NOT_INITIALIZED: u64 = 4;
    /// Cannot update the withdrawal address because there are still active/unclaimed locks.
    const EACTIVE_LOCKS_EXIST: u64 = 5;

    const EARTIST_STILL_EXISTS: u64 = 6;

    #[view]
    public fun artist_exists<CoinType>(sponsor:address,recipient:address):u64 acquires Locks{
        let locks = borrow_global_mut<Locks<CoinType>>(sponsor);
        // assert!(table::contains(&locks.locks, recipient), error::not_found(ELOCK_NOT_FOUND));
        let artist_exist=if(table::contains(&locks.locks, recipient)){
            1
        }else{
            0
        };
        artist_exist
    } 

    #[view]
    public fun total_locks<CoinType>(sponsor: address): u64 acquires Locks {
        assert!(exists<Locks<CoinType>>(sponsor), error::not_found(ESPONSOR_ACCOUNT_NOT_INITIALIZED));
        let locks = borrow_global<Locks<CoinType>>(sponsor);
        locks.total_locks
    }

    #[view]
    public fun locked_amount<CoinType>(sponsor: address, recipient: address): u64 acquires Locks {
        assert!(exists<Locks<CoinType>>(sponsor), error::not_found(ESPONSOR_ACCOUNT_NOT_INITIALIZED));
        let locks = borrow_global<Locks<CoinType>>(sponsor);
        assert!(table::contains(&locks.locks, recipient), error::not_found(ELOCK_NOT_FOUND));
        coin::value(&table::borrow(&locks.locks, recipient).coins)
    }

    #[view]    
    public fun claim_streams<CoinType>(sponsor: address, recipient: address): u64 acquires Locks {
        assert!(exists<Locks<CoinType>>(sponsor), error::not_found(ESPONSOR_ACCOUNT_NOT_INITIALIZED));
        let locks = borrow_global<Locks<CoinType>>(sponsor);
        assert!(table::contains(&locks.locks, recipient), error::not_found(ELOCK_NOT_FOUND));
        table::borrow(&locks.locks, recipient).unlock_streams
    }

    #[view]
    // This function retrieves the withdrawal address for a specific sponsor.
    // It first verifies if a Locks resource for the given CoinType and sponsor exists.
    // If not, it throws an error.
    // Then, it borrows the Locks resource and returns the stored withdrawal address.
    public fun withdrawal_address<CoinType>(sponsor: address): address acquires Locks {
        assert!(exists<Locks<CoinType>>(sponsor), error::not_found(ESPONSOR_ACCOUNT_NOT_INITIALIZED));
        let locks = borrow_global<Locks<CoinType>>(sponsor);
        locks.withdrawal_address
    }
    // This function initializes a new Locks resource for a specific sponsor and CoinType.
    // It creates a new table to store individual locks, sets the withdrawal address, and initializes the total number of locks to 0.
    // Finally, it moves the Locks resource to the sponsor's account.
    public entry fun initialize_sponsor<CoinType>(sponsor: &signer, withdrawal_address: address) {
        move_to(sponsor, Locks {
            locks: table::new<address, Lock<CoinType>>(),
            withdrawal_address,
            total_locks: 0,
        })
    } 
    // This function allows a sponsor to update their withdrawal address.
    // It first retrieves the sponsor's address and verifies the existence of their Locks resource.
    // Then, it ensures there are no active locks to prevent changing the address while funds are locked.
    // If all checks pass, it updates the withdrawal address in the Locks resource and emits an event with the old and new addresses.
    public entry fun update_withdrawal_address<CoinType>(
        sponsor: &signer, new_withdrawal_address: address) acquires Locks {
        let sponsor_address = signer::address_of(sponsor);
        assert!(exists<Locks<CoinType>>(sponsor_address), error::not_found(ESPONSOR_ACCOUNT_NOT_INITIALIZED));

        let locks = borrow_global_mut<Locks<CoinType>>(sponsor_address);
        assert!(locks.total_locks == 0, error::invalid_state(EACTIVE_LOCKS_EXIST));
        let old_withdrawal_address = locks.withdrawal_address;
        locks.withdrawal_address = new_withdrawal_address;

        event::emit(UpdateWithdrawalAddress {
            sponsor: sponsor_address,
            old_withdrawal_address,
            new_withdrawal_address,
        });
    }
    
    // This function checks if a specific recipient has an active lock for a sponsor and CoinType.
    // It verifies the existence of the sponsor's Locks resource, then checks if the recipient exists in the locks table.
    // Finally, it returns true if the recipient has a lock, and false otherwise.
    public fun artist_acc<CoinType>(sponsor:address,recipient:address):bool acquires Locks{
        // let sponsor_address = signer::address_of(sponsor);
        assert!(exists<Locks<CoinType>>(sponsor), error::not_found(ESPONSOR_ACCOUNT_NOT_INITIALIZED));
        let locks = borrow_global_mut<Locks<CoinType>>(sponsor);
        // assert!(table::contains(&locks.locks, recipient), error::not_found(ELOCK_NOT_FOUND));
        let exist =table::contains(&locks.locks, recipient);

        let artist_account_exists=if(exist){
            true}else{
                false
            };
        artist_account_exists
    }
    // This function retrieves the current number of streams for a specific recipient's lock.
    // It verifies the existence of the sponsor's Locks resource and ensures the recipient has a lock.
    // Finally, it returns the counter value stored in the lock's data.
    public fun get_stream_count<CoinType>(sponsor:address, recipient:address, counter:u64):u64 acquires Locks{
        let locks = borrow_global_mut<Locks<CoinType>>(sponsor);
        assert!(table::contains(&locks.locks, recipient), error::not_found(ELOCK_NOT_FOUND));
        counter 
    }
    
    // This function allows a sponsor to add locked coins for a specific recipient.
    // It performs the following steps:
    // 1. Verifies the existence of the sponsor's Locks resource.
    // 2. Borrows the Locks resource and retrieves its state.
    // 3. Obtains the recipient's address.
    // 4. Withdraws the specified amount of coins from the recipient.
    // 5. Ensures the recipient doesn't already have an active lock.
    // 6. Creates a new Lock object with the withdrawn coins and unlock_streams.
    // 7. Adds the new lock to the sponsor's Locks resource using the recipient's address as a key.
    // 8. Increments the total number of active locks.    
    public entry fun add_locked_coins<CoinType>(
        recipient: &signer, sponsor: address, amount: u64, unlock_streams: u64) acquires Locks {
        assert!(exists<Locks<CoinType>>(sponsor), error::not_found(ESPONSOR_ACCOUNT_NOT_INITIALIZED));
        let locks = borrow_global_mut<Locks<CoinType>>(sponsor);
        let recipient_address = signer::address_of(recipient);
        let coins = coin::withdraw<CoinType>(recipient, amount);
        assert!(!table::contains(&locks.locks, recipient_address), error::already_exists(ELOCK_ALREADY_EXISTS));
        table::add(&mut locks.locks, recipient_address, Lock<CoinType> { coins, unlock_streams });
        locks.total_locks = locks.total_locks + 1;
    }
    // This function allows a recipient to claim their locked coins if they have sufficient streams.
    // It performs the following steps:
    // 1. Verifies the existence of the sponsor's Locks resource.
    // 2. Borrows the Locks resource and retrieves its state.
    // 3. Obtains the recipient's address.
    // 4. Ensures the recipient has an active lock.
    // 5. Removes the recipient's lock from the Locks resource.
    // 6. Decrements the total number of active locks.
    // 7. Verifies the provided streams are sufficient to unlock the lock.
    // 8. Retrieves the coin value and the number of unlock_streams from the removed lock.
    // 9. Deposits the locked coins back to the recipient's address.
    // 10. Emits an event with relevant details about the claim.    
    public entry fun claim<CoinType>(recipient: &signer, sponsor: address,streams:u64) acquires Locks {
        assert!(exists<Locks<CoinType>>(sponsor), error::not_found(ESPONSOR_ACCOUNT_NOT_INITIALIZED));
        let locks = borrow_global_mut<Locks<CoinType>>(sponsor);
        let recipient_address = signer::address_of(recipient);
        assert!(table::contains(&locks.locks, recipient_address), error::not_found(ELOCK_NOT_FOUND));
        let Lock { coins, unlock_streams } = table::remove(&mut locks.locks, recipient_address);
        locks.total_locks = locks.total_locks - 1;
        let now_streams = streams;
        assert!(now_streams >= unlock_streams, error::invalid_state(ELOCKUP_HAS_NOT_EXPIRED));

        let amount = coin::value(&coins);
        coin::deposit(recipient_address, coins);

        event::emit(Claim {
            sponsor,
            recipient: recipient_address,
            amount,
            claimed_streams: now_streams,
        });
    }
    
    public entry fun update_lockup<CoinType>(
        sponsor: &signer, recipient: address, new_unlock_streams: u64) acquires Locks {
        let sponsor_address = signer::address_of(sponsor);
        assert!(exists<Locks<CoinType>>(sponsor_address), error::not_found(ESPONSOR_ACCOUNT_NOT_INITIALIZED));
        let locks = borrow_global_mut<Locks<CoinType>>(sponsor_address);
        assert!(table::contains(&locks.locks, recipient), error::not_found(ELOCK_NOT_FOUND));

        let lock = table::borrow_mut(&mut locks.locks, recipient);
        let old_unlock_streams = lock.unlock_streams;
        lock.unlock_streams = new_unlock_streams;

        event::emit(UpdateLockup {
            sponsor: sponsor_address,
            recipient,
            old_unlock_streams,
            new_unlock_streams,
        });
    }
    
    public entry fun cancel_lockup<CoinType>(sponsor: &signer, recipient: address) acquires Locks {

        // coin::deposit(locks.withdrawal_address, coins);
        let sponsor_address = signer::address_of(sponsor);
        assert!(exists<Locks<CoinType>>(sponsor_address), error::not_found(ESPONSOR_ACCOUNT_NOT_INITIALIZED));
        let locks = borrow_global_mut<Locks<CoinType>>(sponsor_address);
        assert!(table::contains(&locks.locks, recipient), error::not_found(ELOCK_NOT_FOUND));
        let Lock { coins, unlock_streams:_ } = table::remove(&mut locks.locks, recipient);
        locks.total_locks = locks.total_locks - 1;
        // let now_streams = streams;
        // assert!(now_streams >= unlock_streams, error::invalid_state(ELOCKUP_HAS_NOT_EXPIRED));

        let amount = coin::value(&coins);
        coin::deposit(locks.withdrawal_address, coins);

        event::emit(
            CancelLockup {
                sponsor:sponsor_address,
                recipient,
                amount
            });
    }

}