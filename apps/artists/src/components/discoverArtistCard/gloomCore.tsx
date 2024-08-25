import React from 'react'
import NextImage from 'next/image';
import gloomImg from '../../assets/gloomcore.svg'
import arrow from '../../assets/arrow.svg'
import heart from '../../assets/heart.svg'

export const gloomCore = () => {
  return (
    <>
        <div className='w-[472px] h-[256px]'>
            <div className='flex'>
                <div className='h-[184px] w-[184px] relative'>
                <NextImage src={gloomImg} alt=""/>
                <div className="w-12 h-12 bg-gradient-to-b from-zinc-900 to-neutral-800 rounded-full backdrop-blur-[120px] relative bottom-14 left-2">
                    <NextImage src={heart} alt=""className='mx-auto pt-3'/>
                </div>
                </div>
                <div className='flex flex-col justify-between'>
                    <div className='mt-4 ml-4 text-white'>
                        <p>gloomCore</p>
                        <p>playlist.48songs</p>
                    </div>
                    <div className='mb-4 ml-4 text-white'>
                        Created by Chaintune
                    </div>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='w-[400px] h-[48px] flex mt-2 relative overflow-auto'>
                <NextImage src={gloomImg} alt=""className='h-12 w-12  mr-1'/>
                <NextImage src={gloomImg} alt=""className='h-12 w-12 mx-1'/>
                <NextImage src={gloomImg}alt="" className='h-12 w-12 mx-1'/>
                <NextImage src={gloomImg} alt=""className='h-12 w-12 mx-1'/>
                <NextImage src={gloomImg} alt=""className='h-12 w-12 mx-1'/>
                <NextImage src={gloomImg} alt=""className='h-12 w-12 mx-1'/>
                <NextImage src={gloomImg} alt=""className='h-12 w-12 mx-1'/>
                <NextImage src={gloomImg} alt=""className='h-12 w-12 mx-1'/>
                <NextImage src={gloomImg} alt=""className='h-12 w-12 mx-1'/>
                
                </div>
                <div className="w-12 h-12 bg-gradient-to-b from-zinc-900 to-neutral-800 rounded-full backdrop-blur-[120px]" >
                    <NextImage src={arrow} alt=""className='mx-auto my-4' />
                </div>

                </div>
        </div>
    </>
  )
}

export default gloomCore;

