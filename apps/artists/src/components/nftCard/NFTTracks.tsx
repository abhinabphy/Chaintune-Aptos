import React from 'react'
import cover from '../../assets/cover.svg'
import NextImage from 'next/image';

const NFTTracks = () => {
  return (
    <>
        <div className="self-stretch pl-4 pr-6 py-2 bg-zinc-900 bg-opacity-80 rounded-xl justify-start items-center gap-3 inline-flex">
          <div className="w-[21px] opacity-60 text-white text-sm font-normal font-['Aileron'] leading-[18px]">01</div>
          <NextImage className='w-12 h-12 rounded-lg' alt="" src={cover}/>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
            <div className="text-white text-sm font-normal font-['Aileron'] leading-[18px]">Nice For What</div>
            <div className="opacity-60 text-white text-xs font-normal font-['Aileron'] leading-none">Drake</div>
          </div>
          <div className="w-40 opacity-60 text-white text-sm font-normal font-['Aileron'] leading-[18px]">3,601,507</div>
          <div className="w-24 opacity-60 text-white text-sm font-normal font-['Aileron'] leading-[18px]">2 days ago</div>
          <div className="w-14 opacity-60 text-right text-white text-sm font-normal font-['Aileron'] leading-[18px]">02:43</div>
          <div className="w-5 h-5 relative opacity-60" />
        </div>
    </>
  )
}

export default NFTTracks