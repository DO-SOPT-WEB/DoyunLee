import { useState, useEffect } from "react";
import styled from "styled-components";

const Timer = () => {
  // 3초부터 카운트다운 하기 때문에 초기값 3
  const [time, setTime] = useState(3);

  useEffect(() => {
    time > 0 && setTimeout(() => setTime(time - 1), 1000);
  });

  /* 3,2,1 카운트다운 렌더링
  0초가 되면 결과 보여주는 페이지로 이동 */
  return <>{time ? <Time>{time}</Time> : <div>카운트다운 종료</div>}</>;
};
export default Timer;

const Time = styled.h2`
  padding: 10rem;
  font-size: 4rem;
`;
