import PerInput from "../../components/common/input";
import { Wrapper, Title, Btn } from "../../styles/CommonStyle";
import { TypeList } from "../../assets/DATA";
import SignUpInput from "../../components/common/signupInput";
import styled from "styled-components";

const SignUp = () => {
  return (
    <>
      <Wrapper>
        <Title>Sign Up</Title>
        <SignUpInput
          title={TypeList[0].title}
          type={TypeList[0].type}
          placeholder={TypeList[0].placeholder}
        />
        <PerInput
          title={TypeList[1].title}
          type={TypeList[1].type}
          placeholder={TypeList[1].placeholder}
        />
        <PerInput
          title={TypeList[2].title}
          type={TypeList[2].type}
          placeholder={TypeList[2].placeholder}
        />
        <PerInput
          title={TypeList[3].title}
          type={TypeList[3].type}
          placeholder={TypeList[3].placeholder}
        />
        <SignUpBtn>회원가입</SignUpBtn>
      </Wrapper>
    </>
  );
};

export default SignUp;

const SignUpBtn = styled(Btn)`
  background-color: #b2b2b2;
  color: #ffffff;
`;
