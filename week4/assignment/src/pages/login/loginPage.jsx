import axios from "axios";
import styled from "styled-components";
import PerInput from "../../components/common/input";
import { Wrapper, Title, Btn } from "../../styles/CommonStyle";
import { TypeList } from "../../assets/DATA";
import LoginBtn from "../../components/common/loginBtn";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LogInPage = () => {
  const [inputUsername, setInputUsername] = useState("");
  const [inputPW, setInputPW] = useState("");
  const [isLoginPage, setIsLoginPage] = useState(true);

  const navigate = useNavigate();

  const handlePost = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_BASE_URL}/api/v1/members/sign-in`,
        {
          username: inputUsername,
          password: inputPW,
        }
      );
      console.log("login 성공", response);
      navigate(`/mypage/${response.data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const GoToSignUp = () => {
    navigate("/signup");
  };

  return (
    <>
      <Wrapper>
        <Title>로그인</Title>
        <PerInput
          title={TypeList[0].title}
          type={TypeList[0].type}
          placeholder={TypeList[0].placeholder}
          value={inputUsername}
          onChange={(e) => {
            setInputUsername(e.target.value);
          }}
        />
        <PerInput
          title={TypeList[1].title}
          type={TypeList[1].type}
          placeholder={TypeList[1].placeholder}
          value={inputPW}
          onChange={(e) => {
            setInputPW(e.target.value);
          }}
        />
        <LoginBtn onClick={handlePost} />
        <SignUpBtn type="button" onClick={GoToSignUp} isLoginPage={isLoginPage}>
          회원가입
        </SignUpBtn>
      </Wrapper>
    </>
  );
};

export default LogInPage;

const SignUpBtn = styled(Btn)`
  background-color: #fffffff;
`;
