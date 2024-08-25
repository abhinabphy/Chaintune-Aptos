'use client'
import { Layout } from "@/components"
import SongCard from "@/components/SongCard/songCard"
import SearchPlaylist from "@/components/SearchPlaylist/SearchPlaylist"
import MintNft from "@/components/MintNft/MintNft"
const PreviewRelease=()=>{
    return(
        <Layout>
            <SongCard/>
            <SearchPlaylist/>
            <MintNft/>
        </Layout>
    )
}

export default PreviewRelease