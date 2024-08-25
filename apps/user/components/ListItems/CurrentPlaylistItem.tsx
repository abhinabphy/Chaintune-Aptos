"use client"
import styled from "styled-components";
import Image from "next/image";

import NextImage from "next/image";

interface CurrentPlaylistItemProps {
  index: number;
  thumbnail: string;
  title: string;
  artists: string[];
  albumName: string;
  duration: number;
}

export default function CurrentPlaylistItem({
  index,
  thumbnail,
  title,
  artists,
  albumName,
  duration,
}: CurrentPlaylistItemProps) {
  return (
    <Wrapper>
      <Details>
        <h1>{index}</h1>
        <Image src={thumbnail} alt={"hello"} width={120} height={120}/>
      </Details>

      <ChildWrapper>
        <ImageTitleWrapper>
          <ImageWrapper>

          </ImageWrapper>
          <DetailsWrapper>
            <Title>{title}</Title>
            <SubDetailsWrapper>
              {artists.map((artist, index) => {
                return (
                  <h1 key={index}>
                    {artist}
                    {artist.length - 1 > index ? "," : null}
                  </h1>
                );
              })}
            </SubDetailsWrapper>
          </DetailsWrapper>
        </ImageTitleWrapper>
        <AlbumNameWrapper>
          <h1>{albumName}</h1>
        </AlbumNameWrapper>
        <DurationWrapper>
          <h1>
            {Math.floor(duration / 60)}:
            {duration % 60 < 10 ? "0" + (duration % 60) : duration % 60}
          </h1>
        </DurationWrapper>
      </ChildWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 0 12px 0 8px;
`;

const Details = styled.div `
display: flex;
flex-direction: row`;



const ChildWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ImageTitleWrapper = styled.div``;

const ImageWrapper = styled.div`
  max-width: 120px;
  max-height: 120px;


`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.h1`

  font-size: 14px;
  line-height: 18px;
`;

const SubDetailsWrapper = styled.div``;

const AlbumNameWrapper = styled.div``;

const DurationWrapper = styled.div``;

const SongPoster = styled(NextImage)`
    width: 120px;
    height: 120px;

`;


