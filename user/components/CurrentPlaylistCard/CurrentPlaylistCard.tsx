

import { PlaySongContainer, SongDetailsContainer, SongImage, SongInfo, Artist, ControlsContainer, ControlButton, PlayPauseButton, SongControlButton, Duration, Songing, Sliderrange, Volume, QueueMusic } from '@styles/PlaySong/style'
import styled from "styled-components";
import { FaPause } from "react-icons/fa6";
interface CurrentPlaylistProps {
  title: string;
  author: {
    title: string;
    url: string;
  };
  numSongs: number;
  thumbnail: string;
  onClick: () => void;
}

export default function CurrentPlaylistProps({
  title,
  author,
  numSongs,
  thumbnail,
  onClick,
}: CurrentPlaylistProps) {
  return (
    <Wrapper $thumbnail={thumbnail}>
      <ChildWrapper>
        <PlayPauseWrapper>
          <PlayPauseButton style={{ position: 'relative', top: '60px', left: '30px' }}>

            {/* <FaPlay /> */}




            <div >
              {<FaPause style={{ height: '18px' }} />}
            </div>




          </PlayPauseButton>
        </PlayPauseWrapper>
        <PlaylistInfoWrapper>
          <Title>{title}</Title>
          <SubInfoWrapper>
            <h1 style={{ width: '4vw' }}>
              {numSongs} Song{numSongs > 1 ? "s" : null}
            </h1>
            <h1>·</h1>
            <h1>Made by {author.title}</h1>
          </SubInfoWrapper>
        </PlaylistInfoWrapper>
      </ChildWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div<{
  $thumbnail: CurrentPlaylistProps["thumbnail"];
}>`
  
  width: 10vw;
    height: 20vh; 
    object-fit: cover; 
    border-radius: 8px; 
  background: url(${(props) => props.$thumbnail}) no-repeat center center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 2vh;
  margin-left: 1vw;
`;

const ChildWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PlayPauseWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlaylistInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const PlayPauseButtonn = styled.div`
  position: relative;
`


const Title = styled.h1`
  font-family: "Aileron";
  font-weight: 300;
  font-size: 25px;
  line-height: 36px;
  width: 200px;
  position: relative;
  color: white;
  top: 70px;
  left: 40px;
`;

const SubInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  top: 60px;

  h1 {
    font-family: "Aileron";
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    line-height: 18px;
  }
`;
