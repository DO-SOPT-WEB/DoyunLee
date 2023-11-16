import styled from "styled-components";
import PerInput from "../../components/common/input";
// import MainWrapper from "../../components/common/mainWrapper";
import { Wrapper } from "../../styles/CommonStyle";
import TypeList from "../../assets/DATA";
import LoginBtn from "../../components/common/loginBtn";
import SignUpBtn from "../../components/common/signupBtn";

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
        <SignUpBtn />
      </Wrapper>
    </>
  );
};

export default LogInPage;

const Title = styled.h1`
  font-size: 1.6rem;
`;
