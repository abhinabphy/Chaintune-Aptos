"use client"
import styled from "styled-components";

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
                                             }: CurrentPlaylistProps) {
  return (
    <Wrapper $thumbnail={thumbnail}>
      <ChildWrapper>
        <PlayPauseWrapper>
            
        </PlayPauseWrapper>
        <PlaylistInfoWrapper>
          <Title>{title}</Title>
          <SubInfoWrapper>
            <h1>
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
  height: 100%;
  width: 30vw;
  background: url(${(props) => props.$thumbnail}) no-repeat center center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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

const Title = styled.h1`
  font-family: "Aileron";
  font-weight: 300;
  font-size: 32px;
  line-height: 36px;
`;

const SubInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;

  h1 {
    font-family: "Aileron";
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    line-height: 18px;
  }
`;
