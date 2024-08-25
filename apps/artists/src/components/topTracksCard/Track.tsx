import React from 'react'
import NextImage from 'next/image';
import song from '../../assets/song.svg'

const Track = () => {
  return (
    <>
        <div className="self-stretch pl-4 pr-6 py-2 rounded-xl justify-start items-center gap-3 inline-flex">
            <div className="w-[21px] opacity-60 text-white text-sm font-normal font-['Aileron'] leading-[18px]">01</div>
            <NextImage src={song} alt="" width={48} height={48} />
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                <div className="text-white text-sm font-normal leading-[18px]">Murder on my mind</div>
            </div>
            <div className="w-[200px] opacity-60 text-white text-sm font-normal font-['Aileron'] leading-[18px]">YNW Melly</div>
            <div className="w-[200px] opacity-60 text-white text-sm font-normal font-['Aileron'] leading-[18px]">10,024,224</div>
            <div className="w-14 opacity-60 text-right text-white text-sm font-normal font-['Aileron'] leading-[18px]">02:43</div>
            <div className="w-5 h-5 relative opacity-60"></div>
        </div>
    </>
  )
}

export default Track