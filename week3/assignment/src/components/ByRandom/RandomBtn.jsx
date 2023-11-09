import styled from "styled-components";
import RandomBtnStart from "./RandomBtnStart";

const RandomBtn = (props) => {
  // eslint-disable-next-line react/prop-types
  const { isStart, TypeSelect, RandomSelect, isStartHandler, randomHandler } =
    props;

  return (
    <>
      {/* 어느 버튼도 눌리지 않았을 때 : 랜덤으로 추천 버튼 보여지기 */}
      {!RandomSelect && !TypeSelect ? (
        <Random onClick={randomHandler}>랜덤으로 추천</Random>
      ) : null}
      {/* Random 버튼이 눌렸을 때 : 랜덤으로 추천, 시작하기 버튼 있는 페이지로 이동 */}
      {RandomSelect && !TypeSelect ? (
        <RandomBtnStart isStart={isStart} isStartHandler={isStartHandler} />
      ) : null}
    </>
  );
};
export default RandomBtn;

const Random = styled.button`
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
