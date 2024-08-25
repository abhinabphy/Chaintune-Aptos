
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import CommunityPlaylist from '@components/communityPlaylist'
import { PlaylistCard, SearchPlaylist, Layout } from '@components'
//import { WalletProvider } from '@app/WalletContext'

export default function Home() {
  return (

    <Layout>
      <div style={{display: 'flex', flexDirection: 'column', height: '70vh', gap: '16px', overflowY: 'auto', scrollBehavior: 'smooth', padding: '0vh 2.8vw'}}>
        <PlaylistCard />
        <SearchPlaylist/>
      </div>
    </Layout>
  )
}

