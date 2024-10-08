'use client'
import styled from 'styled-components';
import  Image  from 'next/image';



export const CardContainer = styled.div`
cursor: pointer;
  width: 11rem;
  height: 16.75rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CardImage = styled.img`
  width: 10rem; 
  height: 10rem; 
  border-radius: 0.25rem; 
  backdrop-filter: blur(120px);
`;

export const CardInfo = styled.div`
  height: 7rem; 
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
  width: 9.5rem; 
  overflow: hidden;
  opacity: 0.7;
  color: white;
  font-size: 0.875rem; 
  font-weight: lighter;
  font-family: 'Aileron';
  line-height: 1.125;
`;