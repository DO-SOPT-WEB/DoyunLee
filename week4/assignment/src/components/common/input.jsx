import styled from "styled-components";

const PerInput = ({ title, type, placeholder, value, onChange }) => {
  return (
    <InputWrapper>
      <Title>{title}</Title>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
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
  font-size: 1.1rem;
`;

// input type:text, password
const Input = styled.input`
  width: 60%;
  height: 1.5rem;
  padding: 0.3rem;
`;
