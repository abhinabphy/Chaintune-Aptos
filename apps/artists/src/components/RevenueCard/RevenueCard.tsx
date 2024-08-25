/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react';
import drop from '../../assets/drop.svg'
import expand from '../../assets/expand.svg'
import AlbumRevenueCard from '../AlbumRevenueCard/AlbumRevenueCard';
import CreateCard from '../CreateReleaseCard/CreateRelease';
import { CardContainer, Wrap1, Wrap4, Heading, DropdownButton, DropdownContainer, DropdownContent, DropdownItem,DropdownIcon, Options, OptionsWrap, Wrap6 } from './style';
const options= ["Most Popular", "Most Recent", "Most Streamed"];

const RevenueCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = ({option}) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div style={{display:`flex`,flexDirection:`row`, width:`100%`, justifyContent:`space-between`, padding:`16px 0`}} >
        <CardContainer>
            <Wrap6>
                <Wrap1>
                <Heading>
                    Revenue by Release
                </Heading>
                <Wrap4>
                <DropdownContainer>
                    <DropdownButton onClick={handleDropdownToggle}>Sort by: {selectedOption || 'Select'} <DropdownIcon src={drop} alt='' /></DropdownButton>
                    {isOpen?(<DropdownContent>
                        {options.map(option => (
                        <DropdownItem key={option} onClick={() => handleOptionSelect(option)}>
                            {option}
                        </DropdownItem>
                        ))}
                    </DropdownContent>):""}
                </DropdownContainer>
                <DropdownButton>
                    Withdraw
                </DropdownButton>
                <OptionsWrap>
                        <Options src={expand} alt=''/>
                </OptionsWrap>
                </Wrap4>
                
            </Wrap1>
            
            <AlbumRevenueCard/>
            </Wrap6>
        </CardContainer>
        <CreateCard/>
        </div>
    );
};

export default RevenueCard;
