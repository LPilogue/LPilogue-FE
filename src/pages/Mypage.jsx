import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LP from '../assets/images/Logo_LP.svg';

const Container = styled.div`
  width: 390px;
  margin: 0 auto;
  padding: 40px 30px 30px 30px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  color: #333;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 30px;
`;

const MenuButton = styled.button`
  background: white;
  border: none;
  border-radius: 15px;
  padding: 15px 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  color: #333;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  height: fit-content;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

const RecapButton = styled.button`
  background: #fbf7ec;
  border: none;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }
`;

const RecapContent = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const RecapLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const ArrowIcon = styled.span`
  font-size: 18px;
  color: #666;
`;

const BottomSection = styled.div`
  padding-top: 20px;
  flex-shrink: 0;
`;

const SubText = styled.p`
  font-size: 16px;
  margin-top: 4px;
  maring-left: 35px;
  cursor: pointer;
`;

const Mypage = () => {
  const navigate = useNavigate();
  const nickname = sessionStorage.getItem('nickname');

  const handleDiaryClick = () => {
    navigate('/mypage/monthly'); // 기존 Mypage 컴포넌트로 이동
  };

  const handleProfileClick = () => {
    navigate('/mypage/profile'); // 기존 Mypage 컴포넌트로 이동
  };

  const recapClick = () => {
    navigate('/mypage/recap'); // 기존 Mypage 컴포넌트로 이동
  };

  return (
    <Container>
      <Title>{nickname}님</Title>

      <ButtonGrid>
        <MenuButton onClick={handleDiaryClick}>일기 보기</MenuButton>
        <MenuButton onClick={handleProfileClick}>프로필 수정</MenuButton>
      </ButtonGrid>

      <RecapButton onClick={recapClick}>
        <RecapContent>
          <RecapLogo src={LP} alt="LP Logo" />
          <span>Recap of {new Date().getFullYear()}</span>
        </RecapContent>
        <ArrowIcon>›</ArrowIcon>
      </RecapButton>

      <BottomSection>
        <SubText
          onClick={() => {
            localStorage.removeItem('accessToken');
            navigate('/');
          }}
        >
          로그아웃
        </SubText>
        <SubText>회원탈퇴</SubText>
      </BottomSection>
    </Container>
  );
};

export default Mypage;
