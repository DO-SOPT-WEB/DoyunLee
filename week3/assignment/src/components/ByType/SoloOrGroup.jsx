import { useState } from "react";
import DATA from "../../assets/DATA";
import { Question, SectionWrapper } from "../../style/MainStyle";
import { PrevNextBtnWrapper, PrevNextBtn } from "../../style/ButtonStyle";
import styled from "styled-components";
import ByTypeResult from "./ByTypeResult";

const SoloOrGroupSelect = (props) => {
  const { selectedMood, selectedDegree } = props;
  const cntList = [...new Set(DATA.map((elm) => elm.teamOrSolo))];

  const [selectedCnt, setSelectedCnt] = useState("");
  const [isBtnSelected, setIsBtnSelected] = useState(false);
  const [isNextSelected, setIsNextSelected] = useState(false);
  const [isPrevSelected, setIsPrevSelected] = useState(false);

  const handleBtnChange = (e) => {
    setSelectedCnt(e.target.value);
    setIsBtnSelected(true);
  };

  const handleNextBtn = () => {
    setIsNextSelected(!isNextSelected);
  };

  return (
    <>
      {!isNextSelected ? (
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
          <PrevNextBtnWrapper>
            <PrevNextBtn>이전으로</PrevNextBtn>
            <PrevNextBtn
              disabled={isBtnSelected === false}
              onClick={handleNextBtn}
            >
              다음으로
            </PrevNextBtn>
          </PrevNextBtnWrapper>
        </SectionWrapper>
      ) : (
        <ByTypeResult
          selectedMood={selectedMood}
          selectedDegree={selectedDegree}
          selectedCnt={selectedCnt}
        />
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
