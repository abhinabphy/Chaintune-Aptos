const ArtistPicks = () => {
    return (
        <div className="w-[1012px] h-60 relative bg-gradient-to-b from-zinc-900 to-neutral-800 rounded-3xl shadow backdrop-blur-[120px]">
        <div className="left-[24px] top-[18px] absolute text-white text-xl font-light font-['Aileron'] leading-7">Artist Picks</div>
        <div className="w-12 h-12 left-[952px] top-[8px] absolute bg-gradient-to-b from-zinc-900 to-neutral-800 rounded-full backdrop-blur-[120px]" />
        <div className="w-[494px] h-44 left-[8px] top-[56px] absolute rounded-2xl backdrop-blur-[120px]">
          <img className="w-40 h-40 left-[8px] top-[8px] absolute rounded-lg backdrop-blur-[120px]" src="https://via.placeholder.com/160x160" />
          <div className="w-[236px] left-[188px] top-[78px] absolute text-white text-2xl font-normal font-['Aileron'] leading-loose">Weekly Chill Mix</div>
          <div className="w-[286px] left-[188px] top-[116px] absolute opacity-60 text-white text-base font-normal font-['Aileron'] leading-tight">Metronomy, Fleet Foxes, Pixies, U2, Frank Ocean and more...</div>
          <div className="px-3 py-1.5 left-[188px] top-[20px] absolute bg-white bg-opacity-10 rounded-[30px] justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-xs font-normal font-['Aileron'] leading-tight">Indie Rock</div>
          </div>
          <div className="px-3 py-1.5 left-[275px] top-[20px] absolute bg-white bg-opacity-10 rounded-[30px] justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-xs font-normal font-['Aileron'] leading-tight">Shoegaze</div>
          </div>
          <div className="px-3 py-1.5 left-[359px] top-[20px] absolute bg-white bg-opacity-10 rounded-[30px] justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-xs font-normal font-['Aileron'] leading-tight">Dreampop</div>
          </div>
          <div className="w-6 h-6 left-[164px] top-[144px] absolute opacity-60" />
        </div>
        <div className="w-[494px] h-44 left-[510px] top-[56px] absolute rounded-2xl backdrop-blur-[120px]">
          <img className="w-40 h-40 left-[8px] top-[8px] absolute rounded-lg backdrop-blur-[120px]" src="https://via.placeholder.com/160x160" />
          <div className="w-[236px] left-[188px] top-[78px] absolute text-white text-2xl font-normal font-['Aileron'] leading-loose">Weekly Dance Mix</div>
          <div className="w-[286px] left-[188px] top-[116px] absolute opacity-60 text-white text-base font-normal font-['Aileron'] leading-tight">Metronomy, Fleet Foxes, Pixies, U2, Frank Ocean and more...</div>
          <div className="px-3 py-1.5 left-[188px] top-[20px] absolute bg-white bg-opacity-10 rounded-[30px] justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-xs font-normal font-['Aileron'] leading-tight">Indie Rock</div>
          </div>
          <div className="px-3 py-1.5 left-[275px] top-[20px] absolute bg-white bg-opacity-10 rounded-[30px] justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-xs font-normal font-['Aileron'] leading-tight">Shoegaze</div>
          </div>
          <div className="px-3 py-1.5 left-[359px] top-[20px] absolute bg-white bg-opacity-10 rounded-[30px] justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-xs font-normal font-['Aileron'] leading-tight">Dreampop</div>
          </div>
          <div className="w-6 h-6 left-[164px] top-[144px] absolute opacity-60" />
        </div>
      </div>

    );
}

export default ArtistPicks;
