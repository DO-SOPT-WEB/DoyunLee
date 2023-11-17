import styled from "styled-components";
import { Btn } from "../../styles/CommonStyle";
import { isCancel } from "axios";

const SignUpBtn = ({
  onClick,
  disabled,
  isLoginPage,
  isSignUpPage,
  isActive,
}) => {
  return (
    <>
      {isLoginPage && (
        <InLoginPageBtn onClick={onClick}>회원가입</InLoginPageBtn>
      )}
      {isSignUpPage && !isActive && (
        <InSignUpPageBtn onClick={onClick}>회원가입</InSignUpPageBtn>
      )}
      {isSignUpPage && isActive && (
        <ActiveSignUpBtn onClick={onClick}>회원가입</ActiveSignUpBtn>
      )}
    </>
  );
  // login페이지에서, disable일 때, enable일 때
};
export default SignUpBtn;

const InLoginPageBtn = styled(Btn)`
  background-color: #b2b2b2;
  color: #ffffff;
`;

const InSignUpPageBtn = styled(Btn)`
  background-color: #cccccc;
  cursor: auto;
`;

const ActiveSignUpBtn = styled(Btn)`
  background-color: #444444;
  color: #ffffff;
`;
