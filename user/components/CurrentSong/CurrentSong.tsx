
import { Ele32, Ele321, Ele322, Rec_play, Rec_name } from '@styles/recPlay/style'
import { Cont, Left, Ele3, Ele31, } from '@styles/Home/style'
import CurrentPlaylistProps from "@components/CurrentPlaylistCard/CurrentPlaylistCard";
import CurrentPlaylistItem from '@components/CurrentPlaylistItem/CurrentPlaylistItem';
import React from 'react'
const playlistData = {
    title: 'My Awesome Playlist',
    author: {
        title: 'John Doe',
        url: 'https://example.com/johndoe',
    },
    numSongs: 10,
    thumbnail: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9125.jpg',
    onClick: () => {
        // Handle click event if needed
    },
};
const playlistItemData = {
    index: 1,
    thumbnail: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg',
    title: 'Song Title',
    artists: ['Artist 1', 'Artist 2'],
    albumName: 'Album Name',
    duration: 180, // in seconds
};
const CurrentSong = () => {
    return (
        <div>
            <Ele31 style={{ width: '70.5vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Ele321>Currently Playing</Ele321>
                <div style={{ width: '70.5vw', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ width: '15vw' }}>   <CurrentPlaylistProps    {...playlistData} /></div>
                    <Ele322 style={{ width: '45vw', height: '32vh' }}> <CurrentPlaylistItem {...playlistItemData} />
                        <CurrentPlaylistItem {...playlistItemData} />
                        <CurrentPlaylistItem {...playlistItemData} />
                        <CurrentPlaylistItem {...playlistItemData} /></Ele322>
                </div>


            </Ele31>
        </div>
    )
}

export default CurrentSong
