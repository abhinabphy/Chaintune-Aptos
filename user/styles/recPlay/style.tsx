'use client'
import styled from "styled-components"

export const Ele32 = styled.div`
  width: 27.972vw;
  height: 37.209vh;

  padding: 0vh 0.559vw;

  display: flex;
  flex-direction: column;
  
  gap: 10px;

  background: linear-gradient(159.05deg, rgba(28, 30, 34, 0.33) 1.89%, rgba(31, 34, 40, 0.5) 89.55%),
linear-gradient(163.58deg, rgba(255, 255, 255, 0.06) -2.71%, rgba(255, 255, 255, 0) 102.71%);
border: 1px solid;

border-image-source: linear-gradient(163.58deg, rgba(255, 255, 255, 0.06) -2.71%, rgba(255, 255, 255, 0) 102.71%);

box-shadow: 2px 4px 48px 0px #00000080;
border-radius: 24px;
`

export const Ele321 = styled.div`
  padding: 10px 0px 0px 15px;
  color: white;
font-size: 20px;
font-weight: 300;
line-height: 28px;
letter-spacing: 0em;

`

export const Ele322 = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  /* gap: 1.860vh; */
  overflow-y: auto;
  scroll-behavior: smooth;
`

export const Rec_play = styled.div`
  width: 100%;
  /* height: 7.442vh; */
  padding: 0.930vh 0.559vw;
  display: flex;
  gap: 1.119vw;
  align-items: center;
  /* margin: 0.930vh 0vw; */
  border-radius: 16px;

  &:hover {
    background: #1C1E22CC;
  }
`

export const Rec_name = styled.div`
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
color: #FFFFFF;
`