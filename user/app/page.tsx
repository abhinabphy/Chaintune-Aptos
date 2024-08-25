"use client";

import React, { useContext, useEffect } from "react";
import {
  Layout,
  Community,
  MixedCard,
  NewLaunch,
  RecPlay,
  DiscCard,
  CurrentSong,
} from "@components";
import { Cont, Left, Ele3, Ele31 } from "@styles/Home/style";
import SongContext from "@context/dataContext";
import DataContext from "@context/dataContext";
import { artist, song, album } from "@types";

const Home = () => {
  const { artists, songs, albums } = useContext(DataContext);

  let discData: any[] = [];
  artists.map((artist) => {
    let n = discData.push({
      id: artist!._id,
      link: artist!.community,
      name: artist!.name,
      img: artist!.image,
    });
  });

  return (
    <Layout>
      <Cont>
        <Left>
          <NewLaunch />
          <CurrentSong />
          <Ele3>
            <Ele31></Ele31>
            <RecPlay />
          </Ele3>
          <Community
            cardComponent={(data) => <DiscCard {...data} />}
            data={discData}
            title="Communities you can join"
          />

          {/* <Community 
                    cardComponent={(data) => <MixedCard {...data}/>} 
                    data={}
                    title='Artist Corner'
                    />

                    <Community component={<MixedCard/>} title='Recommended Playlists'/>

                    <Community component={<MixedCard/>} title='Trending Community Playlists'/>

                    <Community component={<MixedCard/>} title='Weekly Mixes'/> */}
        </Left>
      </Cont>
    </Layout>
  );
};

export default Home;
