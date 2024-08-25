import styled from "styled-components"
import  Image  from 'next/image';
export const CardContainer = styled.div`
    width: 65vw;
    margin-right:16px;
    height:fit-content;
    background: rgba(28, 30, 34, 0.8);
    border-radius: 24px;
    padding: 16px;
    display:flex;
    flex-direction:row;
    margin-bottom:16px;
    overflow-x:hidden;
`;

export const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 82%;
  margin-right: 8px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0em;
  }

  &::-webkit-scrollbar-thumb {
    width:0;
  }
`;

export const ScrollXContainer = styled.div`
width:63vw;
height:fit-content;
display: flex;
  flex-direction: row;
  scroll-behavior: smooth; /* Adding smooth scrolling */
  margin-top: 8px; /* Equivalent to mt-4 in Tailwind */
  gap: 2vw;
  padding:0px;
overflow-x: scroll;
&::-webkit-scrollbar {
  width: 0em;
}
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
export const Wrap6 = styled.div`
    width: fit-content;
    height: fit-content;
    display:flex;
    flex-direction:column;
`
export const Wrap4=styled.div`
    display:flex;
    height:fit-content;
    width:fit-content;
    flex-direction:row;
    align-items:center;
`
export const Heading = styled.p`
    color: #FFF;
    font-family: Aileron;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 28px; 
`
export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button`
    min-width: 100px;
    margin-left:8px;
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
  min-width: 160px;
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

export const DropdownIcon = styled(Image)`
  width:16px;
  height:8px;
`
export const Options = styled(Image)`
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
