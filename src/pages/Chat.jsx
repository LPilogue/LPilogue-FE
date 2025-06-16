import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import LPilogue from '../assets/images/Logo_LP.svg';
// import chat from '../mockData/chatbot';

const ChatContainer = styled.div`
  max-width: 390px;
  width: 390px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  position: relative;
`;

const ChatWrapper = styled.div`
  margin-top: 34px;
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
`;

const ChatBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 275px;
  padding: 0px 20px;
  background: #fff;
  border-radius: 0 25px 25px 25px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
`;

const ChatTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ChatContent = styled.div`
  margin: 12px;
  line-height: 1.5;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  max-width: 100%;
`;

const ResponseBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 251px;
  height: 55px;
  background: #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  border-radius: 13px;
  font-size: 24px;
  color: #56b7c4;
  border: none;
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  &:hover {
    background-color: #56b7c4;
    color: #fff;
  }
`;

const Chat = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const fullText = location.state?.answer || '대화가 없습니다.';

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length - 1) {
        setDisplayedText((prev) => prev + fullText[index]);
        index += 1;
      } else {
        clearInterval(interval);
        setIsTypingDone(true);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <ChatContainer>
      <ChatWrapper>
        <ProfileImage src={LPilogue} alt="프로필 이미지" />
        <ChatBoxWrapper>
          <ChatTitle>LPilogue</ChatTitle>
          <ChatBox>
            <ChatContent>{displayedText}</ChatContent>
          </ChatBox>
        </ChatBoxWrapper>
      </ChatWrapper>

      {isTypingDone && (
        <ResponseBox
          onClick={() => {
            navigate('/recommend');
          }}
        >
          내 얘기 들어줘서 고마워! 😊
        </ResponseBox>
      )}
    </ChatContainer>
  );
};

export default Chat;
