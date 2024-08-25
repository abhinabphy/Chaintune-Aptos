'use client'
// import './playlist.css'
import styled from 'styled-components'
import NextImage from 'next/image';
import arrow from '@assets/arrow.svg'
import { Container, FlexContainer, Title, RoundedButton, Image, PlaylistContainer,BadaContainer } from "@styles/BrowseAll/style"
import BrowseAllMixedCard from '@components/BrowseAllMixCard/BrowseAllMixCard'



const BrowseAll = () => {
  return (

    <Container>
        <FlexContainer>
          <Title>Browse All</Title>
        </FlexContainer>
        <PlaylistContainer>
          <BrowseAllMixedCard/>
          <BrowseAllMixedCard/>
          <BrowseAllMixedCard/>
        </PlaylistContainer>
        <PlaylistContainer>
          <BrowseAllMixedCard/>
          <BrowseAllMixedCard/>
          <BrowseAllMixedCard/>
        </PlaylistContainer>
        <PlaylistContainer>
          <BrowseAllMixedCard/>
          <BrowseAllMixedCard/>
          <BrowseAllMixedCard/>
        </PlaylistContainer>
        <PlaylistContainer>
          <BrowseAllMixedCard/>
          <BrowseAllMixedCard/>
          <BrowseAllMixedCard/>
        </PlaylistContainer>
        <PlaylistContainer>
          <BrowseAllMixedCard/>
          <BrowseAllMixedCard/>
          <BrowseAllMixedCard/>
        </PlaylistContainer>
      </Container>
          );
  };

  const NextImageComponent = styled(NextImage)`
  /* Add your styles here if needed */
`;

export default BrowseAll;