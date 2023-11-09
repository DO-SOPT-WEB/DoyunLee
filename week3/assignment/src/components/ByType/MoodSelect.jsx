import DATA from "../../assets/DATA";
import { useState } from "react";
import { Question, SectionWrapper } from "../../style/MainStyle";
import { PrevNextBtnWrapper, PrevNextBtn } from "../../style/ButtonStyle";
import DegreeSelect from "./DegreeSelect";
import styled from "styled-components";

const MoodSelect = () => {
  const moodList = [...new Set(DATA.map((elm) => elm.mood))];
  const [selectedMood, setSelectedMood] = useState("");
  const [isMoodSelected, setIsMoodSelected] = useState(false);
  const [isNextSelected, setIsNextSelected] = useState(false);

  const handleBtnChange = (e) => {
    setSelectedMood(e.target.value);
    setIsMoodSelected(true);
  };
  const handleNextBtn = () => {
    setIsNextSelected(!isNextSelected);
  };

  return (
    <>
      {!isNextSelected ? (
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
            <PrevNextBtn>이전으로</PrevNextBtn>
            <PrevNextBtn
              disabled={isMoodSelected === false}
              onClick={handleNextBtn}
            >
              다음으로
            </PrevNextBtn>
          </PrevNextBtnWrapper>
        </SectionWrapper>
      ) : (
        <DegreeSelect selectedMood={selectedMood} />
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
