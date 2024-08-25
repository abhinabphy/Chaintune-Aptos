import styled from 'styled-components';
import NextImage from "next/image";


export const InnerStackedComponents = styled.div`
    margin-right: 700px;
    position: absolute;
`;

export const SongContainer = styled.div`


    width: 1012px;
    height: 272px;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #FFF;
    box-shadow: 2px 4px 48px 0 rgba(0, 0, 0, 0.50);
    backdrop-filter: blur(60px);


    background: linear-gradient(159deg, rgba(28, 30, 34, 0.33) 1.89%, rgba(31, 34, 40, 0.50) 89.55%);
    font-family: Aileron;
`;

export const SongBanner = styled.img`
    color: white;
    border-radius: 16px;
    width: 240px;
    height: 240px;
`
export const SongDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 320px;
    height: 100%;
    width: 70%;
    padding-top: 24px;
    padding-bottom: 24px;
`;

export const SongText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    h1 {
        color: #FFF;
        font-size: 48px;
        font-style: normal;
        font-weight: 300;
        line-height: 56px; /* 116.667% */
    }

    h2 {
        color: #FFF;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 22px; /* 137.5% */
    }
`

export const TopBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 16px;
    padding-right: 16px;
`

export const AlbumButton = styled.button`
    border-radius: 2.098vw;
    background: rgba(255, 255, 255, 0.10);
    color: white;
    display: inline-flex;
    /* width: 60px;
    height: 32px; */
    padding: 0px 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const PlayButton  = styled(NextImage)`
    position: absolute;
    margin-left: 200px;
    margin-top: -100px;
    z-index: 1000;
`
export const Buttons = styled.div`
    display: flex;
    gap: 10px;
`;
