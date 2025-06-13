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

const ToMood = ({ onNext }) => {
  const handleEmotionSelect = (emotion) => {
    sessionStorage.setItem('emotion', emotion);
    onNext();
  };

  return (
    <Container>
      <Question>오늘의 기분은 어떤가요?</Question>
      <ButtonWrapper>
        <Button type="onboarding" onClick={() => handleEmotionSelect('happy')}>
          행복해😊
        </Button>
        <Button type="onboarding" onClick={() => handleEmotionSelect('sad')}>
          슬 퍼😢
        </Button>
        <Button type="onboarding" onClick={() => handleEmotionSelect('angry')}>
          짜증나🤬
        </Button>
        <Button
          type="onboarding"
          onClick={() => handleEmotionSelect('depressed')}
        >
          우울해😔
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default ToMood;
