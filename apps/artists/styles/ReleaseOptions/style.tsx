
import styled from 'styled-components'

export const Container = styled.div`
  width: 50vw;
  background: linear-gradient(159.05deg, rgba(28, 30, 34, 0.33) 1.89%, rgba(31, 34, 40, 0.5) 89.55%), linear-gradient(163.58deg, rgba(255, 255, 255, 0.06) -2.71%, rgba(255, 255, 255, 0) 102.71%);
  border-radius: 2vw;
  margin: 5vw 5vh;

`;


export const Item = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25vw;
  height: 25vh;
  cursor: pointer;
  background: ${props => (props.isSelected ? 'linear-gradient(138.46deg, #4A6A9B 7.27%, #4B27DD 72.23%, #5E14BC 95.26%),linear-gradient(135deg, rgba(255, 255, 255, 0.06) 1.56%, rgba(255, 255, 255, 0) 100%)' : 'linear-gradient(225deg, rgba(26, 28, 32, 0.8) 2.5%, rgba(26, 28, 32, 0) 95.94%),linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%)')};
  color: white;
  border-radius: 1vw;
  margin-left: 0.5vh;
  margin-right: 0.5vh;
`;


export const Icon = styled.img<{ isSelected: boolean }>`
  width: 15vw;
  height: 15vh;
`;