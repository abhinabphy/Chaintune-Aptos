import React from 'react'
import arrow from '../../assets/arrow.svg'
import cover from '../../assets/cover.svg'
import NextImage from 'next/image';


const TopNFT = () => {
  return (
    <>
    <div className="w-[1012px] h-52 left-0 top-0 absolute rounded-3xl shadow  backdrop-blur-[120px]">
        <div className="w-96 h-36 left-[16px] top-[56px] absolute bg-zinc-900 bg-opacity-80 rounded-2xl  backdrop-blur-[120px]">
        <div className="left-[20px] top-[16px] absolute opacity-60 text-white text-sm font-normal font-['Aileron'] leading-tight">Minted</div>
        <div className="left-[135px] top-[16px] absolute opacity-60 text-white text-sm font-normal font-['Aileron'] leading-tight">Final Price</div>
        <div className="left-[20px] top-[86px] absolute opacity-60 text-white text-sm font-normal font-['Aileron'] leading-tight">Total Sales</div>
        <div className="left-[135px] top-[86px] absolute opacity-60 text-white text-sm font-normal font-['Aileron'] leading-tight">Collection of</div>
        <div className="left-[262px] top-[86px] absolute opacity-60 text-white text-sm font-normal font-['Aileron'] leading-tight">Owned by</div>
        <div className="left-[20px] top-[40px] absolute text-white text-2xl font-normal font-['Aileron'] leading-loose">25/25</div>
        <div className="left-[135px] top-[40px] absolute text-white text-2xl font-normal font-['Aileron'] leading-loose">0.2305 ETH</div>
        <div className="left-[20px] top-[108px] absolute text-white text-sm font-normal font-['Aileron'] leading-tight">6.262 ETH</div>
        <div className="left-[135px] top-[108px] absolute text-white text-sm font-normal font-['Aileron'] leading-tight">25</div>
        <div className="left-[262px] top-[108px] absolute text-white text-sm font-normal font-['Aileron'] leading-tight">20</div>
        </div>
        <div className="left-[24px] top-[18px] absolute"><span className="text-white text-xl font-light font-['Aileron'] leading-7">NFT Collection: </span><span className="text-white text-opacity-40 text-xl font-light font-['Aileron'] leading-7">Launched Sep 05</span></div>
        <div className="left-[850px] top-[18px] absolute opacity-40 text-right text-white text-xl font-light font-['Aileron'] leading-7">25/25 Sold</div>
        <div className="w-12 h-12 left-[956px] top-[8px] absolute bg-gradient-to-b from-zinc-900 to-neutral-800 rounded-full border border-white border-opacity-5 backdrop-blur-[120px]" >
            <NextImage src={arrow} alt="" className='mx-auto my-4' />
        </div>
        <div className="left-[408px] top-[56px] w-[600px] absolute flex justify-between overflow-auto">
            <SoldItems/>
            <SoldItems/>
            <SoldItems/>
            <SoldItems/>
        

        </div>
  </div>
    </>
  )
}


const SoldItems=()=>{
    return (
        <>
        <div className="w-[304px] px-2 pt-2 pb-1 rounded-3xl justify-start items-start flex mr-24">
        
        <NextImage className='w-32 h-32 rounded backdrop-blur-[120px]' alt="" src={cover}/>
        <div className="w-44 h-32 flex-col justify-between items-start inline-flex">
          <div className="h-[78px] px-3 pt-2 flex-col justify-start items-start gap-1 flex">
            <div className=" text-white text-base font-normal font-['Aileron'] leading-normal">Nothing Happens #1</div>
            <div className="w-[152px] opacity-50 text-white text-sm font-normal font-['Aileron'] leading-[18px]">Last Sold: 0.2305 ETH</div>
          </div>
          <div className="h-9 px-3 pb-3 flex-col justify-start items-start gap-1 flex">
            <div className="text-white text-base font-normal font-['Aileron'] leading-normal">@larsvander</div>
          </div>
        </div>
      </div>

        </>
    )
}

export default TopNFT