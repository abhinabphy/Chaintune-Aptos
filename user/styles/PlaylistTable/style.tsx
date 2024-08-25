import styled from "styled-components";

export const MainContainer = styled.div`
    margin-right: 23vw;
    padding: 2vw 3vw;
`;

export const TableContainer = styled.div`
    overflow-x: auto;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    position: relative;
    background : linear-gradient(159deg, rgba(28, 30, 34, 0.33) 1.89%, rgba(31, 34, 40, 0.50) 89.55%);
    background-color: rgb(30, 30, 30);
    /* background: linear-gradient(159.05deg, rgba(28, 30, 34, 0.33) 1.89%, rgba(31, 34, 40, 0.5) 89.55%),
linear-gradient(163.58deg, rgba(255, 255, 255, 0.06) -2.71%, rgba(255, 255, 255, 0) 102.71%); */
`;

export const Input = styled.input`
     background: linear-gradient(159.05deg, rgba(28, 30, 34, 0.33) 1.89%, rgba(31, 34, 40, 0.5) 89.55%),
    linear-gradient(163.58deg, rgba(255, 255, 255, 0.06) -2.71%, rgba(255, 255, 255, 0) 102.71%);
    border-radius: 10px;
    border: none;
    margin-left: 0.5vw;
    padding: 1vw;
    padding-left: 3vw;
    font-size: 1vw;
    border-radius: 2vw;
    width: 100%;
    &:focus {
        outline: none;
    }
`;

export const SvgContainer = styled.div`
    position: absolute;
    left: 0.3vw;
    top: 0;
    height: 100%;
    width: 4vw;
    border-radius: 0.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4px;
  flex-direction: column;
`;

export const Button = styled.button`
  display: inline-flex;
  gap: 1vw;
  font-size: 0.95vw;
  border-radius: 20vw; /* Use a high value for rounded shape */
  padding: 0.75rem 1rem;
  align-items: center;
  color: white;
  border: 0.1vw;
  outline: none;
  background: linear-gradient(159.05deg, rgba(28, 30, 34, 0.33) 1.89%, rgba(31, 34, 40, 0.5) 89.55%),
linear-gradient(163.58deg, rgba(255, 255, 255, 0.06) -2.71%, rgba(255, 255, 255, 0) 102.71%);
  /* background-color: rgb(30, 30, 30); */
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;
  &:hover {
    background : linear-gradient(159deg, rgba(28, 30, 34, 0.33) 1.89%, rgba(31, 34, 40, 0.50) 89.55%);
  }

  &:focus {
    ring: 4px solid #d2d6dc;
  }

  /* Add dark mode styles here */
`;

export const Dropdown = styled.div`
  position: relative;
  z-index: 10;
  flex-direction: column;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  width: 11rem; /* Adjust width as needed */
`;

export const ListItem = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #4a5568;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #edf2f7;
    color: #2d3748;
  }

  /* Add dark mode styles here */
`;

export const DeleteUserLink = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #4a5568;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #edf2f7;
    color: #2d3748;
  }
`;


export const TableBody = styled.tbody`
  /* Add any common styles for the table body here */
`;

export const TableRow = styled.tr`
  &:hover {
    background: linear-gradient(159.05deg, rgba(28, 30, 34, 0.33) 1.89%, rgba(31, 34, 40, 0.5) 89.55%),
    linear-gradient(163.58deg, rgba(255, 255, 255, 0.06) -2.71%, rgba(255, 255, 255, 0) 102.71%);
  }
`;

export const TableCell = styled.td`
  padding: 0 1vw;
  overflow: auto;
  white-space: nowrap;
  font-size: 1vw;
`;

export const TableId = styled.td`
  padding: 0 1vw;
  overflow: auto;
  white-space: nowrap;
  font-size: 1vw;
  position: relative;
  /* margin: 2vw 0 0 3vw; */
`;

export const Image = styled.img`
  width: 3.3vw;
  height: 3.3vw;
  border-radius: 0.375rem; /* Rounded-lg */
`;

export const Title = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;

export const Subtitle = styled.p`
  opacity: 0.6;
`;

export const TableHead = styled.thead`
  font-size: 1vw; 
  font-weight: lighter;
`;

export const TableHeaderId = styled.th`
  padding: 1rem;
  /* position: absolute; */
  /* margin: 0vw 0 0 3vw; */
`;

export const TableHeaderCell = styled.th`
  padding: 1rem;
`;
