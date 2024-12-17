import PropTypes from 'prop-types';
import styled from 'styled-components';

const CompleteButton = styled.button`
  background-color: #56b7c4;
  color: white;
  height: 35px;
  width: 55px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: auto;
  font-size: 20px;
`;
const PositiveButton = ({ onClick }) => {
  return (
    <CompleteButton type="button" onClick={onClick}>
      완료
    </CompleteButton>
  );
};

PositiveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default PositiveButton;
