import { useState } from "react";
import DATA from "../../assets/DATA";
import { Question, SectionWrapper } from "../../style/MainStyle";
import { PrevNextBtnWrapper, PrevNextBtn } from "../../style/ButtonStyle";
import styled from "styled-components";
import SoloOrGroupSelect from "./SoloOrGroup";

const DegreeSelect = (props) => {
  const { selectedMood } = props;
  const degreeList = [...new Set(DATA.map((elm) => elm.degree))];

  const [selectedDegree, setSelectedDegree] = useState("");
  const [isDegreeSelected, setIsDegreeSelected] = useState(false);
  const [isNextSelected, setIsNextSelected] = useState(false);

  const handleBtnChange = (e) => {
    setSelectedDegree(e.target.value);
    setIsDegreeSelected(true);
  };

  const handleNextBtn = () => {
    setIsNextSelected(!isNextSelected);
  };

  return (
    <>
      {!isNextSelected ? (
        <SectionWrapper>
          <Question>분위기의 정도가 어땠으면 해?</Question>
          <DegreeBtnWrapper>
            {degreeList.map((degree) => (
              <DegreeBtn
                key={degree}
                value={degree}
                className={degree === selectedDegree ? "active" : ""}
                onClick={handleBtnChange}
              >
                {degree}
              </DegreeBtn>
            ))}
          </DegreeBtnWrapper>
          <PrevNextBtnWrapper>
            <PrevNextBtn>이전으로</PrevNextBtn>
            <PrevNextBtn
              disabled={isDegreeSelected === false}
              onClick={handleNextBtn}
            >
              다음으로
            </PrevNextBtn>
          </PrevNextBtnWrapper>
        </SectionWrapper>
      ) : (
        <SoloOrGroupSelect
          selectedMood={selectedMood}
          selectedDegree={selectedDegree}
        />
      )}
    </>
  );
};
export default DegreeSelect;

const DegreeBtnWrapper = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const DegreeBtn = styled.button`
  width: 14rem;
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
