import styled from "styled-components";

const SignUpInput = ({ title, type, placeholder, value, onChange }) => {
  return (
    <InputWrapper>
      <Title>{title}</Title>
      <BtnWrapper>
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <Button>중복 체크</Button>
      </BtnWrapper>
    </InputWrapper>
  );
};

export default SignUpInput;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BtnWrapper = styled(InputWrapper)`
  justify-content: end;
  gap: 1rem;
  width: 75%;
`;

const Title = styled.h2`
  font-size: 1.1rem;
`;

const Input = styled.input`
  width: 45%;
  height: 1.5rem;
  padding: 0.3rem;
`;

const Button = styled.button`
  width: 5.5rem;
  height: 2.2rem;

  padding: 0.3rem;

  border: none;

  background-color: #000000;
  color: #ffffff;

  cursor: pointer;
`;
