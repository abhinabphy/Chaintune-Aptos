'use client'

import Image from 'next/image';
import Search from '@assets/search.svg'
import drop from '@assets/drop.svg'
import { CardContainer2, Wrap7, Wrap1, Options, SearchBar, DropdownButton, DropdownContainer, DropdownContent, DropdownItem, DropdownIcon, Row, Title, TitleBlock, InfoBlock, SearchText1, SearchText2, Sno } from '@styles/playlist/style';
import { useState, useEffect } from 'react';
import SearchEntry from '../SearchEntry/SearchEntry'
import { album, song } from '@types';


const options = ["Most Popular", "Most Recent", "Most Streamed"];


const SearchPlaylist = ({ album }: { album: album }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [songDurations, setSongDurations] = useState<Record<number, string>>({});

    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const getSongDuration = (songUrl: string) => {
        return new Promise((resolve) => {
            const audio = new Audio(songUrl);
            audio.addEventListener('loadedmetadata', () => {
                resolve(audio.duration);
            });
        });
    };

    const formatDuration = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
        return `${minutes}:${formattedSeconds}`;
    }

    // Function to fetch the duration of a song
    const fetchSongDuration = async (songUrl: string, index: number) => {
        // Fetch the duration of the song
        const durationInSeconds = await getSongDuration(songUrl) as number; // Assuming this function returns the duration in seconds
        const formattedDuration = formatDuration(durationInSeconds);
        setSongDurations(prevDurations => ({ ...prevDurations, [index]: `${formattedDuration}` }));
    };

    // Effect to fetch durations when the component mounts or the album changes
    useEffect(() => {
        if (album.songs) {
            album.songs.forEach((song, index) => {
                fetchSongDuration(song.animation_url, index);
            });
        }
    }, [album.songs]);
    
    return (
        <CardContainer2>
            <Wrap1>
                <Wrap7>
                    <Options src={Search} alt='' />
                    <SearchBar placeholder='Search...' />
                </Wrap7>
               
                <DropdownContainer>
                    <DropdownButton onClick={handleDropdownToggle}>Sort by: {selectedOption || 'Select'} <DropdownIcon src={drop} alt='' /></DropdownButton>
                    {isOpen ? (<DropdownContent>
                        {options.map(option => (
                            <DropdownItem key={option} onClick={() => handleOptionSelect(option)}>
                                {option}
                            </DropdownItem>
                        ))}
                    </DropdownContent>) : ""}
                </DropdownContainer>
                <Wrap7 className='hover:cursor-pointer'>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_b_111_1750)">
                            <circle cx="24" cy="24" r="24" fill="url(#paint0_linear_111_1750)" fill-opacity="0.5" />
                            <circle cx="24" cy="24" r="23.5" stroke="url(#paint1_linear_111_1750)" stroke-opacity="0.06" />
                        </g>
                        <path d="M28.9497 19.0503L19.0502 28.9498" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19.0503 19.0503L28.9498 28.9498" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <defs>
                            <filter id="filter0_b_111_1750" x="-120" y="-120" width="288" height="288" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="60" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_111_1750" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_111_1750" result="shape" />
                            </filter>
                            <linearGradient id="paint0_linear_111_1750" x1="5.41463" y1="-0.821918" x2="31.039" y2="66.0898" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#1C1E22" stop-opacity="0.66" />
                                <stop offset="0.758478" stop-color="#1F2228" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_111_1750" x1="-2.50699e-06" y1="-1.68493" x2="17.7678" y2="58.5959" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" />
                                <stop offset="1" stop-color="white" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </Wrap7>
            </Wrap1>
            <Row>
                <TitleBlock>
                    <Sno>
                        <SearchText2>
                            #
                        </SearchText2>
                    </Sno>
                    <Title>
                        <SearchText1>
                            Title
                        </SearchText1>
                    </Title>
                </TitleBlock>
                <InfoBlock>
                    <SearchText2>
                        Album
                    </SearchText2>
                    <SearchText2>
                        Date Updated
                    </SearchText2>
                    <SearchText2>
                        Duration
                    </SearchText2>
                    <SearchText2>
                    </SearchText2>
                </InfoBlock>
            </Row>
            
            { album.songs?.map((song, index) => (
                <SearchEntry 
                sno={`${index+1}`} 
                title={song.name} 
                artist={song.attributes[1].value} 
                album={album.name as string} 
                updatedAt={album.date as string} 
                duration={songDurations[index] || 'Loading...'}
                image={song.image}
                />
            ))}
        </CardContainer2>
    )
}

export default SearchPlaylist;