import styled from "styled-components";

import NextImage from "next/image";



export const AlbumWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

`;

export const SongWrapper = styled.div`


    background-color: rgba(28, 30, 34, 0.8);
    display: flex;
    border-radius: 16px;
    backdrop-filter: blur(60px);
    padding: 16px;
    height: 160px;
    width: 320px;
    gap: 20px;
`

export const SongPoster = styled(NextImage)``

export const DetailsDiv = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
`

export const RankDiv  = styled.div `
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
`

export const CostDiv = styled.div`
    
    h1{
        color: #FFF;

        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 140% */
    }
    h2 {
        color: #FFF;

        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
    }
    p {
        color: #FFF;

        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
        opacity: 0.8;
    }
`

export  const NFTWrapper = styled.div`
    z-index: 24;
    width: 1012px;
    height: 640px;
    border-radius: 24px;
    border: 1px solid #FFF;
    background: linear-gradient(159deg, rgba(28, 30, 34, 0.33) 1.89%, rgba(31, 34, 40, 0.50) 89.55%);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    box-shadow: 2px 4px 48px 0px rgba(0, 0, 0, 0.50);
    backdrop-filter: blur(60px);
    display: flex;
    flex-direction: column;
`
export const ScrollableGrid = styled.div`
    height: 100%;
    overflow: auto; /* Enable scrolling */
    display: grid;
    grid-template-columns:repeat(3, 1fr); /* Example grid layout */
    padding-left: 16px;
    padding-right: 10px;
    grid-gap: 10px 5px;
`;

export const TopInfoBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 16px 10px 24px;
`

export const TextWrapper = styled.div `
    display: flex;
    gap: 6px;
    h1 {
        color: #FFF;

        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: 28px; /* 140% */
    }
    h2 {
        color: rgba(255, 255, 255, 0.40);

        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: 28px;
    }


`

export const LeftPart = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    p {
    color: #FFF;
    text-align: right;
    opacity: 0.4;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 28px; /* 140% */
}


`

