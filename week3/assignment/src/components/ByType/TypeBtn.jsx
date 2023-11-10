import styled from "styled-components";
import TypeBtnStart from "./TypeBtnStart";

const TypeBtn = (props) => {
  const {
    isStart,
    TypeSelect,
    RandomSelect,
    isStartHandler,
    typeHandler,
    initIsStart,
    setIsStart,
  } = props;

  return (
    <>
      {/* 어느 버튼도 눌리지 않았을 때 : 취향대로 추천 버튼 보여지기 */}
      {!TypeSelect && !RandomSelect ? (
        <Type onClick={typeHandler}>취향대로 추천</Type>
      ) : null}
      {/* Type버튼이 눌렸을 때 : 취향대로 추천, 시작하기 버튼 있는 페이지로 이동 */}
      {TypeSelect && !RandomSelect ? (
        <TypeBtnStart
          isStart={isStart}
          isStartHandler={isStartHandler}
          initIsStart={initIsStart}
          setIsStart={setIsStart}
        />
      ) : null}
    </>
  );
};

export default TypeBtn;

const Type = styled.button`
  padding: 8rem;
  border: none;
  border-radius: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  background-color: #e0f2f1;
  cursor: pointer;

  &:hover {
    background-color: #00897b;
    color: white;
  }
`;
