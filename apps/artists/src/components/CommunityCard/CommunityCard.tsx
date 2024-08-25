/* eslint-disable @next/next/no-img-element */
const CommunityCard = () => {
    return (
        <div className="w-[23vw] h-[16vw] backdrop-blur-[24px] shadow-[2px_4px_48px_0px_rgba(0,_0,_0,_0.5)] bg-[linear-gradient(159deg,_rgba(28,_30,_34,_0.33)_-9%,rgba(31,_34,_40,_0.5)_113%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col gap-1 items-start pt-2 pb-4 px-2 rounded-[24px]">
        <div className="flex flex-row justify-between ml-4 w-full items-start">
          <div className="text-xl font-['Aileron'] font-light leading-[28px] text-white mt-2">
            Community Info
          </div>
          <div
            id="Ellipse"
            className="bg-[url(https://file.rendit.io/n/Z7sMxDZjcoTR2Ar8gQJ0.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-center pt-4 w-12 h-12 items-start mr-[1vw]"
          >
            <img
              src="https://file.rendit.io/n/2MsiJ95iJMNwJITgevH6.svg"
              alt="Vector"
              className="w-3"
            />
          </div>
        </div>
        <div className="w-[20vw] h-[12vw] bg-[rgba(28,_30,_34,_0.8)] flex flex-col justify-center ml-2 gap-3 items-start pt-3 pb-2 px-3 rounded-2xl">
          <div className="flex flex-row gap-3 w-5/6 items-center">
            <div className="flex items-center border-solid border-white/6 shadow-[0px_4px_32px_0px_rgba(76,_45,_216,_0.5),_-4px_-2px_16px_0px_rgba(75,_80,_182,_0.2)] bg-[linear-gradient(138deg,_#4a6a9b_6%,#4b27dd_98%,#5e14bc_130%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex-row justify-center pt-4 w-16 h-12 border rounded-[24px]">
              <img
                src="https://file.rendit.io/n/CJtZc26trO6kIbyeoicp.svg"
                alt="DiscordNew"
                id="DiscordNew"
                className="w-8 h-8 mb-[1vw] items-center"
              />
            </div>
            <div className="font-['Aileron'] leading-[22px] text-white mt-0">
              Connected to “Flume’s Tavern”
            </div>
          </div>
          <div className="flex flex-col gap-1 w-full items-start">
            <div className="opacity-60 text-sm font-['Aileron'] font-light leading-[20px] text-white">
              Open to
            </div>
            <div className="border-solid border-white/6 backdrop-blur-[24px] bg-[linear-gradient(159deg,_rgba(28,_30,_34,_0.33)_-9%,rgba(31,_34,_40,_0.5)_113%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-between w-full items-start pt-1 pl-1 pr-4 hover:border rounded-lg">
              <div className="text-sm ml-[0.5vw] font-['Aileron'] leading-[20px] text-white bg-white/6 flex flex-row justify-center mb-1 pt-2 w-2/5 h-8 items-start rounded-lg">
                Top Contributors
              </div>
              <img
                src="https://file.rendit.io/n/DBCBYLtz1AAGuLQMnRSm.svg"
                alt="Chevrondown"
                id="Chevrondown"
                className="mt-2 w-5"
              />
            </div>
          </div>
        </div>
      </div>
      
    );
}

export default CommunityCard;