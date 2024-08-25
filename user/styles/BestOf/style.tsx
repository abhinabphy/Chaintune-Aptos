'use client'
import styled from 'styled-components';
import  Image  from 'next/image';

export const SidebarContainer = styled.div`
  width: 27.972vw;
  height: 332px;
  position: relative;
  /* margin-top: -42vh; */
  /* margin-left: 53vw; */
  background: rgba(28, 30, 34, 0.8);
  border-radius: 30px;
  backdrop-filter: blur(120px);

`;

export const CircleButton = styled.div`
  width: 48px;
  height: 48px;
  position: absolute;
  right: 9px;
  top: 8px;
  background: rgb(22, 23, 27);
  border-radius: 50%;
  backdrop-filter: blur(120px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  position: absolute;
  left: 20px;
  top: 14px;
  color: white;
  font-size: 1.5rem;
  font-weight: lighter;
  font-family: 'Aileron';
  line-height: 1.5;
`;

export const ContentContainer = styled.div`
  position: absolute;
  left: 8px;
  top: 60px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-radius: 30px;
  overflow-y: auto;
  height: 258px;
`;

export const ItemContainer = styled.div`
  width: 20vw;
  height: 70px;
  position: relative;
  margin-bottom: 65px;
`;

export const ItemBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(28, 30, 34, 0.8);
  border-radius: 20px;
  backdrop-filter: blur(120px);
`;

export const ItemText = styled.div`
  position: absolute;
  left: 70px;
  top: 10px;
  color: white;
  font-size: 1.1rem;
  font-weight: lighter;
  font-family: 'Aileron';
  line-height: normal;
`;

export const ItemDetails = styled.div`
  position: absolute;
  left: 70px;
  top: 36px;
  color: white;
  font-size: 0.9rem;
  font-weight: lighter;
  font-family: 'Aileron';
  line-height: 18px;
`;

export const ItemImage = styled(Image)`
  width: 56px;
  height: 56px;
  position: absolute;
  left: 4px;
  top: 4px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(120px);
`;

export const ItemIndicator = styled.div`
  width: 0px;
  height: 0px;
  position: absolute;
  left: 276px;
  top: 22px;
  background: #555;
`;

export const QueueTitle = styled.div`
  position: absolute;
  left: 108px;
  top: 14px;
  opacity: 0.3;
  color: white;
  font-size: 1.77rem;
  font-family: 'Aileron';
  line-height: 1.5;
`;
