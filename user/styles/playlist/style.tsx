'use client'
import styled from "styled-components"
import  Image  from 'next/image';
export const CardContainer = styled.div`
    width: 70.769vw;
    height:fit-content;
    background: rgba(28, 30, 34, 0.8);
    border-radius: 24px;
    padding: 16px;
    display:flex;
    flex-direction:row;
    margin-left: 2.8vw;
    margin-bottom: 2vw;
    /* margin-bottom:16px; */
`;
export const CoverImage = styled.img`
    width: 240px;
    height:240px;
    border-radius: 16px;
`;
export const Cover = styled.div`
    width: 240px;
    height:240px;
    position: relative;
`;

export const Play = styled.div`
    width: 64px;
    height:64px;
    background-color:#FFFFFF;
    border-radius:32px;
    position: absolute;
    top:120px;
    left:192px;
    margin-right:-12;
    display:flex;
    justify-content:center;
    align-items:center;
`
export const PlayImage = styled.img`
    width: 32px;
    height:32px;
`;

export const Text = styled.p`
    padding-left:32px;
    display:flex;
    width:80%;
    flex-direction:column;
    justify-content:space-between;
`
export const Name = styled.p`
    color: #FFF;
    font-size: 48px;
    font-weight: 300;
    line-height:48px;
`
export const Artists = styled.p`
    color: #FFF;
    font-size: 16px;
    font-weight:lighter;
    opacity: 0.5;
    padding-top:8px;
`
export const CardInfo = styled.p`
    color: #FFF;
    font-size: 16px;
    line-height: 22px;
    font-weight:lighter;
`
export const Tag = styled.p`
    padding: 6px 12px;
    width:fit-content;
    height:32px;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.10);
    color: #FFFFFF;
    font-size: 12px;
    line-height: 20px;
    font-weight:lighter;
    margin-right:8px;
`
export const Wrap1=styled.div`
    display:flex;
    height:fit-content;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:100%;
    position:relative;
`
export const Wrap2=styled.div`
    display:flex;
    height:124px;
    flex-direction:column;
    justify-content: space-between;
    margin-bottom:18px;
`
export const Wrap3=styled.div`
    display:flex;
    height:86px;
    flex-direction:column;
`
export const Wrap4=styled.div`
    display:flex;
    height:fit-content;
    width:fit-content;
    flex-direction:row;
    align-items:center;
`
export const Options = styled.img`
    height:24px;
    width:24px;
`
export const OptionsWrap = styled.div`
    height:48px;
    width:48px;
    display:flex;
    background-color:rgba(31, 34, 40, 0.50);
    justify-content:center;
    align-items:center;
    border: 1px solid rgba(28, 30, 34, 0.33);
    border-radius:24px;
    margin-left:8px;
`
// voting
export const CardContainer2 = styled.div`
    width: 70.769vw;
    height:fit-content;
    background: rgba(28, 30, 34, 0.8);
    border-radius: 24px;
    padding: 16px;
    display:flex;
    flex-direction:column;
    margin-bottom:16px;
`;

export const Header = styled.p`
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 28px;
`
export const VoteCount = styled.p`
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 28px;
    opacity:0.5;
`
export const VotingContainer=styled.div`
    width:384px;
    height:144px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.10);
    padding:16px 20px;
    margin-right:8px;
`
export const AwardWrap = styled.div`
    height:64px;
    width:64px;
    display:flex;
    background-color:#4B27DD;
    justify-content:center;
    align-items:center;
    border: 1px solid rgba(28, 30, 34, 0.33) ;
    border-radius:32px;
    margin-right:12px;
`
export const Award = styled(Image)`
    height:32px;
    width:32px;
`
export const VotingCardText1=styled.p`
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
`
export const VotingCardText2 = styled.p`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: lighter;
    line-height: 20px; 
    margin-top:12px;
    opacity:0.5;

`
export const VotingCardContainer = styled.p`
    display: flex;
    height: 144px;
    width:304px;
    padding: 8px 8px 4px 8px;
    border-radius: 24px;
`
export const PlaylistCover = styled.img`
    width: 128px;
    height: 128px;
    border-radius:16px;
    margin-right:12px;
`
export const Wrap6 = styled.div`
    width: fit-content;
    height: fit-content;
    display:flex;
    flex-direction:column;
`
export const Wrap7 = styled.div`
    width: fit-content;
    height: fit-content;
    display:flex;
    flex-direction:row;
    align-items:center;
`
export const VoteCardCount = styled.p`
    color: #FFF;

    font-family: Aileron;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    margin-top:18px;
    margin-bottom:12px;
`

// search
export const SearchBar = styled.input`
    color: #FFF;
    font-size: 28px;
    font-style: normal;
    font-weight: 300;
    line-height: 32px;
    opacity: 0.3;
    border: 0px;
    width:80%;
    background: transparent;
    margin-left: 8px;
    &:focus {
        outline: none;
    }
`

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 25vw;
`;

export const DropdownButton = styled.button`
    width: 240px;
    height: 48px;
    padding: 14px 20px;
    border-radius: 24px;
    background-color: rgba(28, 30, 34, 0.80);
    color: #fff;
    border: none;
    cursor: pointer;
    color: #FFF;
    font-family: Aileron;
    font-size: 14px;
    font-weight: lighter;
    line-height: 20px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;

export const DropdownContent = styled.div`
  position: absolute;
  background-color:  rgba(28, 30, 34, 0.80);
  border-radius: 24px;
  min-width: 240px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropdownItem = styled.div`
  padding: 12px 16px;
  color: #FFF;
    font-family: Aileron;
    font-size: 14px;
    font-weight: lighter;
    line-height: 20px;
  cursor: pointer;
  &:hover {
    background-color:  rgba(255, 255, 255, 0.10);;
  }
`;

export const DropdownIcon = styled.img`
  width:16px;
  height:8px;
`
export const Row = styled.div`
    padding: 8px 24px 8px 16px;
    width:100%;
    height:fit-content;
    display:flex;
    flex-direction:row;
    margin:8px;
    &:hover{
        background-color: rgba(28, 30, 34, 0.80);
    }
`
export const SearchText1 = styled.div`
    color: #FFF;
    font-size: 14px;
    font-weight: lighter;
    line-height: 18px; 
`
export const SearchText2 = styled.div`
    color: #FFF;
    font-size: 14px;
    font-weight: lighter;
    line-height: 18px; 
    opacity:0.5;
`
export const Sno = styled.div`
  width:21px;
  margin-right: 12px;
`
export const TitleBlock = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  align-items:center;
`
export const InfoBlock = styled.div`
  width:100%;
  margin-right: 0px;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
`
export const Title = styled.div`
  width: fit-content;
  display:flex;
  flex-direction:row;
  align-items:center;
`

export const Thumbnail = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 8px;
    margin-right: 12px;
`
export const Wrap8 = styled.div`
    min-width: 80px;
`
export const Wrap9 = styled.div`
    min-width: 48px;
`
export const Wrap10 = styled.div`
    
`