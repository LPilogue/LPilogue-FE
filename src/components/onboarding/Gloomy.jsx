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

const Gloomy = ({ onNext, onChange }) => {
  return (
    <Container>
      <Question>
        우울할 때,
        <br />
        어떤 음악을 찾게 되나요?
      </Question>
      <ButtonWrapper>
        <Button
          type="onboarding"
          onClick={() => {
            onChange(1);
            onNext();
          }}
        >
          슬픔을 더 느낄 수 있는 감성적인 곡
        </Button>
        <Button
          type="onboarding"
          onClick={() => {
            onChange(0);
            onNext();
          }}
        >
          기분을 바꿔줄 밝은 곡
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default Gloomy;
