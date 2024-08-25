/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { WalletManager } from "@/utils/connect_wallet";

const walletManager = new WalletManager();

const Login = () => {
  const [isConnected, setIsConnected] = useState<boolean>(
    walletManager.isWalletConnected()
  );
  const handleConnectWallet = async () => {
    const connected: boolean = await walletManager.connectWallet();
    if (connected) {
      console.log("Wallet connected successfully");
      setIsConnected(true);
    } else {
      console.log("Failed to connect to the wallet");
    }
  };
  return (
    <div className="h-screen w-screen bg-zinc-950 flex flex-row">
      <div
        id="NewRootRoot"
        className="flex flex-row w-[50vw] bg-white items-start"
      >
        <div className="bg-[url(https://file.rendit.io/n/XTQ0PJCJyvpg97UWDQaO.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row gap-3 w-full h-screen items-start pt-6 px-8">
          <a href="/signup">
            <img
              src="https://file.rendit.io/n/0D7VVQAz909zwFE5ngdy.svg"
              alt="Group"
              className="w-12"
            />
          </a>
          <div className="text-xl font-['Aileron'] leading-[24px] text-white mt-3">
            ChainTune
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[2vw] py-[15vw] px-[10vw]">
        <div className="text-4xl font-['Aileron'] font-light leading-[48px] text-white w-full">
          Experience music like it should be.
        </div>
        <div className="opacity-60 font-['Aileron'] font-light leading-[22px] text-white">
          Dont have an account?{" "}
          <a href="/signup" className="cursor-pointer underline">
            Signup here
          </a>
        </div>
        <div className="w-[35vw] pt-[0.7vw] border-solid border-white/6 backdrop-blur-[24px] shadow-[2px_4px_48px_0px_rgba(0,_0,_0,_0.5)] bg-[linear-gradient(159deg,_rgba(28,_30,_34,_0.33)_-9%,rgba(31,_34,_40,_0.5)_113%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-between h-16 items-start pl-6 pr-2 rounded-[24px]">
          <div className="text-xl font-['Aileron'] font-light leading-[28px] text-white mt-2">
            {isConnected
              ? walletManager.getAddress().substring(0, 30) + `...`
              : "Wallet"}
          </div>
          <button
            className="text-sm font-['Aileron'] font-light leading-[20px] text-white border-solid border-white/6 backdrop-blur-[24px] bg-[linear-gradient(159deg,_rgba(28,_30,_34,_0.33)_-9%,rgba(31,_34,_40,_0.5)_113%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-center pt-3 w-1/4 h-10 items-start border rounded-[24px]"
            onClick={handleConnectWallet}
          >
            {isConnected ? "Wallet Connected" : "Connect Wallet"}
          </button>
        </div>
        <div className="w-[35vw] border-solid border-white/6 backdrop-blur-[24px] bg-[linear-gradient(#ffffff,_#ffffff),_linear-gradient(159deg,_rgba(28,_30,_34,_0.33)_-9%,rgba(31,_34,_40,_0.5)_113%)] bg-cover,_cover bg-50%_50%,_50%_50% bg-blend-normal,_normal bg-repeat-no-repeat,_no-repeat flex flex-row justify-center pt-3 h-12 items-start border rounded-[24px]">
          <div className="text-sm font-['Aileron'] leading-[20px]">Login</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
