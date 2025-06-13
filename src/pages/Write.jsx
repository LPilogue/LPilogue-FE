import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import sound from '../assets/images/sound.svg';
import left from '../assets/images/leftButton.svg';
import PositiveButton from '../components/PositiveButton';
import getChatbot from '../api/diary/getChatbot';

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

  // const mockData = {
  //   createdAt: new Date(date).toISOString(),
  //   content: text,
  //   // TODO: 실제 선택한 데이터로 수정 필요
  //   songs: [
  //     {
  //       name: '한 페이지가 될 수 있게',
  //       artist: 'DAY6',
  //       songURI: 'https://youtu.be/GWGWxKgsOgg?si=A6COjpNLAyJvYm_j',
  //       imagePath:
  //         'https://image.bugsm.co.kr/album/images/200/202657/20265759.jpg?version=20211119004415',
  //       isLiked: 0,
  //       type: 'MAIN',
  //     },
  //   ],
  //   cocktailName: 'Negroni',
  //   emotionType: 'HAPPY',
  // };

  const handleTextChange = (event) => setText(event.target.value);
  const handleDateChange = (event) => setDate(event.target.value);

  const handleSubmit = async () => {
    if (!date || text.trim().length === 0) {
      alert('날짜와 내용을 모두 입력해주세요.');
      return;
    }

    try {
      // ✅ 감정 값 세션에서 가져오기
      const emotion = sessionStorage.getItem('emotion');

      const chatbotResponse = await getChatbot({
        content: text,
        emotion,
      });

      navigate('/chat', { state: { answer: chatbotResponse.answer } });
    } catch (err) {
      console.error('다이어리 저장 또는 AI 응답 실패:', err);
      alert('다이어리 저장 또는 AI 응답 생성에 실패했습니다.');
    }
  };

  return (
    <Container>
      <Layout>
        <Header>
          <BackButton src={left} alt="back" onClick={() => navigate(-1)} />
          <PositiveButton onClick={handleSubmit} />
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
