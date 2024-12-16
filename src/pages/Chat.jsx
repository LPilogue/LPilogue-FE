import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// 채팅 컨테이너
const ChatContainer = styled.div`
  max-width: 390px;
  width: 390px;
  height: 100%; /* 기본 높이 */
  min-height: 719px; /* 최소 높이를 852px로 고정 */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬 */
  padding: 20px;
  position: relative;
`;

// 채팅 내용과 프로필을 감싸는 컨테이너
const ChatWrapper = styled.div`
  margin-top: 34px;
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

// 프로필 이미지
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

// 채팅 박스
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

// 채팅 제목
const ChatTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

// 채팅 내용
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
  margin-top: auto;
  margin-bottom: 169px;
  background: #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  border-radius: 13px;
  font-size: 24px;
  color: #56b7c4;
  align-self: center;
  position: relative;
  border: none;

  &:hover {
    background-color: #56b7c4;
    color: #fff;
  }
`;

// 메인 컴포넌트
const Chat = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/'); // 노래 추천 페이지 경로로 이동
  };

  return (
    <ChatContainer>
      <ChatWrapper>
        {/* 프로필 이미지 추가 */}
        <ProfileImage
          src="https://via.placeholder.com/40"
          alt="프로필 이미지"
        />
        <ChatBoxWrapper>
          <ChatTitle>챗봇 이름</ChatTitle>
          <ChatBox>
            <ChatContent>
              오, 꽤 알찬 하루였네! 아침에 바람 부는 거 느끼면서 코트 꺼내 입는
              거, 뭔가 계절 바뀌는 느낌 나서 괜히 기분 좋아지지 않아? 버스 놓칠
              뻔한 거 진짜 스릴 있었겠다 ㅋㅋ 프로젝트 시작은 좀 부담스러울 수도
              있겠지만 팀원들이랑 같이 하면 확실히 덜 스트레스 받을 거야. 그리고
              퇴근 후 넷플릭스+간식 콤보는 진짜 힐링 그 자체지~ 평범하지만
              나쁘지 않은 하루라니 완전 성공적인 하루인 듯! 😊
            </ChatContent>
          </ChatBox>
        </ChatBoxWrapper>
      </ChatWrapper>

      <ResponseBox onClick={handleButtonClick}>
        내 얘기 들어줘서 고마워! 😊
      </ResponseBox>
    </ChatContainer>
  );
};

export default Chat;
