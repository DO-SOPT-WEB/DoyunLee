import styled from "styled-components";
import { Btn } from "../../styles/CommonStyle";

const LoginBtn = ({ onClick }) => {
  return (
    <>
      <Button onClick={onClick}>로그인</Button>
    </>
  );
};

export default LoginBtn;

const Button = styled(Btn)`
  background-color: #030046;
  color: #ffffff;
`;
