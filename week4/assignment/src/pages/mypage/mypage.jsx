import { TypeList, Profile } from "../../assets/DATA";
import { Wrapper, Title } from "../../styles/CommonStyle";
import PerInput from "../../components/common/input";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const MyPage = () => {
  const [getUsername, setGetUsername] = useState("");
  const [getNickname, setGetNickname] = useState("");

  const { userId } = useParams();

  const navigate = useNavigate();

  const handleGet = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_BASE_URL}/api/v1/members/${userId}`,
        {
          userId: userId,
        }
      );
      const { data } = response;
      setGetUsername(data.username);
      setGetNickname(data.nickname);
    } catch {
      console.log("error");
    }
  };
  const handleOnClick = () => {
    navigate("/login");
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <>
      <Wrapper>
        <Title>My Page</Title>
        <SectionWrapper>
          <ProfileImg src={Profile} />
          <InputWrapper>
            <PerInput placeholder={getUsername} disabled={true} />
            <PerInput placeholder={getNickname} disabled={true} />
          </InputWrapper>
        </SectionWrapper>
        <LogOutBtn type="button" onClick={handleOnClick}>
          로그아웃
        </LogOutBtn>
      </Wrapper>
    </>
  );
};

export default MyPage;

const SectionWrapper = styled.article`
  display: flex;
  justify-content: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 100%;
`;

const ProfileImg = styled.img`
  width: 10rem;
  height: 10rem;

  border-radius: 50%;
`;

const LogOutBtn = styled.button`
  width: 7rem;
  height: 2rem;

  margin-top: 3rem;

  border: none;
  border-radius: 0.3rem;

  background-color: #000000;
  color: #ffffff;

  cursor: pointer;
`;
