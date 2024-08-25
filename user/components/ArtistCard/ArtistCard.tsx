import styled from 'styled-components';
import bg from '@assets/bg.svg'; 
import  Image  from 'next/image';
import {CardContainer, CardImage, CardInfo, Title, Description} from '@styles/mixedCard/style'

type t = {
    id: string;
    name: string;
    img: string;
}

const ArtistCard = ({ name, img, id }: t) => {
  return (
    <CardContainer key={id}>
      <CardImage src={img} alt='' />
      <CardInfo>
        <Title>{name}</Title>
        <Description>
          Artist
        </Description>
      </CardInfo>
    </CardContainer>
  );
};

export default ArtistCard;
