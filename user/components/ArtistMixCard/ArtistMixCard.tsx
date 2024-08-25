import bg from '@assets/bg.svg';
import {CardContainer, CardImage, CardInfo, Title, Description} from '@styles/ArtistMixCard/style';
import Image from 'next/image';
import styled from 'styled-components';


const ArtistMixCard =() => {
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

export default ArtistMixCard;
