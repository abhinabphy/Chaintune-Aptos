/* eslint-disable @next/next/no-img-element */
"use client";

import { usePathname } from "next/navigation";
import { WalletManager } from "../../utils/connect_wallet";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const walletManager = new WalletManager();
  const router = useRouter();

  const handleDisconnect = async () => {
    walletManager.disconnectWallet();
    localStorage.removeItem("walletConnected");
    localStorage.removeItem("walletAddress");
    localStorage.removeItem("isStaked");
    router.push("/stake");
  };

  return (
    <div className="flex bg-zinc-950 py-[1.5vw] px-[1.5vw] fixed z-10 flex-row justify-between w-full items-center">
      <div className="flex flex-row items-center justify-start">
        <div
          id="Ellipse6"
          className="bg-[url(https://file.rendit.io/n/EqzVshX3tL42A3YRxuql.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat relative flex flex-row justify-center mt-px w-12 h-12 items-center -left-5"
        >
          <img
            src="https://file.rendit.io/n/yGydWNJcxTGpgcriKI8K.svg"
            alt="Vector2"
            className="w-[17px] h-[17px] origin-top-left rotate-[-0deg]"
          />
        </div>
        <div className="flex flex-row justify-between gap-3 items-center">
          <a
            href="/"
            className={`text-4xl font-['Aileron'] font-light leading-[48px] text-white ${
              pathname === "/" ? "opacity-100" : "opacity-30"
            } cursor-pointer`}
          >
            Home
          </a>
          <a
            href="/createRelease"
            className={`text-4xl font-['Aileron'] font-light leading-[48px] text-white ${
              pathname === "/createRelease" ? "opacity-100" : "opacity-30"
            } cursor-pointer`}
          >
            Create
          </a>
          <a
            href="/dashboard"
            className={`text-4xl font-['Aileron'] font-light leading-[48px] text-white ${
              pathname === "/dashboard" ? "opacity-100" : "opacity-30"
            } cursor-pointer`}
          >
            Dashboard
          </a>
          <img
            src="https://file.rendit.io/n/0qOa1cpotCzSOnIbUhn0.svg"
            alt="Search"
            id="Search"
            className="w-10"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between items-center gap-4">
        {/* <div className="backdrop-blur-[24px] shadow-[2px_4px_48px_0px_rgba(0,_0,_0,_0.5)] bg-[linear-gradient(159deg,_rgba(28,_30,_34,_0.33)_-9%,rgba(31,_34,_40,_0.5)_113%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-end gap-10 items-center p-1 rounded-[24px]">
                    <div className="flex flex-row gap-2 w-16 items-center">
                        <img
                            src="https://file.rendit.io/n/biEAQlVezNJF0nwE6YQ7.svg"
                            alt="Ellipse5"
                            id="Ellipse5"
                            className="w-6 ml-2"
                        />
                        <div className="font-['Aileron'] font-light text-white">
                            0
                        </div>
                    </div>
                    <div
                        id="Ellipse4"
                        className="bg-[url(https://file.rendit.io/n/PUBsjlM60pCu0Nr1DFsn.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-center w-12 h-12 items-center"
                    >
                        <img
                            src="https://file.rendit.io/n/2MsiJ95iJMNwJITgevH6.svg"
                            alt="Vector1"
                            className="w-3"
                        />
                    </div>
                </div> */}
        <div className="backdrop-blur-[24px] shadow-[2px_4px_48px_0px_rgba(0,_0,_0,_0.5)] bg-[linear-gradient(159deg,_rgba(28,_30,_34,_0.33)_-9%,rgba(31,_34,_40,_0.5)_113%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-end gap-10 items-center p-1 rounded-[24px]">
          <div className="flex flex-row gap-2 w-16 items-center">
            <img
              src="https://svgshare.com/i/10hN.svg"
              alt="Ellipse3"
              id="Ellipse3"
              className="w-6  ml-2"
            />
            <div className="font-['Aileron'] font-light leading-[24px] text-white">
              0
            </div>
          </div>
          <div
            id="Ellipse2"
            className="bg-[url(https://file.rendit.io/n/bH6aHaz0mgBlxNORTOAL.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-center w-12 h-12 items-center"
          >
            <img
              src="https://file.rendit.io/n/2MsiJ95iJMNwJITgevH6.svg"
              alt="Vector"
              className="w-3"
            />
          </div>
        </div>
        <div className="backdrop-blur-[24px] shadow-[2px_4px_48px_0px_rgba(0,_0,_0,_0.5)] bg-[linear-gradient(159deg,_rgba(28,_30,_34,_0.33)_-9%,rgba(31,_34,_40,_0.5)_113%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-end gap-10 items-center p-1 rounded-[24px]">
          <div className="opacity-60 font-['Aileron'] font-light text-white ml-4">
            {walletManager.getAddress().substring(0, 30) + `...`}
          </div>
          <div className="flex flex-row gap-1 items-center">
            <div className="relative flex flex-row justify-end items-center">
              <button onClick={handleDisconnect}>
                <img
                  src="https://file.rendit.io/n/2MsiJ95iJMNwJITgevH6.svg"
                  alt="Ellipse1"
                  className="w-3"
                />
              </button>
              <img
                src="https://svgshare.com/i/10iD.svg"
                alt="Ellipse2"
                id="Ellipse2"
                className="w-12 h-12 -translate-x-1"
              />
            </div>
          </div>
          <img
            src="https://file.rendit.io/n/8318G9zIkHzBWGQcx4qy.svg"
            alt="Ellipse"
            id="Ellipse"
            className="w-12"
          />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
