'use client'
import styled from 'styled-components';
import  Image  from 'next/image';



export const CardContainer = styled.div`
  width: 20.844vw;
  height: 13rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
`;

export const CardImage = styled(Image)`
  width: 9rem; 
  height: 9rem; 
  border-radius: 0.25rem; 
  backdrop-filter: blur(120px);
  position: fixed;
  z-index: 1;
`;

export const CardImage1 = styled(Image)`
  width: 10rem; 
  height: 10rem; 
  border-radius: 0.25rem; 
  backdrop-filter: blur(60px);
  transform: rotate(-8deg);
  z-index: 2;
  margin-left: -7rem;
  margin-top: 1rem;
`;

export const CardImage2 = styled(Image)`
  width: 7.5rem; 
  height: 7.5rem; 
  border-radius: 0.25rem; 
  backdrop-filter: blur(60px);
  transform: rotate(12deg);
  margin-left: 4rem;
  margin-top: -9rem;
  opacity: 0.3;
`;

export const CardInfo = styled.div`
  height: 8rem; 
  width: 20rem;
  margin-top: -3.9vw; 
  padding: 0.5rem 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Title = styled.div`
  margin-left: 10.8vw;
  color: white;
  font-size: 1.6rem;
  font-weight: lighter;
  font-family: 'Aileron';
  line-height: 1.75;
  z-index: 1;
  margin-top: 1.2vw;
`;

export const Description = styled.div`
  margin-left: 11.3vw;
  width: 7rem; 
  opacity: 0.3;
  color: white;
  font-size: 0.875rem; 
  font-weight: lighter;
  font-family: 'Aileron';
  line-height: 1.125;
  z-index: 1;
`;