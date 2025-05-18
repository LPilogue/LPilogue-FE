import styled from 'styled-components';

const StyledInput = styled.input`
  width: 280px;
  height: 45px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  padding: 0 10px;
  border-radius: 13px;
  outline: none;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);

  &::placeholder {
    font-size: 20px;
  }
`;

const Input = ({ ...rest }) => {
  return <StyledInput {...rest} />;
};

export default Input;
