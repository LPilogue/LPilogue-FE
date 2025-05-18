import styled, { css } from 'styled-components';

const sizeStyles = {
  full: css`
    width: 250px;
    height: 55px;
  `,
  half: css`
    width: 100px;
    height: 55px;
  `,
  header: css`
    width: 55px;
    height: 35px;
    border-radius: 9px;
  `,
  modal: css`
    width: 100px;
    height: 35px;
  `,
};

const StyledButton = styled.button`
  background-color: ${({ color }) => color};
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

const Button = ({ size = 'full', color = '#56b7c4', children, ...rest }) => {
  return (
    <StyledButton size={size} color={color} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
