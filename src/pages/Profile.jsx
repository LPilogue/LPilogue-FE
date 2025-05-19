import styled from 'styled-components';
import { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Modal from '../components/Modal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Description = styled.span`
  font-size: 28px;
  width: 300px;
`;

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nickname, setNickname] = useState('');
  const [hasNickname, setHasNickname] = useState(false);

  return (
    <Container>
      {isModalOpen && (
        <Modal>
          <span>
            닉네임으로 불러드릴까요? <br />
            한번 설정한 닉네임은 <br />
            변경할 수 없어요.
          </span>
          <ButtonWrapper>
            <Button size="modal" color="#B1B1B1">
              취소
            </Button>
            <Button
              size="modal"
              onClick={() => {
                setIsModalOpen(false);
                setHasNickname(true);
              }}
            >
              확인
            </Button>
          </ButtonWrapper>
        </Modal>
      )}
      {!hasNickname ? (
        <>
          <InputWrapper>
            <Title>어떻게 불러드리면 될까요?</Title>
            <Input
              placeholder="닉네임을 입력해주세요."
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </InputWrapper>
          <Button size="half" onClick={() => setIsModalOpen(true)}>
            좋아!🥰
          </Button>
        </>
      ) : (
        <>
          <Description>
            일기를 쓰기 전<br />
            닉네임님에 대해 알고싶어요.
            <br />
            앞으로 나올 5가지의 질문에
            <br /> 닉네임님의 취향을 선택해주세요!
          </Description>
          <Button size="half">알겠어!</Button>
        </>
      )}
    </Container>
  );
};

export default Profile;
