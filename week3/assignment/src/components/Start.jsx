//원하는 추천 방식 고르기
//취향대로 vs 랜덤으로
//선택하면 Start 버튼 띄우기
import { useState } from "react";
import { SectionWrapper, Question } from "../style/MainStyle";
import { ButtonWrapper } from "../style/ButtonStyle";
import TypeBtn from "./ByType/TypeBtn";
import RandomBtn from "./ByRandom/RandomBtn";

const Start = () => {
  const [isStart, setIsStart] = useState(false);
  const [TypeSelect, setTypeSelect] = useState(false);
  const [RandomSelect, setRandomSelect] = useState(false);

  const isStartHandler = () => {
    setIsStart(!isStart);
  };

  const typeHandler = () => {
    setTypeSelect(!TypeSelect);
  };
  const randomHandler = () => {
    setRandomSelect(!RandomSelect);
  };

  return (
    <>
      <SectionWrapper>
        {!isStart && <Question>원하는 추천 방식을 골라줘!</Question>}
        <ButtonWrapper>
          <TypeBtn
            isStart={isStart}
            TypeSelect={TypeSelect}
            RandomSelect={RandomSelect}
            isStartHandler={isStartHandler}
            typeHandler={typeHandler}
            randomHandler={randomHandler}
          />
          <RandomBtn
            isStart={isStart}
            TypeSelect={TypeSelect}
            RandomSelect={RandomSelect}
            isStartHandler={isStartHandler}
            typeHandler={typeHandler}
            randomHandler={randomHandler}
          />
        </ButtonWrapper>
      </SectionWrapper>
    </>
  );
};
export default Start;
