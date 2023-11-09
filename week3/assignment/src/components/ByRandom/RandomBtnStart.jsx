import styled from "styled-components";
import { StartBtn } from "../../style/ButtonStyle";
import Timer from "./CountDown";

const RandomBtnStart = (props) => {
  // eslint-disable-next-line react/prop-types
  const { isStart, isStartHandler } = props;

  return (
    <>
      {/* start가 눌리지 않았을 때(!isStart) : 랜덤으로추천, 시작하기 버튼 모두 보이기 */}
      {/* start가 눌렸을 때 : 다음 화면으로 이동 */}
      {!isStart ? (
        <RandomWrapper>
          <SelectRandomBtn>랜덤으로 추천</SelectRandomBtn>
          <StartBtn onClick={isStartHandler}>Start!</StartBtn>
        </RandomWrapper>
      ) : (
        <Timer isStart={isStart} isStartHandler={isStartHandler} />
      )}
    </>
  );
};

export default RandomBtnStart;

const RandomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  height: 24rem;
`;

const SelectRandomBtn = styled.h2`
  width: 80%;
  padding: 9rem 2rem;

  text-align: center;

  font-size: 2rem;
  font-weight: 600;

  border-radius: 1rem;
  background-color: #e0f2f1;
`;
