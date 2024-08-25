'use client'

// import './playlist.css'
import styled from 'styled-components'
import NextImage from 'next/image';

import {
    AlbumButton, Buttons, InnerStackedComponents, PlayButton,
    SongBanner,
    SongContainer,
    SongDetails,
    SongText,
    TopBar,
} from "@styles/songCard/style";
import banner from "@assets/banner.svg"
import pocket from "@assets/pocket.svg"
import menu from "@assets/more_horizontal.svg"
import playButton from "@assets/play_button.png"
import { album } from '@types';
import { useEffect, useState, MouseEventHandler } from 'react';


const songTitle = 'I am a Song';
const SongCard = ({ album, clickDialog }: { album: album, clickDialog: MouseEventHandler<HTMLElement> }) => {

    const [albumDur, setAlbumDur] = useState<string>('')

    const getSongDuration = (songUrl: string) => {
        return new Promise((resolve) => {
            const audio = new Audio(songUrl);
            audio.addEventListener('loadedmetadata', () => {
                resolve(audio.duration);
            });
        });
    };

    album.songs?.map(song => {
        getSongDuration(song.animation_url)
    })

    useEffect(() => {
        if (album.songs) {
            const durationPromises = album.songs.map(song => getSongDuration(song.animation_url));
            
            Promise.all(durationPromises)
                .then(durations => {
                    const totalDuration = (durations as number[]).reduce((acc, duration) => acc + duration, 0);
                    setAlbumDur(formatDuration(totalDuration));
                })
                .catch(error => {
                    console.error("Error loading song metadata", error);
                });
        }
    }, [album.songs]);

    const formatDuration = (durationInSeconds: number) => {
        const hours = Math.floor(durationInSeconds / 3600);
        const minutes = Math.floor((durationInSeconds % 3600) / 60);
    
        let formattedDuration: string = '';
        if (hours > 0) {
            formattedDuration += `${hours} hr `;
        }
        if (minutes > 0 || hours > 0) {
            formattedDuration += `${minutes} min`;
        }
        return formattedDuration;
    }


    return (


        <SongContainer>
            <InnerStackedComponents>
                <SongBanner src={album?.image} alt={songTitle}/>
                <PlayButton alt="Play" src={playButton} width={64} height={64}/>
            </InnerStackedComponents>

            <SongDetails>
                <TopBar>
                    <AlbumButton>Album</AlbumButton>
                    <Buttons>
                        <NextImageComponent src={pocket} alt="" width={48} height={48}/>
                        <NextImageComponent src={menu} alt="" width={48} height={48} onClick={clickDialog} style={{cursor: 'pointer'}} />
                    </Buttons>

                </TopBar>
                <SongText>
                    <h1>{album?.name}</h1>
                    <h2>{album?.artists ? album.artists[0]: ''} • {album?.date} • {album?.songs?.length} songs • {albumDur}</h2>
                </SongText>

            </SongDetails>
        </SongContainer>

    );
};

const NextImageComponent = styled(NextImage)``;

export default SongCard;