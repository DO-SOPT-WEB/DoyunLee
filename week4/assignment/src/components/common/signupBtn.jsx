import styled from "styled-components";
import { Btn } from "../../styles/CommonStyle";

const SignUpBtn = ({ onClick }) => {
  return (
    <>
      <Button onClick={onClick}>회원가입</Button>
    </>
  );
  // login페이지에서, disable일 때, enable일 때
};
export default SignUpBtn;

const Button = styled(Btn)`
  background-color: #b2b2b2;
  color: #ffffff;
`;
