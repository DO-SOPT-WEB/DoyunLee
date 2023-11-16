import styled from "styled-components";

const PerInput = ({ title, type, placeholder }) => {
  return (
    <InputWrapper>
      <Title>{title}</Title>
      <Input type={type} placeholder={placeholder} />
    </InputWrapper>
  );
};

export default PerInput;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.2rem;
`;

// input type:text, password
const Input = styled.input`
  width: 50%;
  height: 1.5rem;
  padding: 0.3rem;
`;
