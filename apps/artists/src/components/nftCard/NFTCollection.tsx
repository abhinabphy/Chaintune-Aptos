import React from 'react'
import NFTTrack from './NFTTracks'
import TopNFT from './TopNFT'
import cover1 from '../../assets/cover1.svg'

import NextImage from 'next/image';
import playArrow from '../../assets/play_arrow.svg'
import dots from '../../assets/dots.svg'
import pocket from '../../assets/pocket.svg'

const NFTCollection = () => {
  return (
    <>
    <div className="w-[1012px] h-[758px] relative bg-gradient-to-b from-zinc-900 to-neutral-800 rounded-3xl shadow border border-white border-opacity-5 backdrop-blur-[120px] mx-auto my-2">
        <div className="w-60 h-[278px] left-[16px] top-[216px] absolute bg-zinc-900 bg-opacity-80 rounded-2xl  backdrop-blur-[120px]">
            <div className="left-[66px] top-[248px] absolute text-center text-white text-sm font-normal font-['Aileron'] leading-snug">28,342 listening now</div>
            <div className="w-5 h-5 left-[42px] top-[248px] absolute" />
        </div>
        
        <NextImage className="w-60 h-60 left-[16px] top-[216px] absolute rounded-2xl  backdrop-blur-[120px]" alt="" src={cover1}/>
        <div className="left-[288px] top-[270px] absolute text-white text-5xl font-light font-['Aileron'] leading-[56px]">Mother Nature</div>
        <div className="left-[288px] top-[338px] absolute text-white text-base font-normal font-['Aileron'] leading-snug">2019 • 54 songs</div>
        <div className="px-3 py-1.5 left-[288px] top-[226px] absolute bg-white bg-opacity-10 rounded-[30px] justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-xs font-normal font-['Aileron'] leading-tight">Album</div>
        </div>
        <div className="w-16 h-16 left-[204px] top-[266px] absolute">
            <div className="w-16 h-16 left-0 top-0 absolute bg-white rounded-full" />
            <div className="w-8 h-8 left-[20px] top-[20px] absolute">
                <NextImage src={playArrow} alt="" className='w-6 h-6'/>
            </div>
        </div>
        <div className="w-12 h-12 left-[948px] top-[218px] absolute">
            <div className="w-12 h-12 left-0 top-0 absolute bg-gradient-to-b from-zinc-900 to-neutral-800 rounded-full border border-white border-opacity-5 backdrop-blur-[120px]" />
            <div className="w-6 h-6 left-[12px] top-[12px] absolute opacity-60" >
                <NextImage src={dots} alt=""/>
            </div>
        </div>
        <div className="w-12 h-12 left-[892px] top-[218px] absolute">
            <div className="w-12 h-12 left-0 top-0 absolute bg-gradient-to-b from-zinc-900 to-neutral-800 rounded-full border border-white border-opacity-5 backdrop-blur-[120px]" />
            <div className="w-6 h-6 left-[12px] top-[13px] absolute opacity-60" >
                <NextImage src={pocket} alt=""/>
            </div>
        </div>
        <div className="h-[354px] left-[280px] top-[388px] absolute flex-col justify-start items-start inline-flex overflow-auto">
            <div className="self-stretch pl-4 pr-6 py-2 rounded-xl justify-start items-center gap-3 inline-flex">
            <div className="w-[21px] opacity-60 text-white text-sm font-normal font-['Aileron'] leading-[18px]">#</div>
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                <div className="text-white text-sm font-normal font-['Aileron'] leading-[18px]">Title</div>
            </div>
            <div className="w-40 opacity-60 text-white text-sm font-normal font-['Aileron'] leading-[18px]">Plays</div>
            <div className="w-24 opacity-60 text-white text-sm font-normal font-['Aileron'] leading-[18px]">Date Added</div>
            <div className="w-14 opacity-60 text-right text-white text-sm font-normal font-['Aileron'] leading-[18px]">Duration</div>
            <div className="w-5 opacity-60 text-right text-white text-sm font-normal font-['Aileron'] leading-[18px]"> </div>
            </div>
            {/* map here */}
            <NFTTrack/>
            <NFTTrack/>
            <NFTTrack/>
            <NFTTrack/>
            <NFTTrack/>
            <NFTTrack/>
            <NFTTrack/>
            <NFTTrack/>
            <NFTTrack/>
            <NFTTrack/>
            <NFTTrack/>
            <NFTTrack/>
        </div>
        <TopNFT/>
    </div>

    </>
  )
}

export default NFTCollection