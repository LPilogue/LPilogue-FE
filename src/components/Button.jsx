import styled, { css } from 'styled-components';

const sizeStyles = {
  full: css`
    width: 250px;
    height: 55px;
  `,
  half: css`
    width: 112px;
    height: 55px;
  `,
  header: css`
    width: 55px;
    height: 35px;
    border-radius: 9px;
  `,
};

const StyledButton = styled.button`
  background-color: #56b7c4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 13px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);

  ${({ size = 'full' }) => sizeStyles[size]}
`;

const Button = ({ size = 'full', children, ...rest }) => {
  return (
    <StyledButton size={size} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
