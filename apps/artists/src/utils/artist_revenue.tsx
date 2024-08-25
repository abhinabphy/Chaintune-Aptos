import { Network, Provider } from "aptos";

export  class ArtistRevenue {

    private provider = new Provider(Network.DEVNET);
    public moduleAddress = `0xa715798c513b5af39165b04969c3c502fedc5da1dd3b64cbfc68573368ba3c9b`;
    public teamAddress = `0x242c026099140c0d787faf9da562d0aace66700666a4d8fd80dab86756b31660`;
    public sponsor="0x242c026099140c0d787faf9da562d0aace66700666a4d8fd80dab86756b31660";
    public artistaddress="0x242c026099140c0d787faf9da562d0aace66700666a4d8fd80dab86756b31660";
    public coinType = "0x1::aptos_coin::AptosCoin"; // Replace with the actual coin type
    public sponsorAddress = "0x242c026099140c0d787faf9da562d0aace66700666a4d8fd80dab86756b31660"; // Replace with the actual sponsor address
    public recipientAddress = "0x242c026099140c0d787faf9da562d0aace66700666a4d8fd80dab86756b31660"; // Replace with the actual recipient address
      
    public initializeSponsor = async () => {
        // @ts-ignore
        const wallet = window?.aptos;
        const response = await wallet.connect();
        const account = await wallet.account();
    
        if (!account) {
            console.error("No account connected");
            return;
        }
        const lockingPayload={
            type: "entry_function_payload",
            function: `${this.moduleAddress}::artist_revenue::initialize_sponsor`,
            type_arguments: [this.coinType],
            arguments: [],
        }
        try {
            console.log(account.address);
            const pendingTransaction = await (
                window as any
            ).aptos.signAndSubmitTransaction(lockingPayload);
            console.log(pendingTransaction);
            console.log(this.provider);
            const client = (this.provider as any).aptosClient;
            console.log(client);
            const txn = await client.waitForTransactionWithResult(
                pendingTransaction.hash
            );
            console.log(txn);
        } catch (error: any) {
            console.error("Error  Initialising:", error);
        }
    }

    public  AddArtist = async () => {
        
        // @ts-ignore
        const wallet = window?.aptos;
        const response = await wallet.connect();
        const account = await wallet.account();

        if (!account) {
            console.error("No account connected");
            return;
        }

        const lockingPayload = {
            type: "entry_function_payload",
            function: `${this.moduleAddress}::artist_revenue::add_artist`,
            type_arguments: ["0x1::aptos_coin::AptosCoin"],
            arguments: [ this.sponsor],
        };

        try {
            console.log(account.address);
            const pendingTransaction = await (
                window as any
            ).aptos.signAndSubmitTransaction(lockingPayload);
            console.log(pendingTransaction);
            console.log(this.provider);
            const client = (this.provider as any).aptosClient;
            console.log(client);
            const txn = await client.waitForTransactionWithResult(
                pendingTransaction.hash
            );
            console.log(txn);

    }
    catch (error: any) {
        console.error("Error adding artist:", error);
    }
}


public DeleteArtist = async () => {


    // @ts-ignore
    const wallet = window?.aptos;
    const response = await wallet.connect();
    const account = await wallet.account();

    if (!account) {
        console.error("No account connected");
        return;
    }

    const lockingPayload = {
        type: "entry_function_payload",
        function: `${this.moduleAddress}::
        artist_revenue::delete_artist`,
        type_arguments: ["0x1::aptos_coin::AptosCoin"],
        arguments: [ this.recipientAddress],
    };

    try {
        console.log(account.address);
        const pendingTransaction = await (
            window as any
        ).aptos.signAndSubmitTransaction(lockingPayload);
        console.log(pendingTransaction);
        console.log(this.provider);
        const client = (this.provider as any).aptosClient;
        console.log(client);
        const txn = await client.waitForTransactionWithResult(
            pendingTransaction.hash
        );
        console.log(txn);

}
catch (error: any) {
    console.error("Error deleting artist:", error);
}


}


}
