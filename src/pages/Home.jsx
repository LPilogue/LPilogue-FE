import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Styled Components
const Container = styled.div`
  max-width: 390px;
  width: 390px;
  margin: 0 auto;
  background-color: #f9f2df;
  user-select: none;
`;

const Layout = styled.div`
  display: flex;
  margin-top: 12px;
  flex-direction: column;
  gap: 180px;
`;

const ContentGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px; /* Greeting과 SubText 간격 */
`;

const Greeting = styled.span`
  font-weight: 400;
  font-size: 48px;
`;

const SubText = styled.span``;

const WriteButton = styled.button`
  background-color: #56b7c4;
  color: #fff;
  border: none;
  border-radius: 15px;
  margin-bottom: 47px;
  width: 178px;
  height: 55px;
  cursor: pointer;
  align-self: center;
`;

const UserIcon = styled.div`
  font-size: 29px;
  padding: 0px;
  margin: 0px 29px 0px 0px;
  align-self: flex-end;
  cursor: pointer;
`;

// 병합된 Home 컴포넌트
const Home = () => {
  const navigate = useNavigate();

  const handleWriteClick = () => {
    navigate('/write');
  };

  const handleUserIconClick = () => {
    navigate('/mypage');
  };

  return (
    <Container>
      <Layout>
        <UserIcon onClick={handleUserIconClick}>👤</UserIcon>
        <ContentGroup>
          <Greeting>{`만나서 반가워요!`}</Greeting>
          <SubText>오늘은 어떤 일기를 작성해볼까요?</SubText>
        </ContentGroup>
        <WriteButton onClick={handleWriteClick}>일기 쓰기</WriteButton>
      </Layout>
    </Container>
  );
};

export default Home;
