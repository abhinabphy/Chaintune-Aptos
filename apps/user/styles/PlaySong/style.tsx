'use client'
import styled from 'styled-components';
import Image from 'next/image';



export const PlaySongContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10vh;
  width: 96.5vw;
  background: rgba(28, 30, 34, 0.8);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  border-radius: 30px 30px 0px 0px;
  backdrop-filter: blur(120px);
  position: relative;
  
`;
export const Sliderrange = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: 4vh;
`

export const SongDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  margin: 0;
  /* margin-left: -45vw; */

`;

export const Songing = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90vw;
    

    `
  ;

export const SongImage = styled.img`
  height: 96px;
  width: 96px;
  border-radius: 10px;
  margin-left: 0.5vw;
  margin-bottom: 6.3vh;
`;

export const SongInfo = styled.div`
  position: absolute;
  margin-left: 8vw;
  color: white;
  margin-bottom: 5.6vh;
`;

export const Title = styled.p`
  font-weight: medium;
  color: white;
`;

export const Artist = styled.p`
  font-weight: lighter;
  color: white;
`;

export const ControlsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  
  
`;

export const ControlButton = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin: 0 0.4vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlayPauseButton = styled.div`
  width: 45px;
  height: 45px;
  background-color: white;
  border-radius: 50%;
  margin: 0 0.4vw;
  display: flex;
  align-items: center;
  justify-content: center;


`;

export const SongControlButton = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: white;
  border-radius: 50%;
  margin-top: 1vw;
`;
export const Duration = styled.span`
  color: white;
`;

export const Volume = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;

`
export const QueueMusic = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 7vw;
    align-items: center;
    justify-content: center;

`
export const Slider = styled.div`
    display: flex;
    flex-direction: row;

`
export const Vol = styled.div`
  

`