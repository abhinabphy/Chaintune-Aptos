/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const CreateCard = (): JSX.Element => {
  return (
    <div className="w-[28vw] h-[26vw] backdrop-blur-[24px] bg-[linear-gradient(159deg,_rgba(28,_30,_34,_0.33)_-9%,rgba(31,_34,_40,_0.5)_113%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-end gap-2 items-start pt-4 pb-2 px-2 rounded-[24px]">
      <div className="text-xl font-['Aileron'] font-light leading-[28px] text-white ml-4">
        Upload Music
      </div>
      <div className="shadow-[0px_4px_32px_0px_rgba(76,_45,_216,_0.5),_-4px_-2px_16px_0px_rgba(75,_80,_182,_0.2)] bg-[linear-gradient(138deg,_#4a6a9b_6%,#4b27dd_98%,#5e14bc_130%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-between w-full h-[296px] items-start pt-6 pb-2 pl-2 rounded-[24px]">
        <div className="text-3xl font-['Aileron'] font-light leading-[36px] text-white ml-4 w-2/3">
          70% royalties, instant payouts.
        </div>
        <div className="pr-[1vw] w-full">
        <Link href={'/createRelease'}>
          <div className="hover:border backdrop-blur-[24px] bg-[linear-gradient(159deg,_rgba(28,_30,_34,_0.33)_-9%,rgba(31,_34,_40,_0.5)_113%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-between w-full h-12 items-start pt-3 px-4 rounded-[24px]">
           
            <div className="text-sm font-['Aileron'] leading-[20px] text-white">
              Create Release
            </div>
            <img
              src="https://file.rendit.io/n/2MsiJ95iJMNwJITgevH6.svg"
              alt="Vector"
              className="mt-1 w-3"
            />
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateCard;