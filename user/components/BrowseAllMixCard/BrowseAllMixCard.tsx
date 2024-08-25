import bg from '@assets/bg.svg';
import {CardContainer, CardImage, CardInfo, Title, Description, CardImage1, CardImage2} from '@styles/BrowseAllMixCard/style';
import Image from 'next/image';
import styled from 'styled-components';


const BrowseAllMixedCard = () => {
    return (
        <CardContainer>
          <CardImage1 src={bg} alt='' />
          <CardImage src={bg} alt='' />
          <CardImage2 src={bg} alt='' />
          <CardInfo>
            <Title>Punjabi Mix</Title>
            <Description>
                228,440 Listeners
            </Description>
          </CardInfo>
        </CardContainer>
      );
};

export default BrowseAllMixedCard;
