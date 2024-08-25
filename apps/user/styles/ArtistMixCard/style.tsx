'use client'
import styled from 'styled-components';
import  Image  from 'next/image';



export const CardContainer = styled.div`
  width: 17.5rem;
  height: 16rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CardImage = styled(Image)`
  width: 10rem; 
  height: 10rem; 
  border-radius: 0.25rem; 
  backdrop-filter: blur(120px);
`;

export const CardInfo = styled.div`
  height: 11rem; 
  padding: 0.5rem 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Title = styled.div`
  color: white;
  font-size: 1.25rem;
  font-weight: lighter;
  font-family: 'Aileron';
  line-height: 1.75;
`;

export const Description = styled.div`
  width: 17rem; 
  overflow: hidden;
  opacity: 0.7;
  color: white;
  font-size: 0.875rem; 
  font-weight: lighter;
  font-family: 'Aileron';
  line-height: 1.125;
`;