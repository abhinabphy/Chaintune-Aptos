'use client'

import React, { MouseEventHandler } from 'react';
import styled from 'styled-components'; // Import styled-components or your preferred styling library

import feel from "@assets/feel.png"
import { LeftPart, NFTWrapper, ScrollableGrid, TextWrapper, TopInfoBar } from "@styles/nftDialog/style";
import NFTSongContainer from "@components/NFTDialog/nftSongContainer";
import cross from "@assets/cross.svg";
import NextImage from "next/image";
import { Button } from "@styles/PlaylistTable/style";



// Styled component for the scrollable container


const NFTDialog: React.FC<NFTDialogProps> = (props) => {
    const nftContainers = [];

    for (let i = 0; i < 100; i++) {
        nftContainers.push(<NFTSongContainer/>);
    }

    return (
        <NFTWrapper>
            <TopInfoBar>
                <TextWrapper>
                    <h1>
                        NFT Collection:
                    </h1>
                    <h2>
                        Launched Sep 05
                    </h2>
                </TextWrapper>

                <LeftPart>
                    <p>
                        25/25 Sold
                    </p>
                    <Button onClick={props.clickDialog}>
                        <NextImageComponent src={cross} alt="" width={48} height={48}/>
                    </Button>

                </LeftPart>
            </TopInfoBar>
            <ScrollableGrid>
                {nftContainers.map((container, index) => (
                    <div key={index}>{container}</div>
                ))}
            </ScrollableGrid>
        </NFTWrapper>
    );
};

interface NFTDialogProps {
   clickDialog:  MouseEventHandler<HTMLElement>;
}

const NextImageComponent = styled(NextImage)``;

export default NFTDialog;