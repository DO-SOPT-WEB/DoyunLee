import DATA from "../../assets/DATA";
import styled from "styled-components";
import { Question, SectionWrapper } from "../../style/MainStyle";

const RandomResult = (props) => {
  // eslint-disable-next-line react/prop-types
  const { isStart, isStartHandler } = props;
  const randomIdx = Math.floor(Math.random() * DATA.length);
  const AlbumCover = DATA[randomIdx].img;
  const SongTitle = DATA[randomIdx].title;

  return (
    <>
      <SectionWrapper>
        <Question>오늘의 추천 노래는 바로!</Question>
        <Img src={AlbumCover} alt="랜덤 노래 커버 이미지"></Img>
        <Title>{SongTitle}</Title>
        <RetryBtn onClick={isStartHandler}>다시하기</RetryBtn>
      </SectionWrapper>
    </>
  );
};

export default RandomResult;

const Img = styled.img`
  width: 18rem;
  height: 18rem;
`;

const Title = styled.h2`
  font-size: 1.7rem;
  color: #ffffff;
`;

const RetryBtn = styled.button`
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 2rem;
  cursor: pointer;
  background-color: #e0f2f1;

  &:hover {
    background-color: #00897b;
    color: #ffffff;
  }
`;
