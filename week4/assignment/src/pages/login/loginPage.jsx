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
      navigate(`/mypage/${response.data.username}`);
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
        <SignUpBtn type="button" onClick={GoToSignUp}>
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
