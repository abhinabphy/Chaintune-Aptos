import React from "react";
import star from "../assets/Star1.svg";
import NextImage from "next/image";

const ArtistBar = () => {
  return (
    <>
      <div className="h-[376px] w-[1440px] bg-orange-600 mx-auto relative">
        <div className="flex items-center  absolute top-0 bottom-0 left-24">
          <NextImage src={star} alt="" width={160} height={160} />
          <div className="mx-8">
            <div className="text-white text-5xl font-light font-['Aileron'] leading-[56px] mb-2">
              Flume
            </div>
            <div className="w-[167px] h-8 px-3 py-1.5 bg-white bg-opacity-10 rounded-[30px] justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-xs font-normal font-['Aileron'] leading-tight">
                172,494 Monthly Listeners
              </div>
            </div>

            <div className="w-[167px] h-8 px-3 py-1.5 bg-white bg-opacity-10 rounded-[30px] justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-xs font-normal font-['Aileron'] leading-tight">
                172,494 Monthly Listeners
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtistBar;
