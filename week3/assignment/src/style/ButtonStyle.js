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
