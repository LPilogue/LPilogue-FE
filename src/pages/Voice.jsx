import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import sound from '../assets/images/sound.svg';
import left from '../assets/images/leftButton.svg';

const StyledVoice = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  width: 350px;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const CompleteButton = styled.button`
  background-color: #56b7c4;
  color: white;
  height: 35px;
  width: 55px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  font-family: 'Ownglyph';
`;

const SoundIcon = styled.img`
  margin-top: 100px;
  margin-bottom: 50px;
`;

const BackButton = styled.img`
  cursor: pointer;
`;

const Voice = () => {
  const navigate = useNavigate();
  return (
    <StyledVoice>
      <Header>
        <BackButton src={left} alt="back" onClick={() => navigate(-1)} />
        <CompleteButton
          type="button"
          onClick={() => {
            navigate('/write');
          }}
        >
          완료
        </CompleteButton>
      </Header>
      <SoundIcon src={sound} alt="sound" />
      <div>오늘의 이야기를 들려주세요</div>
    </StyledVoice>
  );
};

export default Voice;
