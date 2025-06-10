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

const Happy = ({ onNext, onChange }) => {
  return (
    <Container>
      <Question>
        기분이 좋을 때,
        <br />더 듣고 싶은 음악은?
      </Question>
      <ButtonWrapper>
        <Button
          type="onboarding"
          onClick={() => {
            onChange(1);
            onNext();
          }}
        >
          신나는 업템포 곡
        </Button>
        <Button
          type="onboarding"
          onClick={() => {
            onChange(0);
            onNext();
          }}
        >
          잔잔한 분위기의 곡
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default Happy;
