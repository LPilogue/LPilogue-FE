import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import sound from '../assets/images/sound.svg';
import left from '../assets/images/leftButton.svg';
import PositiveButton from '../components/PositiveButton';

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
        <PositiveButton
          onClick={() => {
            navigate('/write');
          }}
        />
      </Header>
      <SoundIcon src={sound} alt="sound" />
      <div>오늘의 이야기를 들려주세요</div>
    </StyledVoice>
  );
};

export default Voice;
