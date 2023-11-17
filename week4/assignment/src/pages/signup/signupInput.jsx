import axios from "axios";
import styled from "styled-components";
import { useEffect } from "react";
import IdCheckBtn from "../../components/common/idCheckBtn";

const SignUpInput = ({
  title,
  type,
  placeholder,
  value,
  onChange,
  isIdValid,
  setIsIdValid,
}) => {
  const checkIsValid = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_BASE_URL}/api/v1/members/check`,
        {
          params: {
            username: value,
          },
        }
      );

      if (response.data.isExist) {
        setIsIdValid(false);
      } else if (!response.data.isExist) {
        setIsIdValid(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setIsIdValid(null);
  }, [value]);

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
        <IdCheckBtn onClick={checkIsValid} isIdValid={isIdValid}>
          중복 체크
        </IdCheckBtn>
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
