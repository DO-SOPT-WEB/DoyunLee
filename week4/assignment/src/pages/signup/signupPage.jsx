import PerInput from "../../components/common/input";
import { Wrapper, Title } from "../../styles/CommonStyle";
import { TypeList } from "../../assets/DATA";
import SignUpInput from "./signupInput";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import SignUpBtn from "./signUpBtn";

const SignUp = () => {
  // 회원가입 버튼 활성화
  const [isActive, setIsActive] = useState(false);
  // 중복 체크 결과
  const [isIdValid, setIsIdValid] = useState(null);
  //SignUp 페이지임을 알려주는 state
  const [isSignUpPage, setIsSignUpPage] = useState(true);

  //입력받은 ID,비밀번호, 비밀번호확인, 닉네임
  const [newID, setNewID] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newNickname, setNewNickname] = useState("");

  const navigate = useNavigate();

  const handlePost = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/api/v1/members`, {
        username: newID,
        password: newPassword,
        nickname: newNickname,
      });

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  //input의 요소와 중복체크가 이루어졌는지 확인하는 함수
  const checkInputFilled = () => {
    return (
      newID !== "" &&
      newPassword !== "" &&
      confirmPassword !== "" &&
      newPassword === confirmPassword &&
      newNickname !== "" &&
      isIdValid
    );
  };

  useEffect(() => {
    setIsActive(checkInputFilled());
  }, [newID, newPassword, confirmPassword, newNickname, isIdValid]);

  return (
    <>
      <Wrapper>
        <Title>Sign Up</Title>
        <SignUpInput
          title={TypeList[0].title}
          type={TypeList[0].type}
          placeholder={TypeList[0].placeholder}
          value={newID}
          onChange={(e) => {
            setNewID(e.target.value);
          }}
          isIdValid={isIdValid}
          setIsIdValid={setIsIdValid}
        />
        <PerInput
          title={TypeList[1].title}
          type={TypeList[1].type}
          placeholder={TypeList[1].placeholder}
          value={newPassword}
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
        />
        <PerInput
          title={TypeList[2].title}
          type={TypeList[2].type}
          placeholder={TypeList[2].placeholder}
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <PerInput
          title={TypeList[3].title}
          type={TypeList[3].type}
          placeholder={TypeList[3].placeholder}
          value={newNickname}
          onChange={(e) => {
            setNewNickname(e.target.value);
          }}
        />
        <SignUpBtn
          onClick={handlePost}
          isSignUpPage={isSignUpPage}
          isActive={isActive}
        >
          회원가입
        </SignUpBtn>
      </Wrapper>
    </>
  );
};

export default SignUp;
