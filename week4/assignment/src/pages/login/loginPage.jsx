import styled from "styled-components";
import PerInput from "../../components/common/input";
import { Wrapper, Title, Btn } from "../../styles/CommonStyle";
import TypeList from "../../assets/DATA";
import LoginBtn from "../../components/common/loginBtn";
// import SignUpBtn from "../../components/common/signupBtn";

const LogInPage = () => {
  return (
    <>
      <Wrapper>
        <Title>로그인</Title>
        <PerInput
          title={TypeList[0].title}
          type={TypeList[0].type}
          placeholder={TypeList[0].placeholder}
        />
        <PerInput
          title={TypeList[1].title}
          type={TypeList[1].type}
          placeholder={TypeList[1].placeholder}
        />
        <LoginBtn />
        <SignUpBtn>회원가입</SignUpBtn>
      </Wrapper>
    </>
  );
};

export default LogInPage;

const SignUpBtn = styled(Btn)`
  background-color: #fffffff;
`;
