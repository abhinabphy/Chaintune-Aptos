import React from "react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import  './PlaySong.css'; // Import CSS module

const PlaySong = () => {
  const [tracks, setTracks] = useState<any[]>([]);
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [img, setImg] = useState("");
  const [src, setSrc] = useState("");

  const params = useParams();

  useEffect(() => {
    const getAlbumDetails = async () => {
      const response = await fetch(`/api/album/${params.id}`);
      const data = await response.json();
      setTracks(data.songs);
    };

    if (params.id) {
      getAlbumDetails();
    } else {
      setTracks([
        {
          name: "Lazarus",
          animation_url: "https://ipfs.io/ipfs/QmWymKE9W2TWbgaz7phUTyEHoRhaP3t39zw5dExH4MudLt",
          image: "https://svgshare.com/i/10xH.svg",
          attributes: [
            { trait_type: "Genre", value: "Pop" },
            { trait_type: "Artist", value: "Dave" },
          ],
        },
        {
          name: "Yosemite",
          animation_url: "https://ipfs.io/ipfs/QmbLTnRRGJmuiBy1QkD849C6QuqWUJ6vD8bVpZTM7EW8po",
          image: "https://svgshare.com/i/10ww.svg",
          attributes: [
            { trait_type: "Genre", value: "Pop" },
            { trait_type: "Artist", value: "Travis Scott" },
          ],
        },
        {
          name: "Dark Paradise",
          animation_url: "https://ipfs.io/ipfs/Qmd2j7ZFWFW7je66XMUwNU5z4TruVNcNsx3Hqv7LeFpHjc",
          image: "https://svgshare.com/i/10xc.svg",
          attributes: [
            { trait_type: "Genre", value: "Pop" },
            { trait_type: "Artist", value: "Lana Del Rey" },
          ],
        },
      ]);
    }
  }, [params.id]);

  useEffect(() => {
    if (tracks.length > 0) {
      const currentTrack = tracks[trackIndex];
      setSrc(currentTrack.animation_url);
      setTitle(currentTrack.name);
      setArtist(currentTrack.attributes[1].value);
      setImg(currentTrack.image);
      setIsPlaying(false);
      if (audioRef.current) {
        audioRef.current.src = currentTrack.animation_url;
      }
    }
  }, [trackIndex, tracks]);

  const handleImageClick = (index: number) => {
    setTrackIndex(index);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="container">
      <div className="currentTrack">
        <img className="albumArt" src={img} alt={title} />
        <div className="trackInfo">
          <h2 className="title">{title}</h2>
          <p className="artist">{artist}</p>
          <button className="playPauseButton" onClick={togglePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      </div>
      <audio ref={audioRef} src={src} controls className="audioPlayer" />

      <div className="trackList">
        {tracks.map((track, index) => (
          <Image
            key={index}
            src={track.image}
            alt={track.name}
            width={100}
            height={100}
            onClick={() => handleImageClick(index)}
            className="trackImage"
          />
        ))}
      </div>
    </div>
  );
};

export default PlaySong;
