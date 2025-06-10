import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Modal from '../components/Modal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  gap: 200px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 28px;
  margin-top: 150px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Description = styled.span`
  font-size: 28px;
  width: 300px;
  margin-top: 50px;
`;

const NextButton = styled(Button)`
  margin: auto;
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
`;

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nickname, setNickname] = useState('');
  const [hasNickname, setHasNickname] = useState(false);
  const [city, setCity] = useState('');

  const navigate = useNavigate();

  const handleConfirmNickname = () => {
    const prev = sessionStorage.getItem('signupUserData');
    const parsed = prev ? JSON.parse(prev) : {};
    const updated = { ...parsed, nickname };
    sessionStorage.setItem('signupUserData', JSON.stringify(updated));
    setHasNickname(true);
  };

  const handleConfirmCity = async () => {
    const prev = sessionStorage.getItem('signupUserData');
    const parsed = prev ? JSON.parse(prev) : {};
    const updated = { ...parsed, city };
    sessionStorage.setItem('signupUserData', JSON.stringify(updated));

    navigate('/signup/onboarding');
  };

  const renderStep = () => {
    if (!hasNickname) {
      return (
        <>
          <InputWrapper>
            <Title>어떻게 불러드리면 될까요?</Title>
            <Input
              placeholder="닉네임을 입력해주세요."
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </InputWrapper>
          <NextButton
            type="half"
            onClick={() => {
              setIsModalOpen(true);
              setHasNickname(true);
            }}
          >
            좋아!🥰
          </NextButton>
        </>
      );
    }

    if (hasNickname) {
      return (
        <>
          <InputWrapper>
            <Title>
              {nickname}님이 계신 곳의 <br />
              날씨에 따라 노래를 추천해드릴게요!
            </Title>
            <Input
              placeholder="도시를 입력해주세요."
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </InputWrapper>
          <NextButton type="half" onClick={handleConfirmCity}>
            완료
          </NextButton>
        </>
      );
    }

    return (
      <>
        <Description>
          일기를 쓰기 전<br />
          {nickname}님에 대해 알고싶어요.
          <br />
          <br />
          앞으로 나올 5가지의 질문에
          <br /> {nickname}님의 취향을 선택해주세요!
        </Description>
        <NextButton type="half" onClick={() => navigate('/onboarding')}>
          알겠어!
        </NextButton>
      </>
    );
  };

  return (
    <Container>
      {isModalOpen && (
        <Modal>
          <span>
            {nickname}님으로 불러드릴까요? <br />
            한번 설정한 닉네임은 <br />
            변경할 수 없어요.
          </span>
          <ButtonWrapper>
            <Button
              type="modal"
              color="#B1B1B1"
              onClick={() => setIsModalOpen(false)}
            >
              취소
            </Button>
            <Button
              type="modal"
              onClick={() => {
                setIsModalOpen(false);
                handleConfirmNickname();
              }}
            >
              확인
            </Button>
          </ButtonWrapper>
        </Modal>
      )}
      {renderStep()}
    </Container>
  );
};

export default Profile;
