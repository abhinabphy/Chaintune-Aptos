'use client'
import styled from 'styled-components';
import  Image  from 'next/image';

export const Cont = styled.div`
  width: 22.937vw;
  height: 70vh;
  position: fixed;
  right: 1vw;
  /* margin-left: 77vw; */
  background: rgba(28, 30, 34, 0.8);
  border-radius: 30px;
  backdrop-filter: blur(120px);
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  gap: 4px;
`

export const Top = styled.div`
  padding: 1.860vh 1.399vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Top1 = styled.div`
  display: flex;
  gap: 0.839vw;
`

export const Text = styled.div`
  /* color: #FFF; */
  cursor: pointer;
font-size: 1.678vw;
font-style: normal;
font-weight: 300;
line-height: 32px; /* 133.333% */
`

export const Top2 = styled.div`
  width: 3.357vw;
  height: 3.357vw;

  background: rgb(22, 23, 27);
  border-radius: 50%;
  backdrop-filter: blur(120px);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const List = styled.div`
  padding: 0px 0.559vw;
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow-y: auto;
  scroll-behavior: smooth;
`

export const ListItem = styled.div`
cursor: pointer;
  padding: 4px;
  display: flex;
  gap: 0.839vw;
  justify-content: flex-start;
  align-items: center;
`

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  /* align-items: center; */
`

export const Info1 = styled.div`
  color: #FFF;
font-size: 0.979vw;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 171.429% */
`

export const Info2 = styled.div`
  color: #FFF;
font-size: 0.839vw;
font-style: normal;
font-weight: 300;
line-height: 18px; /* 150% */
`

