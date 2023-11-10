import styled from "styled-components";
import { useState } from "react";
import { StartBtn } from "../../style/ButtonStyle";
import MoodSelect from "./MoodSelect";

const TypeBtnStart = (props) => {
  // eslint-disable-next-line react/prop-types
  const { isStart, isStartHandler, initStartHandler, initIsStart, setIsStart } =
    props;
  const [isPrevSelected, setIsPrevSelected] = useState(false);
  console.log("TypeBtnStart - isStart ", isStart);

  const startHandler = () => {
    initIsStart();
    isStartHandler();
  };

  return (
    <>
      {/* start가 눌리지 않았을 때(!isStart) : 취향대로추천, 시작하기 버튼 모두 보이기 */}
      {/* start가 눌렸을 때 : 다음 화면으로 이동 */}
      {!isStart ? (
        <TypeWrapper>
          <SelectTypeBtn>취향대로 추천</SelectTypeBtn>
          <StartBtn onClick={startHandler}>Start!</StartBtn>
        </TypeWrapper>
      ) : (
        <MoodSelect
          isStart={isStart}
          isStartHandler={isStartHandler}
          initStartHandler={initStartHandler}
          isPrevSelected={isPrevSelected}
          initIsStart={initIsStart}
          setIsStart={setIsStart}
        />
      )}
    </>
  );
};

export default TypeBtnStart;

const TypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  height: 24rem;
`;

const SelectTypeBtn = styled.h2`
  width: 80%;
  padding: 9rem 2rem;

  text-align: center;

  font-size: 2rem;
  font-weight: 600;

  border-radius: 1rem;
  background-color: #e0f2f1;
`;
