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

const Stress = ({ onNext, onChange }) => {
  return (
    <Container>
      <Question>
        스트레스를 받을 때,
        <br />더 끌리는 음악은?
      </Question>
      <ButtonWrapper>
        <Button
          type="onboarding"
          onClick={() => {
            onChange(1);
            onNext();
          }}
        >
          강렬한 비트와 강한 사운드의 곡
        </Button>
        <Button
          type="onboarding"
          onClick={() => {
            onChange(0);
            onNext();
          }}
        >
          차분하고 편안한 분위기의 곡
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default Stress;
