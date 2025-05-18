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

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
            <Button size="modal">확인</Button>
          </ButtonWrapper>
        </Modal>
      )}
      <InputWrapper>
        <Title>어떻게 불러드리면 될까요?</Title>
        <Input placeholder="닉네임을 입력해주세요." />
      </InputWrapper>
      <Button size="half" onClick={() => setIsModalOpen(true)}>
        좋아!🥰
      </Button>
    </Container>
  );
};

export default Profile;
