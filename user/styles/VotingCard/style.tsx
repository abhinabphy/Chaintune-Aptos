import styled from "styled-components";

export const MainContainer = styled.div`
  background : linear-gradient(159deg, rgba(28, 30, 34, 0.33) 1.89%, rgba(31, 34, 40, 0.50) 89.55%);
  margin-right: 26vw;
  margin-left: 3vw;
  border-radius: 20px;
  padding-bottom: 1vw;
  color: #FFFFFF;
  background-color: rgb(30, 30, 30);
`;

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding:1vw 2vw;
  justify-items: center;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 1.3vw;
  justify-self: start;
  opacity: 80%;
`;

export const VotesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5vw;
  justify-self: end;
`;

export const VotesText = styled.p`
  font-size: 1.3vw;
  opacity: 40%;
  padding-top: 0.3vw;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 5px;
  gap: 0.8vw;
  margin:0 1vw;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
  margin-left: 0.2vw;
`;


export const VotingColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
  background : rgba(255, 255, 255, 0.10);
  border-radius: 1vw;
  padding: 1vw 1vw;
`;


export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5vw;
`;

export const StyledImage = styled.img`
  width: 11vw;
  height: 9vw;
  border-radius: 20px;
`;

export const TitleText = styled.p`
  font-size: 1.3vw;
`;

export const SubTitleText = styled.p`
  font-size: 0.97vw;
  margin: 0.5vw 0 0 0;
  opacity: 50%;
`;

export const SongTitleText = styled.p`
  font-size: 1.1vw;
`;

export const SongDetailsText = styled.p`
  font-size: 0.97vw;
`;

export const VoteCountText = styled.p`
  font-size: 1.1vw;
  padding-top: 1.2vw;
`;

export const SvgButton = styled.button`
  cursor: pointer;
  transition: 0.3s ease-in-out;
`;

export const StyledModal = styled.div`
  /* display: none; */
  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  top: 15vw;
  right: 0;
  left: 10vw;
  z-index: 50;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - 1rem);
  max-height: 100%;
  
`;

export const ModalContent = styled.div`
  position: relative;
  /* padding: 1rem; */
  width: 70.75%;
  /* max-width: 32rem; */
  height: 55.5%;
  border-radius: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: rgba(28, 30, 34, 0.33)
rgba(31, 34, 40, 0.5);
background-color: rgba(255, 255, 255, 0.06)
rgba(255, 255, 255, 0);

  & .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #d1d5db;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  & .modal-header h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #374151;
  }

  & .modal-header button {
    color: #9ca3af;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #f3f4f6;
    }
  }

  & .modal-body {
    padding: 1rem;
  }

  & .modal-body p {
    font-size: 0.875rem;
    line-height: 1.5;
    color: #6b7280;
  }

  & .modal-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem;
    border-top: 1px solid #d1d5db;
    border-radius: 0 0 0.5rem 0.5rem;
  }

  & .modal-footer button {
    padding: 0.625rem 1.25rem;
    margin-left: 0.75rem;
    border-radius: 8px;
    font-weight: 500;
    font-size: 0.875rem;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #f3f4f6;
    }

    &:focus {
      ring: 4px;
      outline: none;
      ring-color: #1e429f;
    }
  }
`;