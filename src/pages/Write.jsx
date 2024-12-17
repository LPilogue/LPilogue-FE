import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import sound from '../assets/images/sound.svg';
import left from '../assets/images/leftButton.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  margin: 0 auto;
  border: none;
  background-color: #f9f2df;
  user-select: none;
  align-items: center;
`;

const Layout = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  gap: 27px;
`;

const Header = styled.div`
  display: flex;
  width: 350px;
  justify-content: space-between;
  align-items: center;
`;

const BackButton = styled.img`
  width: 28px;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: ${(props) => (props.active ? '#56B7C4' : '#ccc')};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.active ? 'pointer' : 'not-allowed')};
  width: 55px;
  height: 35px;
  white-space: nowrap;
  align-self: flex-end;
  font-size: 20px;
`;

const InputDate = styled.input`
  width: 100%;
  height: 30px;
  background-color: #f9f2df;
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 0px 10px;
  box-sizing: border-box;
  pointer-events: ${(props) => (props.disabled ? 'none' : 'auto')};
  font-size: 20px;
`;

const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 480px;
`;

const Textarea = styled.textarea`
  width: 330px;
  height: 450px;
  line-height: 1.25;
  border: none;
  outline: none;
  background-color: #f9f2df;
  resize: none;
  font-size: 20px;
  margin-bottom: 5px;

  &::placeholder {
    font-size: 20px;
  }
`;

const BottomMenu = styled.div`
  display: flex;
  width: 330px;
  justify-content: space-between;
  align-items: center;
`;

const VoiceButton = styled.div`
  display: flex;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;

  img {
    width: 20px;
    margin-right: 5px;
  }
`;

const TextareaLabel = styled.span`
  display: flex;
  margin-left: auto;
  margin-right: 35px;
`;

const Line = styled.hr`
  width: 340px;
  border: 0.5px solid #ccc;
  margin-top: 17px;
`;

const Write = () => {
  const today = new Date();
  const threeDaysAgo = new Date();
  threeDaysAgo.setDate(today.getDate() - 3);
  const todayString = today.toISOString().split('T')[0];
  const threeDaysAgoString = threeDaysAgo.toISOString().split('T')[0];

  const [text, setText] = useState('');
  const [date, setDate] = useState(todayString);

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleButtonClick = () => {
    if (date && text.length > 0) {
      navigate('/recommend');
    }
  };

  return (
    <Container>
      <Layout>
        <Header>
          <BackButton src={left} alt="back" onClick={() => navigate(-1)} />

          <Button onClick={handleButtonClick} active={text.length > 0}>
            완료
          </Button>
        </Header>
        <InputDate
          type="date"
          value={date}
          onChange={handleDateChange}
          max={todayString}
          min={threeDaysAgoString}
          onKeyDown={(e) => e.preventDefault()}
        />
      </Layout>

      <Line />

      <TextareaContainer>
        <Textarea
          placeholder="일기를 작성해보세요"
          value={text}
          onChange={handleTextChange}
          spellCheck="false"
          maxLength={500}
        />
        <BottomMenu>
          <VoiceButton onClick={() => navigate('/voice')}>
            <img src={sound} alt="sound" />
            음성으로 입력하기
          </VoiceButton>
          <TextareaLabel>{text.length}/500</TextareaLabel>
        </BottomMenu>
      </TextareaContainer>
    </Container>
  );
};

export default Write;
