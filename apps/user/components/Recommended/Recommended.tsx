"use client";
// import './playlist.css'
import styled from "styled-components";
import NextImage from "next/image";
import arrow from "@assets/arrow.svg";
import {
  Container,
  FlexContainer,
  Title,
  RoundedButton,
  Image,
  PlaylistContainer,
  BadaContainer,
} from "@styles/Recommended/style";
import {
  RecommendedMixedCard1,
  RecommendedMixedCard2,
  RecommendedMixedCard3,
  RecommendedMixedCard4,
  RecommendedMixedCard5,
  RecommendedMixedCard6,
} from "@components/RecommendedMixCard/RecommendedMixCard";

const CommunityPlaylist = () => {
  return (
    <Container>
      <FlexContainer>
        <Title>Recommended Artists</Title>
        <RoundedButton>
          <NextImageComponent src={arrow} alt="" width={12} height={12} />
        </RoundedButton>
      </FlexContainer>
      <PlaylistContainer>
        <RecommendedMixedCard1 />
        <RecommendedMixedCard2 />
        <RecommendedMixedCard3 />
        <RecommendedMixedCard4 />
        <RecommendedMixedCard5 />
        <RecommendedMixedCard6 />
      </PlaylistContainer>
    </Container>
  );
};
{
  /* <BadaContainer>
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
      </Container> */
}
{
  /* <Container>
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
      </Container> }
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
     </BadaContainer>*/
}

const NextImageComponent = styled(NextImage)`
  /* Add your styles here if needed */
`;

export default CommunityPlaylist;
