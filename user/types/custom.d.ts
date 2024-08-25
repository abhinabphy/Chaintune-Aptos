import {
  AptosWalletErrorResult,
  NetworkName,
  PluginProvider,
} from "@aptos-labs/wallet-adapter-core";

declare global {
    interface Window {
      martian: PluginProvider;
    }
  }