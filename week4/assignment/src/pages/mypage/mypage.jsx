import { TypeList, Profile } from "../../assets/DATA";
import { Wrapper, Title, Btn } from "../../styles/CommonStyle";
import PerInput from "../../components/common/input";
import styled from "styled-components";

const MyPage = () => {
  return (
    <>
      <Wrapper>
        <Title>My Page</Title>
        <SectionWrapper>
          <ProfileImg src={Profile} />
          <InputWrapper>
            <PerInput placeholder={TypeList[0].title} />
            <PerInput placeholder={TypeList[3].title} />
          </InputWrapper>
        </SectionWrapper>
        <LogOutBtn>로그아웃</LogOutBtn>
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
