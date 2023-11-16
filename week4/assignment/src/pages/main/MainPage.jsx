import styled from "styled-components";
import { Wrapper, Btn } from "../../styles/CommonStyle";
import { useNavigate } from "react-router-dom";
const MainPage = () => {
  const navigate = useNavigate();
  const GoToLogIn = () => {
    navigate("./login");
  };
  return (
    <>
      <MainWrapper>
        <MainBtn type="button" onClick={GoToLogIn}>
          로그인하러 가기
        </MainBtn>
      </MainWrapper>
    </>
  );
};
export default MainPage;

const MainWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainBtn = styled(Btn)`
  margin-top: 0;
  background-color: #565af4;
  color: #ffffff;
`;
