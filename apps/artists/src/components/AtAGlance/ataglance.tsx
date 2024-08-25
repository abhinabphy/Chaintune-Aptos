const AtAGlance = () => {
    return (
        <div className="w-[1012px] h-auto bg-gradient-to-b from-zinc-900 to-neutral-800 rounded-3xl shadow border border-white border-opacity-5 backdrop-blur-[120px] p-4">
            <div style={{display :'flex',flexDirection :'row',justifyContent :'space-between'}}>
            <div className="mb-4 text-white text-xl font-light font-['Aileron'] leading-7">Support Flume</div>
            <div className="mb-4 text-white text-xl font-light font-['Aileron'] leading-7">At A Glance</div>
            </div>
            <div className="flex" style={{justifyContent :'space-between'}}>

            <div className="w-80 h-60 bg-zinc-900 bg-opacity-80 rounded-2xl  relative">
                    <div className="w-80 h-60 relative bg-zinc-900 bg-opacity-80 rounded-2xl ">
                        <div className="w-40 h-40 left-[8px] top-[8px] absolute bg-gradient-to-br from-slate-500 via-indigo-700 to-violet-800 rounded-3xl shadow border border-white border-opacity-5" />
                        <div className="w-[304px] h-12 left-[8px] top-[184px] absolute bg-gradient-to-b from-zinc-900 to-neutral-800 rounded-3xl border border-white border-opacity-5 backdrop-blur-[120px] flex items-center pl-2">
                            <div className="w-6 h-6 bg-neutral-700 bg-opacity-30 rounded-full border-2 mr-2"></div>
                            <input type="text" placeholder="Enter CHT Amount..." className="flex-grow opacity-40 text-white text-sm font-normal font-['Aileron'] leading-tight bg-transparent" />
                        </div>

                        <div className="left-[28px] top-[92px] absolute text-white text-[28px] font-light font-['Aileron'] leading-normal">Direct<br />Donation</div>
                    </div>
                </div>
                <div className="w-96 h-36 bg-zinc-900 bg-opacity-50 rounded-2xl  relative">
                    <div className="left-[20px] top-[16px] absolute opacity-60 text-white text-sm font-normal font-['Aileron'] leading-tight">Monthly Listeners</div>
                    <div className="left-[192px] top-[16px] absolute opacity-60 text-white text-sm font-normal font-['Aileron'] leading-tight">Followers</div>
                    <div className="left-[192px] top-[86px] absolute opacity-60 text-white text-sm font-normal font-['Aileron'] leading-tight">NFTs Minted</div>
                    <div className="left-[20px] top-[86px] absolute opacity-60 text-white text-sm font-normal font-['Aileron'] leading-tight">Profile Minted On</div>
                    <div className="left-[20px] top-[40px] absolute text-white text-2xl font-normal font-['Aileron'] leading-loose">173,929</div>
                    <div className="left-[192px] top-[40px] absolute text-white text-2xl font-normal font-['Aileron'] leading-loose">384,881</div>
                    <div className="left-[192px] top-[108px] absolute text-white text-sm font-normal font-['Aileron'] leading-tight">212</div>
                    <div className="left-[20px] top-[108px] absolute text-white text-sm font-normal font-['Aileron'] leading-tight">04th Jan 2020</div>
                </div>
                
            </div>
        </div>
    );
}

export default AtAGlance;

