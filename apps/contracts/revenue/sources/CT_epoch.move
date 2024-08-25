module chain_tune::epoch {
    use aptos_framework::timestamp;

    /// The epoch duration is fixed at 1 month (in seconds).
    const EPOCH_DURATION: u64 = 2629796; // Approximate number of seconds in a month (30.44 days)

    #[view]
    public fun now(): u64 {
        to_epoch(timestamp::now_seconds())
    }

    public inline fun duration(): u64 {
        // Equal to EPOCH_DURATION. Inline functions cannot use constants defined in their module.
        2629796
    }

    public inline fun to_epoch(timestamp_secs: u64): u64 {
        // Equal to EPOCH_DURATION. Inline functions cannot use constants defined in their module.
        timestamp_secs / 2629796
    }

    public inline fun to_seconds(epoch: u64): u64 {
        // Equal to EPOCH_DURATION. Inline functions cannot use constants defined in their module.
        epoch * 2629796
    }

    #[test_only]
    public fun fast_forward(epochs: u64) {
        aptos_framework::timestamp::fast_forward_seconds(epochs * EPOCH_DURATION);
    }
}