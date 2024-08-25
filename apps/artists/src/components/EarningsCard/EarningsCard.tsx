/* eslint-disable @next/next/no-img-element */
const EarningsCard = () => {
    return (
        <div className="backdrop-blur-[24px] shadow-[2px_4px_48px_0px_rgba(0,_0,_0,_0.5)] bg-[linear-gradient(159deg,_rgba(28,_30,_34,_0.33)_-9%,rgba(31,_34,_40,_0.5)_113%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col gap-5 w-full items-start p-2 rounded-[24px]">
            <div className="flex py-[1vw] flex-col justify-between gap-2 w-full items-start">
                <div className="flex flex-row justify-between ml-4 w-full items-start">
                    <div className="text-xl font-['Aileron'] font-light leading-[28px] text-white mt-2">
                        Earnings
                    </div>
                    <div className="flex flex-row justify-between w-1/3 items-start">
                        <div className="text-sm font-['Aileron'] font-light leading-[20px] text-white border-solid border-white/6 backdrop-blur-[24px] bg-[linear-gradient(159deg,_rgba(28,_30,_34,_0.33)_-9%,rgba(31,_34,_40,_0.5)_113%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-center pt-3 w-24 h-12 items-start hover:border rounded-[24px]">
                            Withdraw
                        </div>
                        <div className="mr-[2vw]">
                            <div
                                id="Ellipse"
                                className="bg-[url(https://file.rendit.io/n/EpHqBUzdttHeTJ79AZov.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-center pt-4 w-12 h-12 items-start"
                            >
                                <img
                                    src="https://file.rendit.io/n/2MsiJ95iJMNwJITgevH6.svg"
                                    alt="Vector"
                                    className="w-3"
                                />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bg-[rgba(28,_30,_34,_0.8)] my-[2vw] flex flex-row gap-2 w-full h-12 items-start pt-4 px-4 hover:border rounded-lg">
                    <img
                        src="https://file.rendit.io/n/biEAQlVezNJF0nwE6YQ7.svg"
                        alt="Ellipse1"
                        id="Ellipse1"
                        className="w-6"
                    />
                    <div className="flex flex-row gap-1 w-1/6 items-start">
                        <div className="font-['Aileron'] leading-[24px] text-white">
                            CHT 0
                        </div>
                        <div className="text-xs font-['Aileron'] leading-[18px] text-[#76d86e] mt-1">
                            +0%
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center w-full items-start gap-[1vw]">
                    <div className="border-solid border-white/8 backdrop-blur-[24px] bg-[rgba(28,_30,_34,_0.8)] flex flex-row gap-3 w-1/4 items-start pt-2 px-2 hover:border rounded-lg">
                        <div
                            id="Image1"
                            className="border-solid border-white/6 shadow-[0px_4px_32px_0px_rgba(76,_45,_216,_0.5),_-4px_-2px_16px_0px_rgba(75,_80,_182,_0.2)] bg-[linear-gradient(138deg,_#4a6a9b_6%,#4b27dd_98%,#5e14bc_130%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat mb-2 w-12 h-12 border rounded-[24px]"
                        />
                        <div className="flex flex-col mt-1 gap-px w-16 items-start">
                            <div className="text-sm font-['Aileron'] leading-[18px] text-white">
                                NFTs
                            </div>
                            <div className="opacity-60 text-xs font-['Aileron'] leading-[16px] text-white">
                                CHT 0
                            </div>
                        </div>
                    </div>
                    <div className="border-solid border-white/8 backdrop-blur-[24px] bg-[rgba(28,_30,_34,_0.8)] flex flex-row gap-3 w-1/4 items-start pt-2 px-2 hover:border rounded-lg">
                        <div
                            id="Image1"
                            className="border-solid border-white/6 shadow-[0px_4px_32px_0px_rgba(76,_45,_216,_0.5),_-4px_-2px_16px_0px_rgba(75,_80,_182,_0.2)] bg-[linear-gradient(138deg,_#4a6a9b_6%,#4b27dd_98%,#5e14bc_130%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat mb-2 w-12 h-12 border rounded-[24px]"
                        />
                        <div className="flex flex-col mt-1 gap-px w-16 items-start">
                            <div className="text-sm font-['Aileron'] leading-[18px] text-white">
                                Royalties
                            </div>
                            <div className="opacity-60 text-xs font-['Aileron'] leading-[16px] text-white">
                                CHT 0
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default EarningsCard;