const Community = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between',width:'1012px' }}>
            <div className="w-[370px] h-80 relative bg-gradient-to-b from-zinc-900 to-neutral-800 rounded-3xl shadow backdrop-blur-[120px]">
                <div className="left-[24px] top-[18px] absolute text-white text-xl font-light font-['Aileron'] leading-7">Community</div>
                <div className="w-[360px] h-64 left-[8px] top-[56px] absolute bg-zinc-900 bg-opacity-80 rounded-2xl backdrop-blur-[120px]">
                    <div className="w-[344px] h-12 left-[8px] top-[199px] absolute bg-gradient-to-b from-zinc-900 to-neutral-800 rounded-3xl backdrop-blur-[120px]" />
                    <div className="left-[56px] top-[213px] absolute text-white text-sm font-normal font-['Aileron'] leading-tight">Join using Discord</div>
                    <div className="w-6 h-6 left-[24px] top-[211px] absolute" />
                    <div className="left-[92px] top-[36px] absolute text-white text-2xl font-light font-['Aileron'] leading-normal">Flume</div>
                    <div className="w-[328px] left-[16px] top-[143px] absolute opacity-60 text-white text-sm font-normal font-['Aileron'] leading-tight">Get access to exclusive direct interactions with the artist, early announcements, and more...</div>
                    <div className="px-3 py-1.5 left-[16px] top-[103px] absolute bg-white bg-opacity-10 rounded-[30px] justify-center items-center gap-2.5 inline-flex">
                        <div className="text-white text-xs font-normal font-['Aileron'] leading-tight">For Collection Holders</div>
                    </div>
                    <img className="w-16 h-16 left-[16px] top-[16px] absolute rounded-[32px] backdrop-blur-[120px]" src="https://via.placeholder.com/64x64" />
                </div>
            </div>
            <div className="w-[630px] h-80 relative bg-gradient-to-b from-zinc-900 to-neutral-800 rounded-3xl shadow border border-white border-opacity-5 backdrop-blur-[120px]">
                
                <div className="left-[18px] top-[18px] absolute text-white text-xl font-light font-['Aileron'] leading-7">About the Artist</div>
                
                <div className="w-[592px] left-[18px] top-[64px] absolute opacity-60 text-white text-base font-normal font-['Aileron'] leading-tight">Morbi ultrices quis velit quis vehicula. Donec eu magna et massa consectetur ullamcorper vel vel arcu. Vestibulum congue erat in aliquam vehicula. Sed molestie volutpat porta. Vestibulum vulputate elementum mi, vehicula posuere tortor lobortis vel. Nam aliquam nec sapien quis mattis. Sed augue nunc, imperdiet at est eget, egestas dapibus neque.<br />In pellentesque mollis diam quis porttitor. Duis venenatis erat nec maximus aucto...Morbi ultrices quis velit quis vehicula. Donec eu magna et massa consectetur ullamcorper vel vel arcu. Vestibulum congue erat in aliquam vehicula. Sed molestie volutpat porta. Vestibulum vulputate elementum mi, vehicula posuere tortor lobortis vel. Nam aliquam nec sapien quis mattis. Sed augue nunc, imperdiet at est eget, egestas dapibus neque.<br />In pellentesque mollis diam quis porttitor. Duis venenatis erat nec maximus aucto...</div>
            </div>

        </div>

    );
}

export default Community;
