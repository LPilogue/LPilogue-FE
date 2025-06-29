import { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Input from '../Input';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const Question = styled.div`
  font-size: 28px;
  margin-top: 50px;
  margin-bottom: 10px;
`;

const NextButton = styled(Button)`
  margin: auto;
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
`;

const Favorite = ({ onNext, onChange }) => {
  const [artist, setArtist] = useState('');

  const handleNext = () => {
    if (onChange) {
      onChange(artist);
    }
    onNext();
  };

  return (
    <Container>
      <div>
        <Question>
          좋아하는 아티스트가 있다면 <br />
          알려주세요!
        </Question>
        <div>입력하지 않아도 다음으로 넘어갈 수 있어요.</div>
      </div>
      <Input
        placeholder="아티스트명을 입력해주세요."
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <NextButton type="half" onClick={handleNext}>
        다음
      </NextButton>
    </Container>
  );
};

export default Favorite;
