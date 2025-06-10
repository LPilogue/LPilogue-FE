import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const Question = styled.div`
  font-size: 28px;
  margin-top: 50px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ToRecom = ({ onNext }) => {
  const navigate = useNavigate();

  const handleWriteClick = () => {
    navigate('/today/profile');
  };

  const handleOnboardingClick = () => {
    navigate('/write');
  };
  return (
    <Container>
      <Question>
        오늘의 노래 추천은
        <br />
        어떻게 해드릴까요?
      </Question>
      <ButtonWrapper>
        <Button
          type="onboarding"
          onClick={() => {
            handleWriteClick();
            onNext();
          }}
        >
          오늘은 좀 달라.
        </Button>
        <Button
          type="onboarding"
          onClick={() => {
            handleOnboardingClick();
            onNext();
          }}
        >
          평소대로 해줘.
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default ToRecom;
