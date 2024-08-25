'use client'

// import './playlist.css'
import styled from 'styled-components'
import NextImage from 'next/image';
import { AlbumButton,Buttons, InnerStackedComponents, PlayButton,
    SongBanner,
    SongContainer,
    SongDetails,
    SongText,

    TopBar, } from '../../../styles/songCard/style';
// import {
//     AlbumButton, Buttons, InnerStackedComponents, PlayButton,
//     SongBanner,
//     SongContainer,
//     SongDetails,
//     SongText,

//     TopBar,

// } from '../../../styles/songCard/style';
import banner from "../../../assets/banner.svg"
import pocket from "../../../assets/pocket.svg"
import menu from "../../../assets/more_horizontal.svg"
import playButton from "../../../assets/play_button.png"


const songTitle = 'I am a Song';
const SongCard = () => {
    return (


        <SongContainer>
            <InnerStackedComponents>
                <SongBanner src={banner} alt={songTitle}/>
                <PlayButton alt="Play" src={playButton} width={64} height={64}/>
            </InnerStackedComponents>

            <SongDetails>
                <TopBar>
                    <AlbumButton>Album</AlbumButton>
                    <Buttons>
                        <NextImageComponent src={pocket} alt="" width={48} height={48}/>
                        <NextImageComponent src={menu} alt="" width={48} height={48}/>
                    </Buttons>

                </TopBar>
                <SongText>
                    <h1>Nothing Happens</h1>
                    <h2>Wallows • 2019 • 54 songs • 3 hr 18 min</h2>
                </SongText>

            </SongDetails>
        </SongContainer>

    );
};

const NextImageComponent = styled(NextImage)``;

export default SongCard;