import styled from "styled-components";

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const StartBtn = styled.button`
  width: 20%;
  padding: 0.2rem 2rem;

  border: none;
  border-radius: 0.4rem;
  background-color: #ffd700;
  color: #ffffff;

  font-size: 1.4rem;
  cursor: pointer;

  &:hover {
    background-color: #00897b;
    color: #ffffff;
  }
`;

export const PrevNextBtnWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
`;

export const PrevNextBtn = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;

  &:not(:disabled):hover {
    background-color: #00897b;
    color: #ffffff;
    cursor: pointer;
  }
`;
