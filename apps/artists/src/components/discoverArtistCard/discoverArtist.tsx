import React from 'react'
import Gloomcore from "./gloomCore"
const discoverArtist = () => {
  return (
    <>
        <div className='w-[1012px] h-[320px] bg-gradient-to-b from-zinc-900 to-neutral-800 rounded-3xl shadow backdrop-blur-[120px] mx-auto my-2'>
            <div className="text-white text-xl font-light font-['Aileron'] leading-7 ml-4 py-4">Discover Flume</div>
            <div className='flex'>
                <div className='w-[472px] h-[256px] mx-5'>
                    <Gloomcore/>
                </div>
                <div className='w-[480px] h-[256px] flex overflow-auto'>
                    <Gloomcore/>
                    <Gloomcore/>
                    <Gloomcore/>
                    <Gloomcore/>
                </div>
            </div>
        </div>
    </>
  )
}

export default discoverArtist