module chain_tune::user_revenue {
    use aptos_framework::event;
    use aptos_std::table::{Self, Table};
    use std::error;
    use std::signer;    
    use chain_tune::epoch;
    use chain_tune::fa_coin;

    struct Download<phantom CoinType> has store {
        monthly_streams: u64,
        epoch: u64,
        cid: vector<u8>,
        total_streams: u64,
    }

    struct Download_Streams<phantom CoinType> has key {
        locks: Table<address, Download<CoinType>>,
        unlock_streams:u64,
        total_downloads: u64,
    }

    #[event]
    /// Event emitted when a lock is canceled.
    struct CancelDownload has drop, store {
        sponsor: address,
        recipient: address,
        cid: vector<u8>,
        streams: u64,
        current_epoch:u64,
    }

    #[event]
    struct UpdateUnlockStreams has drop,store{
        old_unlock_streams:u64,
        new_unlock_streams:u64,
    }

    #[event]
    /// Event emitted when lockup is updated for an existing lock.
    struct UpdateTotalStreams has drop, store {
        recipient: address,
        old_total_streams: u64,
    }

    #[event]
    /// Event emitted when a recipient claims unlocked coins.
    struct Claim has drop, store {
        sponsor: address,
        recipient: address,
        cid: vector<u8>,
        amount: u64,
        claimed_before_epoch: u64,
    }

    // Event emitted when lockup is updated for an existing lock.
    #[event]
    struct Update_Streams_Epoch has drop,store{
        recipient: address,
        old_epoch: u64,
        new_epoch: u64,
        old_streams: u64,
    }

    /// No locked coins found to claim.
    const EARTIST_NOT_FOUND: u64 = 1;
    /// Lockup has not expired yet.
    const EEPOCH_HAS_NOT_EXPIRED: u64 = 2;
    /// Can only create one active lock per recipient at once.
    const EARTIST_ALREADY_EXISTS: u64 = 3;
    /// The length of the recipients list doesn't match the amounts.
    const EINVALID_RECIPIENTS_LIST_LENGTH: u64 = 3;
    /// Sponsor account has not been set up to create locks for the specified CoinType yet.
    const ESPONSOR_ACCOUNT_NOT_INITIALIZED: u64 = 4;
    /// Cannot update the withdrawal address because there are still active/unclaimed locks.
    const EARTIST_LOCKS_EXIST: u64 = 5;

    const EREWARDS_CANNOT_BE_CLAIMED_FOR_CURRENT_EPOCH: u64 = 6;
    
    const ARTIST_PERMIT_REQUIRED: u64 = 7;
    
    const INSUFFIECIENT_TOTAL_STREAMS: u64 =8;

    #[view]
    public fun download_exists<CoinType>(sponsor:address,recipient:address,cid:vector<u8>):u64 acquires Download_Streams{
        let locks = borrow_global_mut<Download_Streams<CoinType>>(sponsor);
        let lock = table::borrow_mut(&mut locks.locks, recipient);
        let exists:bool=if(lock.cid==cid){
            true
        }else{
            false
        };
        let artist_exist=if(table::contains(&locks.locks, recipient) && exists){
            1
        }else{
            0
        };
        artist_exist
    } 

    #[view]
    public fun total_downloads<CoinType>(sponsor: address): u64 acquires Download_Streams {
        assert!(exists<Download_Streams<CoinType>>(sponsor), error::not_found(ESPONSOR_ACCOUNT_NOT_INITIALIZED));
        let locks = borrow_global<Download_Streams<CoinType>>(sponsor);
        locks.total_downloads
    }

    public entry fun initialize_sponsor<CoinType>(sponsor: &signer) {
        move_to(sponsor, Download_Streams<CoinType> {
            locks: table::new<address, Download<CoinType>>(),
            unlock_streams:1000,
            total_downloads: 0,
        })
    }

    public fun give_me_coins<CoinType>(recipient:address, sponsor:address):bool acquires Download_Streams{
        let locks = borrow_global_mut<Download_Streams<CoinType>>(sponsor);
        assert!(exists<Download_Streams<CoinType>>(sponsor), error::not_found(ESPONSOR_ACCOUNT_NOT_INITIALIZED));
        assert!(table::contains(&locks.locks, recipient), error::not_found(EARTIST_NOT_FOUND));
        true

    }

    public fun payable_amount<CoinType>(sponsor:&signer,recipient: address): u64 acquires Download_Streams{
        let sponsor_address=signer::address_of(sponsor);
        let locks = borrow_global_mut<Download_Streams<CoinType>>(sponsor_address);
        let lock = table::borrow_mut(&mut locks.locks, recipient);
        lock.total_streams
    }

    public entry fun update_total_streams<CoinType>(sponsor:&signer, recipient: address) acquires Download_Streams {
        let sponsor_address=signer::address_of(sponsor);
        let locks = borrow_global_mut<Download_Streams<CoinType>>(sponsor_address);
        assert!(table::contains(&locks.locks, recipient), error::not_found(EARTIST_NOT_FOUND));
        let lock = table::borrow_mut(&mut locks.locks, recipient);
        let old_total_streams=lock.total_streams;
        lock.total_streams=0;

        event::emit(UpdateTotalStreams {
            recipient,
            old_total_streams:old_total_streams,
        });
    }

    public entry fun update_unlock_streams<CoinType>(sponsor:&signer, unlock_streams:u64) acquires Download_Streams{
        let sponsor_address=signer::address_of(sponsor);
        let locks = borrow_global_mut<Download_Streams<CoinType>>(sponsor_address);
        let old_unlock_streams=locks.unlock_streams;
        locks.unlock_streams=unlock_streams;
        event::emit(UpdateUnlockStreams{
            old_unlock_streams:old_unlock_streams,
            new_unlock_streams:unlock_streams,
        });
    }

    public entry fun add_download<CoinType>(recipient: &signer, sponsor:address, cid:vector<u8>) acquires Download_Streams {
        assert!(exists<Download_Streams<CoinType>>(sponsor), error::not_found(ESPONSOR_ACCOUNT_NOT_INITIALIZED));
        let locks = borrow_global_mut<Download_Streams<CoinType>>(sponsor);
        let recipient_address = signer::address_of(recipient);
        let epoch=epoch::now();
        let monthly_streams:u64=0;
        let total_streams:u64=0;
        
        assert!(!table::contains(&locks.locks, recipient_address), error::already_exists(EARTIST_ALREADY_EXISTS));
        table::add(&mut locks.locks, recipient_address, Download<CoinType> { monthly_streams, epoch, cid, total_streams});
        locks.total_downloads = locks.total_downloads + 1;
    }

    public fun streams_this_epoch<CoinType>(sponsor: &signer, recipient: address, monthly_streams: u64, epoch: u64): u64 acquires Download_Streams{
        assert!(epoch < epoch::now(), EREWARDS_CANNOT_BE_CLAIMED_FOR_CURRENT_EPOCH);
        let sponsor_address = signer::address_of(sponsor);
        let locks = borrow_global_mut<Download_Streams<CoinType>>(sponsor_address);
        let lock = table::borrow_mut(&mut locks.locks, recipient);
        lock.monthly_streams=monthly_streams;
        monthly_streams
    }
    public entry fun deposit<CoinType>(sponsor: &signer, recipient: address, cid:vector<u8>) acquires Download_Streams {
        let sponsor_address = signer::address_of(sponsor);
        assert!(exists<Download_Streams<CoinType>>(sponsor_address), error::not_found(ESPONSOR_ACCOUNT_NOT_INITIALIZED));
        let locks = borrow_global_mut<Download_Streams<CoinType>>(sponsor_address);
        assert!(table::contains(&locks.locks, recipient), error::not_found(EARTIST_NOT_FOUND));
        let lock = table::borrow_mut(&mut locks.locks, recipient);
        assert!(lock.total_streams>=locks.unlock_streams,INSUFFIECIENT_TOTAL_STREAMS);
        let amount = lock.total_streams*2/100;
        let epoch=epoch::now();
        
        

        fa_coin::mint(sponsor, recipient, amount);
            event::emit(Claim {
            sponsor: sponsor_address,
            recipient,
            cid,
            amount,
            claimed_before_epoch: epoch,
        });
        update_total_streams<CoinType>(sponsor, recipient);
    }

    public entry fun update_epoch<CoinType>(sponsor:address, recipient:address, monthly_streams:u64) acquires Download_Streams{
        let locks = borrow_global_mut<Download_Streams<CoinType>>(sponsor);
        assert!(table::contains(&locks.locks, recipient), error::not_found(EARTIST_NOT_FOUND));

        let lock = table::borrow_mut(&mut locks.locks, recipient);
        let old_epoch = lock.epoch;
        assert!(old_epoch < epoch::now(), EREWARDS_CANNOT_BE_CLAIMED_FOR_CURRENT_EPOCH);
        lock.epoch = epoch::now();
        let new_epoch = lock.epoch;
        let old_streams= lock.monthly_streams;
        lock.total_streams=lock.total_streams + monthly_streams;
        lock.monthly_streams=0;

        event::emit(Update_Streams_Epoch {
            recipient,
            old_epoch,
            new_epoch,
            old_streams,
        });

    }

    // Sponsor can cancel an existing lock.
    public entry fun delete_download<CoinType>(sponsor: &signer, recipient: address, cid:vector<u8>) acquires Download_Streams {
        let sponsor_address = signer::address_of(sponsor);
        assert!(exists<Download_Streams<CoinType>>(sponsor_address), error::not_found(ESPONSOR_ACCOUNT_NOT_INITIALIZED));
        let locks = borrow_global_mut<Download_Streams<CoinType>>(sponsor_address);
        assert!(table::contains(&locks.locks, recipient), error::not_found(EARTIST_NOT_FOUND));
        let epoch = epoch::now();
        let lock = table::borrow_mut(&mut locks.locks, recipient);
        // let amount = streams_this_epoch<CoinType>(sponsor: &signer, recipient: address, streams, epoch);
        let amount = lock.monthly_streams*2/100;
        fa_coin::mint(sponsor, recipient, amount);
        let song_cid=cid;
        locks.total_downloads = locks.total_downloads - 1;
        let Download { monthly_streams:_, epoch:_, cid:_, total_streams:_ } = table::remove(&mut locks.locks, recipient);
        event::emit(
            CancelDownload {
                sponsor: sponsor_address,
                recipient,
                cid:song_cid,
                streams: amount,
                current_epoch: epoch,
            });
    }
}

