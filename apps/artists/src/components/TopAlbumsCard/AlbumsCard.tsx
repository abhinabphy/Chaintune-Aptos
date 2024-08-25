/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';

const AlbumsCard = () => {
    const [streamsDropdownOpen, setStreamsDropdownOpen] = useState(false);
    const [dropdownContent, setDropdownContent] = useState('Streams');

    const toggleStreamsDropdown = () => {
        setStreamsDropdownOpen(!streamsDropdownOpen);
    };

    const handleDropdownSelect = (content: React.SetStateAction<string>) => {
        setDropdownContent(content);
        setStreamsDropdownOpen(false); // Close dropdown after selection (optional)
    };

    return (
        <div className="w-[60vw] h-[19vw] py-[1vw] overflow-x-scroll backdrop-blur-[24px] shadow-[2px_4px_48px_0px_rgba(0,_0,_0,_0.5)] bg-[linear-gradient(159deg,_rgba(28,_30,_34,_0.33)_-9%,rgba(31,_34,_40,_0.5)_113%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col items-start rounded-[24px]">
            {/* Header */}
            <div className="flex flex-row justify-between ml-6 w-full items-start">
                <div className="text-xl font-['Aileron'] font-light leading-[28px] text-white mt-2">
                    Top Albums
                </div>
                <div className="flex flex-row gap-2 items-start">
                    {/* Streams Dropdown */}
                    <div
                        onClick={toggleStreamsDropdown}
                        className="px-[1vw] border-white/6 backdrop-blur-[24px] bg-[linear-gradient(159deg,_rgba(28,_30,_34,_0.33)_-9%,rgba(31,_34,_40,_0.5)_113%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-center pt-3 gap-10 w-3/4 h-12 items-start hover:border rounded-[24px] relative"
                    >
                        <div
                            className="text-sm font-['Aileron'] font-light leading-[20px] text-white cursor-pointer"
                        >
                            {dropdownContent}
                        </div>
                        <img
                            src="https://file.rendit.io/n/ipig7LxwhV3OqG5PjtAJ.svg"
                            alt="Vector1"
                            className="mt-1 ml-[2vw] w-4"
                        />
                        {/* Streams Dropdown Content */}
                        {streamsDropdownOpen && (
                            <div className="cursor-pointer absolute flex flex-col items-center top-full left-0 mt-1 py-2 w-full bg-white shadow-lg rounded bg-[linear-gradient(159deg,_rgba(28,_30,_34,_0.33)_-9%,rgba(31,_34,_40,_0.5)_113%)]">
                                <div onClick={() => handleDropdownSelect('Streams')}>Streams</div>
                                <div onClick={() => handleDropdownSelect('Likes')}>Likes</div>
                                <div onClick={() => handleDropdownSelect('Downloads')}>Downloads</div>
                            </div>
                        )}
                    </div>
                    {/* Replace with Ellipse div */}
                    <div className='mr-[2vw]'>
                        <div
                            id="Ellipse"
                            className="bg-[url(https://file.rendit.io/n/hFDw82HrRzW9e8IomtV9.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-center pt-4 w-12 h-12 items-start"
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
            {/* Scrollable Albums */}
            <div className="flex flex-row overflow-x-scroll scroll-smooth mt-4 pb-4 gap-[2vw]">
                {Array.from(Array(0).keys()).map((index) => (
                    <div
                        key={index}
                        className="bg-[rgba(28,_30,_34,_0.8)] flex flex-row gap-4 w-[25vw] items-start pt-2 px-2 mx-[1vw] rounded-lg"
                    >
                        <img
                            src="https://file.rendit.io/n/9g1xOjeJcwAKem8e97VG.png"
                            alt={`Rectangle${index}`}
                            className="mb-2"
                        />
                        <div className="flex flex-col mt-2 gap-8 w-1/2 items-start">
                            <div className="text-xl font-['Aileron'] font-light leading-[24px] text-white w-full">
                                {`1. Lucifer On The Sofa ${index + 1}`}
                            </div>
                            <div className="flex flex-col gap-px w-2/3 items-start">
                                <div className="text-sm font-['Aileron'] leading-[22px] text-white">
                                    0 streams
                                </div>
                                <div className="opacity-60 text-sm font-['Aileron'] leading-[22px] text-white">
                                    +0 last week
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AlbumsCard;
