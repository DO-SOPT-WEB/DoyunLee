import { useState } from "react";
import DATA from "../../assets/DATA";
import { Question, SectionWrapper } from "../../style/MainStyle";
import { PrevNextBtnWrapper, PrevNextBtn } from "../../style/ButtonStyle";
import styled from "styled-components";
import ByTypeResult from "./ByTypeResult";
import DegreeSelect from "./DegreeSelect";

const SoloOrGroupSelect = (props) => {
  const { isStart, setIsStart, isStartHandler, selectedMood, selectedDegree } =
    props;

  const cntList = [...new Set(DATA.map((elm) => elm.teamOrSolo))];

  const [selectedCnt, setSelectedCnt] = useState("");
  const [isBtnSelected, setIsBtnSelected] = useState(false);
  const [isNextSelected, setIsNextSelected] = useState(false);
  const [currentStep, setCurrentStep] = useState(3);

  const handleBtnChange = (e) => {
    setSelectedCnt(e.target.value);
    setIsBtnSelected(true);
  };

  // const handleNextBtn = () => {
  //   setIsNextSelected(!isNextSelected);
  // };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
    setIsStart(false);
    console.log(currentStep - 1);
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
    setIsStart(true);
    console.log(currentStep + 1);
  };

  return (
    <>
      {!isNextSelected && currentStep === 3 ? (
        <SectionWrapper>
          <Question>마지막으로 골라줘!</Question>
          <SoloOrGroupBtnWrapper>
            {cntList.map((soloOrGroup) => (
              <SoloOrGroupBtn
                key={soloOrGroup}
                value={soloOrGroup}
                className={soloOrGroup === selectedCnt ? "active" : ""}
                onClick={handleBtnChange}
              >
                {soloOrGroup}
              </SoloOrGroupBtn>
            ))}
          </SoloOrGroupBtnWrapper>

          {/* <PrevNextBtnWrapper>
            <PrevNextBtn onClick={handlePrev}>이전으로</PrevNextBtn>
            {currentStep < 4 && (
              <PrevNextBtn
                disabled={isBtnSelected === false}
                onClick={handleNext}
              >
                결과보기
              </PrevNextBtn>
            )}
          </PrevNextBtnWrapper> */}
          <PrevNextBtnWrapper>
            {<PrevNextBtn onClick={handlePrev}>이전으로</PrevNextBtn>}
            {currentStep < 4 && (
              <PrevNextBtn
                disabled={isBtnSelected === false}
                onClick={handleNext}
              >
                결과보기
              </PrevNextBtn>
            )}
          </PrevNextBtnWrapper>
        </SectionWrapper>
      ) : currentStep === 4 ? (
        <ByTypeResult
          isStart={isStart}
          isStartHandler={isStartHandler}
          selectedMood={selectedMood}
          selectedDegree={selectedDegree}
          selectedCnt={selectedCnt}
        />
      ) : (
        currentStep === 2 && (
          <DegreeSelect
            currentStep={currentStep}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        )
      )}
    </>
  );
};
export default SoloOrGroupSelect;

const SoloOrGroupBtnWrapper = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

const SoloOrGroupBtn = styled.button`
  width: 17rem;
  height: 15rem;
  border: none;
  border-radius: 1rem;

  font-size: 1.3rem;
  cursor: pointer;

  &:hover {
    border: 2px solid black;
  }

  &.active {
    background-color: #00897b;
    color: #ffffff;
  }
`;
