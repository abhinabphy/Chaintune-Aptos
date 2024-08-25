import styled from 'styled-components';
import bg from '@assets/bg.svg'; 
import  Image  from 'next/image';
import {CardContainer, CardImage, CardInfo, Title, Description} from '@styles/RecommendedMixCard/style'




const RecommendedMixedCard = () => {
  return (
    <CardContainer>
      <CardImage src={bg} alt='' />
      <CardInfo>
        <Title>Crumb</Title>
        <Description>
          Since you listen to Wallows & MGMT
        </Description>
      </CardInfo>
    </CardContainer>
  );
};

export default RecommendedMixedCard;
