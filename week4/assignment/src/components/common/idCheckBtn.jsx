import styled from "styled-components";

const IdCheckBtn = ({ onClick, isIdValid }) => {
  return (
    <>
      {isIdValid === null && <Button onClick={onClick}>중복 체크</Button>}
      {isIdValid === true && (
        <IsValidBtn onClick={onClick}>중복 체크</IsValidBtn>
      )}
      {isIdValid === false && (
        <IsNotValidBtn onClick={onClick}>중복 체크</IsNotValidBtn>
      )}
    </>
  );
};

export default IdCheckBtn;

const Button = styled.button`
  width: 5.5rem;
  height: 2.2rem;

  padding: 0.3rem;

  border: none;

  background-color: #000000;
  color: #ffffff;

  cursor: pointer;
`;

const IsValidBtn = styled(Button)`
  background-color: #23ac21;
`;

const IsNotValidBtn = styled(Button)`
  background-color: #f75757;
`;
