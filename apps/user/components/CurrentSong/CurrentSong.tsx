
import { Ele32, Ele321, Ele322, Rec_play, Rec_name } from '@styles/recPlay/style'
import { Cont, Left, Ele3, Ele31, } from '@styles/Home/style'
import CurrentPlaylistProps from "@components/CurrentPlaylistCard/CurrentPlaylistCard";
import CurrentPlaylistItem from '@components/CurrentPlaylistItem/CurrentPlaylistItem';
import React from 'react'
const playlistData = {
    title: 'My Awesome Playlist',
    author: {
        title: 'ChainTune',
        url: 'https://example.com/johndoe',
    },
    numSongs: 10,
    thumbnail: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9125.jpg',
    onClick: () => {
        // Handle click event if needed
        console.log("grant dedo pls");
    },
};
const playlistItemData1 = {
    index: 1,
    thumbnail: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    title: 'Kola Veri Di',
    artists: [' Anirudh Ravichandra'],
    albumName: 'Single',
    duration: 181, // in seconds
};
const playlistItemData2 = {
    index: 2,
    thumbnail: 'https://svgshare.com/i/111a.svg',
    title: 'Cute Volume 1',
    artists: ['Honey Singh'],
    albumName: 'Single',
    duration: 251, // in seconds
};
const playlistItemData3 = {
    index: 3,
    thumbnail: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    title: 'Ghar Bana Lia',
    artists: ['Apporv Shrivastava'],
    albumName: 'Single',
    duration: 248, // in seconds
};
const playlistItemData4 = {
    index: 4,
    thumbnail: 'https://svgshare.com/i/111R.svg',
    title: 'Samjho Na',
    artists: ['Aditya Rikhari'],
    albumName: 'Nasamjh',
    duration: 230, // in seconds
};
const playlistItemData5 = {
    index: 5,
    thumbnl: 'https://svgshare.com/i/10xH.svg',
    title: 'Kaafizyda',
    artists: ['Nanku'],
    albumName: 'This is Nanku',
    duration: 224, // in seconds
};
const playlistItemData6 = {
    index: 6,
    thumbnail: 'https://svgshare.com/i/111a.svg',
    title: 'Lazarus',
    artists: ['Dave'],
    albumName: 'Blackstar',
    duration: 156, // in seconds
};
const playlistItemData7 = {
    index: 7,
    thumbnail: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    title: 'Dark Paradise',
    artists: [' Lana Del Ray'],
    albumName: 'Born To Die',
    duration: 181, // in seconds
};
const playlistItemData8 = {
    index: 8,
    thumbnail: 'https://svgshare.com/i/111R.svg',
    title: 'Yosemite',
    artists: ['Travis Scott'],
    albumName: 'Astroworld',
    duration: 199, // in seconds
};
const playlistItemData9 = {
    index: 9,
    thumbnail: 'https://svgshare.com/i/111R.svg',
    title: 'Yosemite',
    artists: ['Travis Scott'],
    albumName: 'Astroworld',
    duration: 199, // in seconds
};
const CurrentSong = () => {
    function hc(data:any) {
        console.log(data.index)
    }
    return (
        <div>
            <Ele31 style={{ width: '70.5vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Ele321>Currently Playing</Ele321>
                <div style={{ width: '70.5vw', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ width: '15vw' }}>   <CurrentPlaylistProps    {...playlistData} /></div>
                    <Ele322 style={{ width: '45vw', height: '32vh' }}>
                        <CurrentPlaylistItem  {...playlistItemData1} />
                        <CurrentPlaylistItem  {...playlistItemData2} />
                        <CurrentPlaylistItem  {...playlistItemData3} />
                        <CurrentPlaylistItem  {...playlistItemData4} />
                        <CurrentPlaylistItem  {...playlistItemData5} />
                        <CurrentPlaylistItem  {...playlistItemData6} />
                        <CurrentPlaylistItem  {...playlistItemData7} />
                        <CurrentPlaylistItem  {...playlistItemData8} />
                        <CurrentPlaylistItem  {...playlistItemData9} /></Ele322>
                </div>


            </Ele31>
        </div>
    )
}

export default CurrentSong
