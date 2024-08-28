"use client";

import React from "react";
import Image from "next/image";
// import shuffle from '../app/assets/shuffle.svg'
import pause from "@assets/pause.svg";
// import repeat from '../app/assets/repeat.svg'
// import skip from '../app/assets/skip_next.svg'
import skipprev from "@assets/skip_previous.svg";
import { FormEvent, useEffect, useState, useRef } from "react";
import bg from "@assets/bg.svg";
import queue from "@assets/queue_music.svg";
import { MdOutlineVolumeUp } from "react-icons/md";
import { MdOutlineQueueMusic } from "react-icons/md";
import { IoMdSkipForward } from "react-icons/io";

import { IoMdSkipBackward } from "react-icons/io";

import { IoMdShuffle } from "react-icons/io";

import { CiRepeat } from "react-icons/ci";
import styled from "styled-components";

import { FaPlay } from "react-icons/fa";
import {
  PlaySongContainer,
  SongDetailsContainer,
  SongImage,
  SongInfo,
  Title,
  Artist,
  ControlsContainer,
  ControlButton,
  PlayPauseButton,
  SongControlButton,
  Duration,
  Songing,
  Sliderrange,
  Volume,
  QueueMusic,
} from "@styles/PlaySong/style";
import { IconContext } from "react-icons/lib";
import { FaPause } from "react-icons/fa6";
import { FaVolumeMute } from "react-icons/fa";
import { GoMute } from "react-icons/go";
import "./PlaySong.css";
import Pocket from "@assets/drop.svg";
import { song } from "@types";
import { useParams } from "next/navigation";

const playSong = () => {
  const [cid, setCid] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);
  const [volvalue, setvolvalue] = useState(0);
  const [timemint, setmint] = useState(0);
  const [timesec, setsec] = useState<string | null>("00");
  const [Ismute, setIsmte] = useState<boolean>(true);
  const [currentSong, setCurrentSong] = useState(0);
  const [title, setTitle] = useState("Fatafati Football");
  const [src, setSrc] = useState(
    "https://ipfs.io/ipfs/QmWymKE9W2TWbgaz7phUTyEHoRhaP3t39zw5dExH4MudLt"
  );
  const [artist, setArtist] = useState("Ankush Roy");
  const [img, setImg] = useState("https://svgshare.com/i/10xc.svg");

  const [durationmin, setDurationmint] = useState("00");
  const [durationsecond, setDurationsecond] = useState("00");

  const [tracks, setTracks] = useState<any[]>([]);
  const params = useParams();

  useEffect(() => {
    const getAlbumDetails = async () => {
      const response = await fetch(`/api/album/${params.id}`);

      const data = await response.json();
      console.log(data.songs);
      setTracks(data.songs);

    };
 
    if (params) getAlbumDetails();
    else {
      setTracks([
        // {
        // 	title: 'Eyes to the sky',
        // 	artist: 'Jon Bellion',

        // },
        {
          name: "Lazarus",
          animation_url:
            "https://ipfs.io/ipfs/QmWymKE9W2TWbgaz7phUTyEHoRhaP3t39zw5dExH4MudLt",
          image: "https://svgshare.com/i/10xH.svg",
          attributes: [
            {
              trait_type: "Genre",
              value: "Pop",
            },
            {
              trait_type: "Artist",
              value: "Dave",
            },
          ],
          // img_src: LazarusImg,
          // src: Lazarus,
          //hash: 'QmWymKE9
        },
        {
          name: "Yosemite",
          // img_src: YosemiteImg,
          animation_url:
            "https://ipfs.io/ipfs/QmbLTnRRGJmuiBy1QkD849C6QuqWUJ6vD8bVpZTM7EW8po",
          image: "https://svgshare.com/i/10ww.svg",
          attributes: [
            {
              trait_type: "Genre",
              value: "Pop",
            },
            {
              trait_type: "Artist",
              value: "Travis scott",
            },
          ],
        },

        {
          name: "Dark paradise",
          // img_src: AudioImg,
          animation_url:
            "https://ipfs.io/ipfs/Qmd2j7ZFWFW7je66XMUwNU5z4TruVNcNsx3Hqv7LeFpHjc",
          image: "https://svgshare.com/i/10xc.svg",
          attributes: [
            {
              trait_type: "Genre",
              value: "Pop",
            },
            {
              trait_type: "Artist",
              value: "Lana del ray",
            },
          ],
        },
        {
          name: "Lazarus",
          animation_url:
            "https://ipfs.io/ipfs/QmWymKE9W2TWbgaz7phUTyEHoRhaP3t39zw5dExH4MudLt",
          image: "https://svgshare.com/i/10xH.svg",
          attributes: [
            {
              trait_type: "Genre",
              value: "Pop",
            },
            {
              trait_type: "Artist",
              value: "Dave",
            },
          ],
          // img_src: LazarusImg,
          // src: Lazarus,
        },
        {
          name: "Dark paradise",
          // img_src: AudioImg,
          animation_url:
            "https://ipfs.io/ipfs/Qmd2j7ZFWFW7je66XMUwNU5z4TruVNcNsx3Hqv7LeFpHjc",
          image: "https://svgshare.com/i/10xc.svg",
          attributes: [
            {
              trait_type: "Genre",
              value: "Pop",
            },
            {
              trait_type: "Artist",
              value: "Lana del ray",
            },
          ],
        },
      ]);
    }
  }, []);

  // componentDidMount() {
  //     const getDbAnswer = src;
  //     if (getDbAnswer) {
  //       this.setState({ fav: true })
  //     else
  //       this.setState({ fav: false })
  //  }
  // const tracks =

  //     ;

  // State
  const [trackIndex, setTrackIndex] = useState(2);
  // const [trackProgress, setTrackProgress] = useState(0);


  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  useEffect(() => {
    if (tracks.length > 0 && trackIndex < tracks.length) {
      const t = tracks[trackIndex];
      if (t) {
        const name = t.name;
        const source = t.animation_url;
        const Image = t.image;
        const author = t.attributes[1].value;
        setSrc(source);
        setTitle(name);
        setArtist(author);
        setImg(Image);

        setIsPlaying(false);
        setProgress(0);
        setsec("00");
        setmint(0);
        if (audioRef.current) {
          audioRef.current.src = source;
        }
      }
    }
  }, [trackIndex, tracks]);

  // useEffect(() => {
  //     var durationmint = (parseInt(audioRef.current.duration.toFixed(0)) / 60).toFixed(0);
  //     var durationsec = `${parseInt(audioRef.current.duration.toFixed(0)) % 60}`;
  //     const dur = parseInt(durationsec)
  //     durationsec = dur < 10 ? `0${dur}` : `${dur}`;
  //     setDurationmint(durationmint);
  //     setDurationsecond(durationsec);
  // }, [audioRef.current.src])
  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      const updateDuration = () => {
        let durationmint = (
          parseInt(audioElement.duration.toFixed(0)) / 60
        ).toFixed(0);
        let durationsec = `${parseInt(audioElement.duration.toFixed(0)) % 60}`;
        const dur = parseInt(durationsec);
        durationsec = dur < 10 ? `0${dur}` : `${dur}`;
        setDurationmint(durationmint);
        setDurationsecond(durationsec);
      };

      audioElement.addEventListener("loadedmetadata", updateDuration);

      // Cleanup function
      return () => {
        audioElement.removeEventListener("loadedmetadata", updateDuration);
      };
    }
  }, [audioRef.current?.src]);
  // const audioRef = useRef(new Audio(src));

  const [volume, setVolume] = useState(50);
  const handleDuration = () => {
    if (audioRef.current) {
      var durationmint = "0";
      var durationsec = "00";
      durationmint = (
        parseInt(audioRef.current.duration.toFixed(0)) / 60
      ).toFixed(0);
      durationsec = `${parseInt(audioRef.current.duration.toFixed(0)) % 60}`;
      const dur = parseInt(durationsec);
      durationsec = dur < 10 ? `0${dur}` : `${dur}`;
      setDurationmint(durationmint);
      setDurationsecond(durationsec);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newVolume = parseFloat(e.target.value);
      const target = e.target as HTMLInputElement;
      setVolume(parseInt(target.value));
      audioRef.current.volume = newVolume;
      setvolvalue(newVolume);
    }
  };
  const handlemute = () => {
    if (audioRef.current) {
      if (Ismute) {
        audioRef.current.volume = 0;
      } else {
        audioRef.current.volume = volvalue;
      }
      setIsmte(!Ismute);
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

  // useEffect(() => {
  //     setIsPlaying(false);
  // }, [cid]);

  // const handleVolumeChange = (e) => {
  //     if (audioRef.current) {
  //         const newVolume = parseFloat(e.target.value);
  //         setVolume(newVolume);
  //         audioRef.current.volume = newVolume;
  //         setvolvalue(e.target.value);
  //     }

  // // };
  // setCid("QmU33wFUNwk9zFeBHnNURsQUqFecrs3eHFdLNo4moPzdQK");

  const updateProgress = () => {
    if (audioRef.current) {
      const newProgress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;

      setProgress(newProgress);
      const totalSeconds = Math.floor(audioRef.current.currentTime);
      const minute = Math.floor(totalSeconds / 60);
      const second = totalSeconds % 60;

      setmint(minute);
      setsec(second < 10 ? `0${second}` : `${second}`);
    }
  };
  const sliderStyle = {
    background: `linear-gradient(to right, white ${volume}%, black ${volume}%)`,
  };

  const handleSeekBarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const newTime =
        (parseInt(e.target.value) / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setProgress(parseInt(e.target.value));

      // settime(newTime)
    }
  };
  const handleBarClick = (e: React.MouseEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const target = e.target as HTMLElement;
      const barRect = target.getBoundingClientRect();
      const clickX = e.clientX - barRect.left;
      const barWidth = barRect.width;
      const newProgress = (clickX / barWidth) * 100;

      const newTime = (newProgress / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setProgress(newProgress);
      // settime(newTime)
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", updateProgress);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, []);

  return (
    <>
      <div>
        <PlaySongContainer>
          <Sliderrange>
            <input
              className="w-full h-1 appearance-none rounded-none"
              type="range"
              value={progress}
              onChange={handleSeekBarChange}
              onClick={handleBarClick}
              min="0"
              max="100"
              step="0.01"
              style={{
                width: "40vw",
                background: `linear-gradient(to right, #FFFFFF ${progress}%, gray ${progress}%)`,
              }}
            />
            <style></style>
          </Sliderrange>

          <Songing>
            <SongDetailsContainer>
              <div>
                <SongImage src={img} alt="" />
              </div>
              <SongInfo>
                <Title>{title}</Title>
                <Artist>{artist}</Artist>
              </SongInfo>
            </SongDetailsContainer>

            <ControlsContainer style={{}}>
              <Duration style={{ marginRight: "9vw", opacity: "0.4" }}>
                {timemint}:{timesec}
              </Duration>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                }}
              >
                <ControlButton style={{ height: "40px", width: "40px" }}>
                  <IoMdShuffle
                    style={{ color: "white", height: "15px", width: "40px" }}
                  />
                </ControlButton>
                <ControlButton
                  onClick={toPrevTrack}
                  style={{
                    height: "45px",
                    width: "45px",
                    backgroundColor: "#2b2b2b",
                  }}
                >
                  <IoMdSkipBackward
                    style={{ color: "white", height: "18px", width: "40px" }}
                  />
                </ControlButton>

                <PlayPauseButton onClick={togglePlayPause}>

                  <IconContext.Provider value={{ style: { fontSize: "20px" } }}>
                    {/* <FaPlay /> */}
                    <audio ref={audioRef} controls style={{ display: "none" }}>
                     {/* newSrc=`https://tan-worldwide-macaw-428.mypinata.cloud/ipfs/${cid}`;
                      setSrc(newsrc); */}
                       <source src={`https://tan-worldwide-macaw-428.mypinata.cloud/ipfs/QmQ18XbaRNVPhGtgccg1pYnqiSZWDZSi2LYGqMrXff7Nko`} type="audio/mp3" /> 
                      {/* <source src={src} type="audio/mp3" /> */}
                    </audio>

                    <div>
                      {isPlaying ? (
                        <FaPause style={{ height: "18px" }} />
                      ) : (
                        <FaPlay style={{ height: "18px" }} />
                      )}
                    </div>
                  </IconContext.Provider>
                </PlayPauseButton>

                <ControlButton
                  onClick={toNextTrack}
                  style={{
                    height: "45px",
                    width: "45px",
                    backgroundColor: "#2b2b2b",
                  }}
                >
                  <IoMdSkipForward
                    style={{ color: "white", height: "18px", width: "40px" }}
                  />
                </ControlButton>
                <ControlButton style={{ height: "20px", width: "45px" }}>
                  <CiRepeat
                    style={{ color: "white", height: "15px", width: "45px" }}
                  />
                </ControlButton>
              </div>
              <Duration style={{ marginLeft: "9vw", opacity: "0.4" }}>
                {durationmin}:{durationsecond}
              </Duration>
            </ControlsContainer>
            <Volume>
              <QueueMusic>
                <MdOutlineQueueMusic
                  style={{
                    color: "white",
                    height: "22px",
                    width: "40px",
                    marginRight: "1vw",
                  }}
                />
                <div
                  onClick={handlemute}
                  style={{
                    color: "white",
                    height: "22px",
                    display: "flex",
                    width: "  ",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {Ismute ? (
                    <MdOutlineVolumeUp
                      style={{ width: "40px", height: "25px" }}
                    />
                  ) : (
                    <GoMute style={{ width: "40px", height: "25px" }} />
                  )}
                </div>
                {/* <input className='overflow-hidden'
                                    type="range"
                                    id="volume"
                                    value={volume}
                                    onChange={handleVolumeChange}
                                    min="0"
                                    max="1"
                                    step="0.01"
                                    style={sliderStyle}
                                /> */}
                <input
                  type="range"
                  id="volume"
                  value={volume}
                  onChange={handleVolumeChange}
                  min="0"
                  max="1"
                  step="0.01"
                  className="w-full h-1 appearance-none rounded-none"
                  style={{
                    background: `linear-gradient(to right, white ${
                      volume * 100
                    }%, gray ${volume * 100}%)`,
                  }}
                />
              </QueueMusic>
            </Volume>
          </Songing>
        </PlaySongContainer>
      </div>
    </>
  );
};

export default playSong;
