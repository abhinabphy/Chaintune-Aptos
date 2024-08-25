'use client'
// import './playlist.css'
import styled from 'styled-components'
import NextImage from 'next/image';
import arrow from '@assets/arrow.svg'
import { Container, FlexContainer, Title, RoundedButton, Image, PlaylistContainer,BadaContainer } from "@styles/ArtistMix/style"
import ArtistMixCard from '../ArtistMixCard/ArtistMixCard';



const ArtistMix = () => {
  return (

    <Container>
        <FlexContainer>
          <Title>Artist Mixes</Title>
          <RoundedButton>
            <NextImageComponent src={arrow} alt="" width={12} height={12} />
          </RoundedButton>
        </FlexContainer>
        <PlaylistContainer>
          <ArtistMixCard/>
          <ArtistMixCard/>
          <ArtistMixCard/>
          <ArtistMixCard/>
          <ArtistMixCard/>
          <ArtistMixCard/>
          <ArtistMixCard/>
        </PlaylistContainer>
      </Container>
          );
  };

  const NextImageComponent = styled(NextImage)`
  /* Add your styles here if needed */
`;

export default ArtistMix;