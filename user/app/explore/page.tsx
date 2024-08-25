
'use client'

import { Layout, CommunityPlaylist, ArtistMix, BestOf, Recommended, BrowseAll, Community, MixedCard } from '@components'
import DataContext from '@context/dataContext'
import { useContext } from 'react'
// const inter = Inter({ subsets: ['latin'] })

const Explore = () => {

  const { artists, songs, albums } = useContext(DataContext)
  let data: any[] = [];
    songs.map(song => {
      let n = data.push({
        id: song!._id,
        artist: song!.attributes[1].value,
        name: song!.name,
        img: song!.image
      })
    })

  return (
    <Layout>
        <div style={{padding: '0vh 2.8vw', display: 'flex', justifyContent: 'space-between'}}>
            <div className="flex justify-between flex-col" style={{ width: '70.769vw', height: '70vh', overflowY: 'auto', gap: '1.860vh', scrollBehavior: 'smooth'}}>
                <Community 
                data={data}
                cardComponent={(data) => <MixedCard {...data} />} 
                title='Top Charts' 
                />
                <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                    <ArtistMix/><BestOf/>
                </div>
                <Recommended/>
                <BrowseAll/>
            </div>
        </div>
    </Layout>
  )
}

export default Explore