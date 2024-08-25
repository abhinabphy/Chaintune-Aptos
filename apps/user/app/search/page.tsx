"use client";

import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { song } from "@types";
import {
  AlbumCard,
  ArtistCard,
  Community,
  CurrentSong,
  Layout,
  MixedCard,
} from "@components";
import DataContext from "@context/dataContext";
import { useRouter } from "next/navigation";

const SongList = ({ data, search }: { data: song[]; search: string }) => {
  const filteredSongs = data.filter((song: song) => {
    if (search === "") return song;
    else if (song.name.toLowerCase().includes(search.toLowerCase()))
      return song;
  });

  return (
    <div>
      {filteredSongs.map((song: song) => (
        <div key={song._id}>{song.name}</div>
      ))}
    </div>
  );
};

const Search = () => {
  const [search, setSearch] = useState("");
  const { artists, songs, albums } = useContext(DataContext);
//   const router = useRouter();

//   const handleClick = (id: string) => {
//     router.push(`/album/${id}`);
//   };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  let data1: any[] = [];
  artists.map((artist) => {
    let n = data1.push({
      id: artist._id,
      name: artist!.name,
      img: artist!.image,
    });
  });

  let data2: any[] = [];
  albums.map((album) => {
    let n = data2.push({
      id: album._id,
      name: album!.name,
      img: album!.image,
      artist: album!.artists ? album!.artists[0] : "",
    });
  });
  // useEffect(() => {
  //     const fetchSongs = async () => {
  //         const response = await fetch('/api/song');
  //         const data = await response.json()

  //         setSongs(data)
  //     }

  //     fetchSongs()
  // }, [])

  return (
    <Layout>
      <div
        style={{
          padding: "0vh 2.8vw",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          className="flex justify-between flex-col"
          style={{
            width: "70.769vw",
            height: "70vh",
            overflowY: "auto",
            gap: "1.860vh",
            scrollBehavior: "smooth",
          }}
        >
          <CurrentSong />
          <Community
            cardComponent={(data) => <ArtistCard {...data} />}
            data={data1}
            title="Artists"
          />

          {/* <Community 
                    cardComponent={(data) => <MixedCard {...data} />} 
                    data={}
                    title='Playlists' 
                    /> */}

          <Community
            cardComponent={(data) => (
              <AlbumCard {...data} /*handleClick={handleClick}*/ />
            )}
            data={data2}
            title="Albums"
          />

          {/* <Community 
                    cardComponent={(data) => <MixedCard {...data} />} 
                    data={}
                    title='Profiles' 
                    /> */}
        </div>
      </div>
    </Layout>
  );
};

export default Search;
