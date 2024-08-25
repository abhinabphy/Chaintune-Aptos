'use client'
import styled from 'styled-components'

export const Nav = styled.div`
    padding: 3.721vh 2.797vw;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    /* position: fixed; */
    /* left:20vw; */
    /* background-color: #090A0D; */
`

export const Left = styled.div`
    display: flex;
    gap: 0.839vw;
    align-items: center;
`

export const Tab = styled.div`
    font-size: 2.797vw;
    font-weight: 300;
    line-height: 3.357vw;
    letter-spacing: 0em;
`

export const Right = styled.div`
    display: flex;
    gap: 1.119vw;
    align-items: center;
`

export const Wrap1 = styled.div`
padding: 0.465vh 0.280vw 0.465vh 0.839vw;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2.308vw;
    background: linear-gradient(159.05deg, rgba(28, 30, 34, 0.33) 1.89%, rgba(31, 34, 40, 0.5) 89.55%),
linear-gradient(163.58deg, rgba(255, 255, 255, 0.06) -2.71%, rgba(255, 255, 255, 0) 102.71%);

border: 1px solid;
border-radius: 1.678vw;
border-image-source: linear-gradient(163.58deg, rgba(255, 255, 255, 0.06) -2.71%, rgba(255, 255, 255, 0) 102.71%);

box-shadow: 0.233vh 0.280vw 5.581vh 0vw #00000080;
`

export const Wrap11 = styled.div`
    display: flex;
    gap: 0.559vw;
    align-items: center;
`

export const Wrap12 = styled.button`
width: 3.357vw;
height: 5.581vh;
border-radius: 3.497vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(159.05deg, rgba(28, 30, 34, 0.33) 1.89%, rgba(31, 34, 40, 0.5) 89.55%),
linear-gradient(163.58deg, rgba(255, 255, 255, 0.06) -2.71%, rgba(255, 255, 255, 0) 102.71%);
border: 1px solid linear-gradient(163.58deg, rgba(255, 255, 255, 0.06) -2.71%, rgba(255, 255, 255, 0) 102.71%);;

`

export const Wrap111 = styled.div`
    width: 2.098vw;
    height: 3.488vh;
    /* border-radius: 50px; */
    // background: #24282D;
    // border: 2px solid #121418;
    // border-radius: 3.497vw;
    bg-[url(https://jmp.sh/s/23Ian2tbs0iQr3O7zrbT)]
`
export const Wrap112 = styled.div`
font-size: 1.119vw;
font-weight: 300;
line-height: 1.678vw;
letter-spacing: 0em;
color: #FFFFFF;
`

export const Wrap2 = styled.div`
padding: 0.465vh 0.280vw 0.465vh 1.399vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 2.937vw;
    background: linear-gradient(159.05deg, rgba(28, 30, 34, 0.33) 1.89%, rgba(31, 34, 40, 0.5) 89.55%),
linear-gradient(163.58deg, rgba(255, 255, 255, 0.06) -2.71%, rgba(255, 255, 255, 0) 102.71%);
border: 1px solid;

border-image-source: linear-gradient(163.58deg, rgba(255, 255, 255, 0.06) -2.71%, rgba(255, 255, 255, 0) 102.71%);

box-shadow: 0.233vh 0.280vw 5.581vh 0vw #00000080;
border-radius: 1.678vw;
`
export const Wrap21 = styled.div`
font-size: 1.119vw;
font-weight: 300;
line-height: 1.678vw;
letter-spacing: 0em;
color: #FFFFFF;
`

export const Wrap22 = styled.button`
    width: 3.357vw;
height: 5.581vh;
font-size: 1.119vw;
color: white;
border-radius: 3.497vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
border: 1px solid linear-gradient(163.58deg, rgba(255, 255, 255, 0.06) -2.71%, rgba(255, 255, 255, 0) 102.71%);;
`


export const ConnectedText = styled.div`
    color: green; /* Example color */
    font-size: 16px; /* Example font size */
    /* Add other styles as needed */
`;

export const ConnectWalletButton = styled.button`
    color: white; 
    font-size: 12px;
`;

export const DisconnectedButton = styled.button`
    color: red;
    font-size: 10px; 
`;