'use client'
import Image from 'next/image';
import Search from '../../../assets/search.svg'
import drop from '../../../assets/drop.svg'
import { CardContainer2, Wrap7, Wrap1, Options, SearchBar, DropdownButton, DropdownContainer, DropdownContent, DropdownItem, DropdownIcon, Row, Title, TitleBlock, InfoBlock, SearchText1, SearchText2, Sno } from '../../../styles/playlist/style';
import { useState } from 'react';
import SearchEntry from '../SearchEntry/SearchEntry'
const options = ["Most Popular", "Most Recent", "Most Streamed"];
const VotingCard = ({handleSearchClose}:any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    
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
                <Wrap7 onClick={handleSearchClose} className='hover:cursor-pointer'>
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
            <SearchEntry sno="01" title="Kola Veri Di" artist="Anirudh Ravichandra" album="Chaintune Special" updatedAt='2 Mins Ago ' duration='3:01' />
            <SearchEntry sno="02" title="Cute Volume 1" artist="Honey Singh" album="Chaintune Special" updatedAt='2 Mins Ago' duration='4:11' />
            <SearchEntry sno="03" title="Ghar Bana Lia" artist="Apporv Shrivastava" album="Chaintune Special" updatedAt='2 Mins Ago' duration='4:08' />
            <SearchEntry sno="04" title="Samjho Na" artist="Aditya Rikhari" album="Chaintune Special" updatedAt='2 Mins Ago' duration='3:50' />
        </CardContainer2>
    )
}

export default VotingCard;