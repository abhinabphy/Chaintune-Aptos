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
          <ItemDetails>All the hits</ItemDetails>
          <ItemImage src='https://svgshare.com/i/1100.svg' width={700} height={700} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>This is RadioHead</ItemText>
          <ItemDetails>All the essential tracks</ItemDetails>
          <ItemImage src='https://svgshare.com/i/10zz.svg' width={700} height={700} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>This is The Strokes</ItemText>
          <ItemDetails>For true fans</ItemDetails>
          <ItemImage src="https://svgshare.com/i/110E.svg" width={700} height={700} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>This is Sanam</ItemText>
          <ItemDetails>Timeless hits</ItemDetails>
          <ItemImage src='https://svgshare.com/i/10z8.svg' width={700} height={700} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        <ItemContainer>
          <ItemBackground />
          <ItemText>This is Aditya Rikhari</ItemText>
          <ItemDetails>The next big thing</ItemDetails>
          <ItemImage src='https://svgshare.com/i/1112.svg' width={700} height={700} alt="Description of the image" />
          <ItemIndicator />
        </ItemContainer>
        {/* <ItemContainer>
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
        </ItemContainer> */}
      </ContentContainer>

    </SidebarContainer>
  );
};

export default BestOf;
