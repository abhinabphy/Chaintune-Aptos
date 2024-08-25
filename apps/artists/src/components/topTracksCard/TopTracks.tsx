import React from 'react'
import Track from "./Track"
import './TopTracks.css'
import arrow from '../../assets/arrow.svg'
import NextImage from 'next/image';

const TopTracks = () => {


  return (
    <>
        <div className="w-[1012px] h-[418px] relative bg-gradient-to-b from-zinc-900 to-neutral-800 rounded-3xl shadow border border-white border-opacity-5 backdrop-blur-[120px] overflow-auto mx-auto my-2">
            <div className="left-[24px] top-[18px] absolute text-white text-xl font-light font-['Aileron'] leading-7">Top Tracks</div>
            <div className="w-12 h-12 left-[940px] top-[8px] absolute bg-gradient-to-b from-zinc-900 to-neutral-800 rounded-full border border-white border-opacity-5 backdrop-blur-[120px]">
                <NextImage src={arrow} alt="" className='mx-auto my-4' />
            </div>
            <div className="h-[354px] left-[8px] top-[56px] absolute flex-col justify-start items-start inline-flex">
                <div className="w-[996px] pl-4 pr-6 py-2 rounded-xl justify-start items-center gap-3 inline-flex">
                <div className="w-[21px] opacity-60 text-white text-sm font-normal font-['Aileron'] leading-[18px]">#</div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                    <div className="text-white text-sm font-normal font-['Aileron'] leading-[18px]">Title</div>
                </div>
                <div className="w-[200px] opacity-60 text-white text-sm font-normal font-['Aileron'] leading-[18px]">Album</div>
                <div className="w-[200px] opacity-60 text-white text-sm font-normal font-['Aileron'] leading-[18px]">Number of Listens</div>
                <div className="w-14 opacity-60 text-right text-white text-sm font-normal font-['Aileron'] leading-[18px]">Duration</div>
                <div className="w-5 opacity-60 text-right text-white text-sm font-normal font-['Aileron'] leading-[18px]"> </div>
                </div>
                    <Track/>
                    <Track/>
                    <Track/>
                    <Track/>
                    <Track/>
                    <Track/>
                    <Track/>
                    <Track/>
                
                </div>
        </div>
    </>
  )
}

export default TopTracks