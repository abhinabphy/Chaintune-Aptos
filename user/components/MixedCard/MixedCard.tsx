import styled from 'styled-components';
import bg from '@assets/bg.svg'; 
import  Image  from 'next/image';
import {CardContainer, CardImage, CardInfo, Title, Description} from '@styles/mixedCard/style'

type t = {
  id: string;
  artist: string;
  name: string;
  img: string
}

const MixedCard = ({id, artist, name, img}: t) => {
  return (
    <CardContainer key={id}>
      <CardImage src={img} alt='' />
      <CardInfo>
        <Title>{name}</Title>
        <Description>
          {artist}
        </Description>
      </CardInfo>
    </CardContainer>
  );
};

export default MixedCard;
