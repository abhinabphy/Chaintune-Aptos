"use client"

import styled from 'styled-components';
import  Image  from 'next/image';
import bg from '@assets/bg.svg';
import arrow from '@assets/arrow.svg';
import {SidebarContainer, CircleButton, Title, ContentContainer, ItemContainer, ItemBackground, ItemText,ItemDetails,ItemImage,ItemIndicator,QueueTitle} from "@styles/BestOf/style";


const BestOf = () => {
  return (
    <SidebarContainer>
      <CircleButton>
        <Image src={arrow} alt="" width={12} height={12}/>
      </CircleButton>
      <Title>Best of Artists</Title>
      <ContentContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>This is Arctic Monkeys</ItemText>
          <ItemDetails>All the essential tracks, in one playlist</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>This is RadioHead</ItemText>
          <ItemDetails>All the essential tracks, in one playlist</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>This is The Strokes</ItemText>
          <ItemDetails>All the essential tracks, in one playlist</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>This is Sanam</ItemText>
          <ItemDetails>All the essential tracks, in one playlist</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>This is Aditya Rikhari</ItemText>
          <ItemDetails>All the essential tracks, in one playlist</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>Daily Mix 2</ItemText>
          <ItemDetails>Playlist • Made by ChainTune</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>Daily Mix 2</ItemText>
          <ItemDetails>Playlist • Made by ChainTune</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>Daily Mix 2</ItemText>
          <ItemDetails>Playlist • Made by ChainTune</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>Daily Mix 2</ItemText>
          <ItemDetails>Playlist • Made by ChainTune</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>Daily Mix 2</ItemText>
          <ItemDetails>Playlist • Made by ChainTune</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>Daily Mix 2</ItemText>
          <ItemDetails>Playlist • Made by ChainTune</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>Daily Mix 2</ItemText>
          <ItemDetails>Playlist • Made by ChainTune</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>Daily Mix 2</ItemText>
          <ItemDetails>Playlist • Made by ChainTune</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>Daily Mix 2</ItemText>
          <ItemDetails>Playlist • Made by ChainTune</ItemDetails>
          <ItemImage src={bg} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
      </ContentContainer>

    </SidebarContainer>
  );
};

export default BestOf;
