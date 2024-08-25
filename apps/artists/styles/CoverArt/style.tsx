import styled from 'styled-components';

export const Container = styled.div`
  width: 40vw;
  background: linear-gradient(159.05deg, rgba(28, 30, 34, 0.33) 1.89%, rgba(31, 34, 40, 0.5) 89.55%), linear-gradient(163.58deg, rgba(255, 255, 255, 0.06) -2.71%, rgba(255, 255, 255, 0) 102.71%);
  border-radius: 2vw;
  padding: 1vw;
  /* margin-left: 2vh; */
  margin: 5vw 5vh;
`;

export const DropArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  border: 0.2vw dashed rgba(255, 255, 255, 0.4);
  border-radius: 1vw;
  color: white;
  /* width: 40vw; */
  height: 30vh;
  margin: auto;
  transition: background-color 0.3s;
  padding: 2vh;
  background: linear-gradient(0deg, rgba(38, 40, 44, 0.4), rgba(38, 40, 44, 0.4)),
linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4));
&:hover {
    cursor: pointer;
  }
`;

export const Instructions = styled.p`
    padding: 2vh;
    font-family: 'Aileron';
    font-weight: 400;
    text-align: center;
    font-size: 2vh;
    color: white;
`;

export const FileInput = styled.input`
  display: none;
`;
