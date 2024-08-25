import bg from '@assets/bg.svg';
import {CardContainer, CardImage, CardInfo, Title, Description} from '@styles/ArtistMixCard/style';
import Image from 'next/image';
import styled from 'styled-components';


export const ArtistMixCard1 =() => {
    return (
        <CardContainer>
          <CardImage src={bg} alt='' />
          <CardInfo>
            <Title>Red Hot Chilli Peppers Artist Mix</Title>
            <Description>
                Featuring Strawberry Guy, Husbands, Pinegrove and more...
            </Description>
          </CardInfo>
        </CardContainer>
      );
};

export const ArtistMixCard2 =() => {
  return (
      <CardContainer>
        <CardImage src="https://svgshare.com/i/1110.svg" width={700} height={700} alt='' />
        <CardInfo>
          <Title>Cutting Room Studios Artist Mix</Title>
          <Description>
              Featuring Mitski, King Princes, Maggie Rogers and more...
          </Description>
        </CardInfo>
      </CardContainer>
    );
};

export const ArtistMixCard3 =() => {
  return (
      <CardContainer>
        <CardImage src='https://svgshare.com/i/10zy.svg' width={700} height={700} alt='' />
        <CardInfo>
          <Title>Mixbox Artist Mix</Title>
          <Description>
              Featuring Gorillaz, The Cure, Joy Division and more...
          </Description>
        </CardInfo>
      </CardContainer>
    );
};

export const ArtistMixCard4 =() => {
  return (
      <CardContainer>
        <CardImage src='https://svgshare.com/i/1109.svg' width={700} height={700} alt='' />
        <CardInfo>
          <Title>Music Forge Artist Mix</Title>
          <Description>
              Featuring Vampire Weekend, Passion Pit, Arcade Fire and more...
          </Description>
        </CardInfo>
      </CardContainer>
    );
};

export const ArtistMixCard5 =() => {
  return (
      <CardContainer>
        <CardImage src='https://svgshare.com/i/110q.svg' width={700} height={700} alt='' />
        <CardInfo>
          <Title>Sound Suite Artist Mix</Title>
          <Description>
              Featuring AltJ, Dolorblind, Strawberry Guy and more...
          </Description>
        </CardInfo>
      </CardContainer>
    );
};

export const ArtistMixCard6 =() => {
  return (
      <CardContainer>
        <CardImage src='https://svgshare.com/i/110A.svg' width={700} height={700} alt='' />
        <CardInfo>
          <Title>Music Factory Artist Mix</Title>
          <Description>
              Featuring Kayan, Sachi, Husbands and more...
          </Description>
        </CardInfo>
      </CardContainer>
    );
};

export const ArtistMixCard7 =() => {
  return (
      <CardContainer>
        <CardImage src='https://svgshare.com/i/110r.svg' width={700} height={700} alt='' />
        <CardInfo>
          <Title>TBeat Lab Artist Mix</Title>
          <Description>
              Featuring Aary, Pinegrove, Abdon and more...
          </Description>
        </CardInfo>
      </CardContainer>
    );
};