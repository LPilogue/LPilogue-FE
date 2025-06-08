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
        외로움을 느낄 때,
        <br />
        어떤 음악을 듣고 싶나요?
      </Question>
      <ButtonWrapper>
        <Button
          type="onboarding"
          onClick={() => {
            onChange(1);
            onNext();
          }}
        >
          공감할 수 있는 가사와 감성적인 곡
        </Button>
        <Button
          type="onboarding"
          onClick={() => {
            onChange(0);
            onNext();
          }}
        >
          뭐든 할 수 있어! 신나는 위로 곡
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default Stress;
