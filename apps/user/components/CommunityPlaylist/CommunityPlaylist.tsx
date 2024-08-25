'use client'
import MixedCard from '../MixedCard/MixedCard'
// import './playlist.css'
import styled from 'styled-components'
import NextImage from 'next/image';
import arrow from '@assets/arrow.svg'
import { Container, FlexContainer, Title, RoundedButton, Image, PlaylistContainer,BadaContainer } from "@styles/communityPlaylist/style"

const CommunityPlaylist = () => {
  return (
    
     <BadaContainer>
      <Container>
        <FlexContainer>
          <Title>Community Playlists</Title>
          <RoundedButton>
            <NextImageComponent src={arrow} alt="" width={12} height={12} />
          </RoundedButton>
        </FlexContainer>
        <PlaylistContainer>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
        </PlaylistContainer>
      </Container>
      <Container>
        <FlexContainer>
          <Title>Community Playlists</Title>
          <RoundedButton>
            <NextImageComponent src={arrow} alt="" width={12} height={12} />
          </RoundedButton>
        </FlexContainer>
        <PlaylistContainer>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
        </PlaylistContainer>
      </Container>
      {/* {/* <Container>
        <FlexContainer>
          <Title>Community Playlists</Title>
          <RoundedButton>
            <NextImageComponent src={arrow} alt="" width={12} height={12} />
          </RoundedButton>
        </FlexContainer>
        <PlaylistContainer>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
        </PlaylistContainer>
      </Container> */}
      {/* <Container>
        <FlexContainer>
          <Title>Community Playlists</Title>
          <RoundedButton>
            <NextImageComponent src={arrow} alt="" width={12} height={12} />
          </RoundedButton>
        </FlexContainer>
        <PlaylistContainer>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
        </PlaylistContainer>
      </Container> */}
      <Container>
        <FlexContainer>
          <Title>Community Playlists</Title>
          <RoundedButton>
            <NextImageComponent src={arrow} alt="" width={12} height={12} />
          </RoundedButton>
        </FlexContainer>
        <PlaylistContainer>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
        </PlaylistContainer>
      </Container>
      <Container>
        <FlexContainer>
          <Title>Community Playlists</Title>
          <RoundedButton>
            <NextImageComponent src={arrow} alt="" width={12} height={12} />
          </RoundedButton>
        </FlexContainer>
        <PlaylistContainer>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
        </PlaylistContainer>
      </Container>
      <Container>
        <FlexContainer>
          <Title>Community Playlists</Title>
          <RoundedButton>
            <NextImageComponent src={arrow} alt="" width={12} height={12} />
          </RoundedButton>
        </FlexContainer>
        <PlaylistContainer>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
        </PlaylistContainer>
      </Container>
      <Container>
        <FlexContainer>
          <Title>Community Playlists</Title>
          <RoundedButton>
            <NextImageComponent src={arrow} alt="" width={12} height={12} />
          </RoundedButton>
        </FlexContainer>
        <PlaylistContainer>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
          <MixedCard/>
        </PlaylistContainer>
      </Container>
     </BadaContainer>
    
  );
};

const NextImageComponent = styled(NextImage)`
  /* Add your styles here if needed */
`;

export default CommunityPlaylist;