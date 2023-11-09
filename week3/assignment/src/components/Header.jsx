import styled from "styled-components";

const Header = () => {
  return (
    <div className="Header">
      <HeaderWrapper>
        <HeaderText>🐻🦊🐰🐶 DAY6 노래 취향 월드컵🐶🐰🦊🐻</HeaderText>
      </HeaderWrapper>
    </div>
  );
};
export default Header;

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: #4db6ac;
  padding: 2rem 0;
`;

const HeaderText = styled.h1`
  color: #f9fbde;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
`;
