export class WalletManager {
  private isConnected: boolean = false;
  private connectedAddress: string | null = null;

  constructor() {
    this.loadState();
  }

  private saveState() {
    localStorage.setItem("walletConnected", this.isConnected.toString());
    localStorage.setItem("connectedAddress", this.connectedAddress || "");
  }

  private loadState() {
    try{
      this.isConnected = localStorage.getItem("walletConnected") === "true";
      this.connectedAddress = localStorage.getItem("connectedAddress");
    }
    catch (error){
      console.log(error);
      // window?.open("https://petra.app/", `_blank`);
    }
    
  }

  public async connectWallet(): Promise<boolean> {
    try {
      // @ts-ignore
      const wallet = window?.aptos;
      await wallet.connect();
      const account = await wallet.account();
      console.log(account);
      this.connectedAddress = account.address;
      this.isConnected = true;
      console.log("Wallet connected successfully");
      this.saveState();
      return true;
    } catch (error) {
      console.error("Error connecting to the wallet:", error);
      this.isConnected = false;
      return false;
    }
  }

  public async disconnectWallet(): Promise<boolean> {
    try {
      // @ts-ignore
      const wallet = window?.aptos;
      await wallet.disconnect();
      this.isConnected = false;
      this.connectedAddress = "";
      console.log("Wallet disconnected successfully");
      this.saveState();
      return true;
    } catch (error) {
      console.error("Error disconnecting from the wallet:", error);
      return false;
    }
  }

  public getAddress(): string {
    return this.connectedAddress || "";
  }

  public isWalletConnected(): boolean {
    return this.isConnected;
  }
}