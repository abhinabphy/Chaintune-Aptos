'use client'
import styled from "styled-components"
import NextImage from 'next/image';



export const BadaContainer = styled.div`
  
  height: 70vh;
  border-radius: 30px;
  overflow-y: auto;
`;

export const Container = styled.div`
  height: 330px;
  width: 41.678vw;
  /* margin-bottom: 20px; */
  position: relative;
  background: rgba(28, 30, 34, 0.8);
  border-radius: 30px;
  backdrop-filter: blur(120px);
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  padding: 1rem 0.5rem 0.5rem 1rem;
  color: white;
  font-size: 1.5rem;
  font-weight: lighter;
  font-family: 'Aileron';
  line-height: 1.5;
`;

export const RoundedButton = styled.div`
  width: 48px;
  height: 48px;
  margin-top: 4px;
  margin-right: 8px;
  border-radius: 50%;
  backdrop-filter: blur(120px);
  display: flex;
  justify-content: center;
  align-items: center;
  background:rgb(22, 23, 27);
`;

export const Image = styled.img`
  width: 12px;
  height: 12px;
`;

export const PlaylistContainer = styled.div`
  width: 98.6%;
  display: flex;
  flex-wrap: nowrap;
  gap: 1rem;
  justify-content: flex-start;
  align-items: flex-start;
  overflow-x: auto;
  background: rgba(34, 34, 34, 0.4);
  border-radius: 20px;
  backdrop-filter: blur(120px);
  margin-left: 8px;
`;