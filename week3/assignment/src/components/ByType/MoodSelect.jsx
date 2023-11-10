import DATA from "../../assets/DATA";
import { useState } from "react";
import { Question, SectionWrapper } from "../../style/MainStyle";
import { PrevNextBtnWrapper, PrevNextBtn } from "../../style/ButtonStyle";
import styled from "styled-components";
import DegreeSelect from "./DegreeSelect";
import TypeBtnStart from "./TypeBtnStart";

const MoodSelect = (props) => {
  const moodList = [...new Set(DATA.map((elm) => elm.mood))];
  const [selectedMood, setSelectedMood] = useState("");

  const [isMoodSelected, setIsMoodSelected] = useState(false);
  const [isNextSelected, setIsNextSelected] = useState(false);

  const [currentStep, setCurrentStep] = useState(1); // Assuming MoodSelect is the first step

  const { isStart, isStartHandler, initIsStart, setIsStart } = props;

  const handleBtnChange = (e) => {
    setSelectedMood(e.target.value);
    setIsMoodSelected(true);
  };

  const handleNextBtn = () => {
    setIsNextSelected(!isNextSelected);
  };

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
      {!isNextSelected && currentStep === 1 ? (
        <SectionWrapper>
          <Question>어떤 분위기의 노래를 원해?</Question>
          <MoodBtnWrapper>
            {moodList.map((mood) => (
              <MoodBtn
                key={mood}
                value={mood}
                className={mood === selectedMood ? "active" : ""}
                onClick={handleBtnChange}
              >
                {mood}
              </MoodBtn>
            ))}
          </MoodBtnWrapper>

          <PrevNextBtnWrapper>
            {<PrevNextBtn onClick={handlePrev}>이전으로</PrevNextBtn>}
            {currentStep < 4 && (
              <PrevNextBtn
                disabled={isMoodSelected === false}
                onClick={handleNext}
              >
                다음으로
              </PrevNextBtn>
            )}
          </PrevNextBtnWrapper>
        </SectionWrapper>
      ) : currentStep === 2 ? (
        <DegreeSelect
          isStart={isStart}
          setIsStart={setIsStart}
          isStartHandler={isStartHandler}
          selectedMood={selectedMood}
          isNextSelected={isNextSelected}
        />
      ) : (
        currentStep === 0 && <TypeBtnStart />
      )}
    </>
  );
};

export default MoodSelect;

const MoodBtnWrapper = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const MoodBtn = styled.button`
  width: 10rem;
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
