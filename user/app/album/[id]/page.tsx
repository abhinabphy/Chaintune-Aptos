"use client"

// import NFTSongContainer from "@components/NFTDialog/nftSongContainer";
import { Layout, SearchPlaylist, NFTDialog, SongCard } from "@components";
import React, { useEffect, useContext, useState } from 'react';
import { AlbumWrapper } from "@styles/nftDialog/style";
import { useParams } from "next/navigation";
import { album } from "@types";


export default function Home() {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const params = useParams()
    const albumId = params.id
    const [album, setAlbum] = useState<album>()

    const clickDialog = () => {
        setIsOpen(!isOpen);
    };
    // const openDialog = () => {
    //     setIsOpen(true);
    // }

    useEffect(() => {
        const getAlbumDetails = async () => {
            const response = await fetch(`/api/album/${albumId}`)

            const data = await response.json()
            console.log(data)
            setAlbum(data)
        }

        if(albumId) getAlbumDetails()
    }, [albumId])

    return (
        <Layout>
            <div style={{padding: '0vh 2.8vw', display: 'flex', justifyContent: 'space-between'}}>
                <div className="flex justify-between flex-col" style={{ width: '70.769vw', height: '70vh', overflowY: 'auto', gap: '1.860vh', scrollBehavior: 'smooth'}}>
                <AlbumWrapper>
                    { album && <SongCard album={album} clickDialog={clickDialog} /> }

                    { isOpen && <NFTDialog clickDialog={clickDialog}/> }

                    { album && <SearchPlaylist album={album}/> }
                </AlbumWrapper>
                </div>
            </div>
        </Layout>
    );
}