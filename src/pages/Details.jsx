import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 390px;
  width: 390px;
  margin: 0 auto;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: none;
    cursor: pointer;
  }
`;

const Title = styled.h2`
  text-align: left;
`;

const AlbumImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;

  img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

const AlbumText = styled.div`
  font-weight: bold;
  text-align: center;
  margin-top: 28px;

  span {
    font-weight: normal;
    font-size: 14px;
    display: block;
    margin-top: 5px;
  }
`;

const Content = styled.div`
  margin: 20px 29px;
  line-height: 1.5;
  white-space: pre-wrap; /* 줄바꿈 유지 */
`;

const DeleteButton = styled.button`
  background-color: #c0392b;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  float: right;
`;

const DetailPage = () => {
  const navigate = useNavigate('/mypage');

  const handleBack = () => {
    navigate(-1); // 뒤로 가기
  };

  const handleDelete = () => {
    alert('일기가 삭제되었습니다.'); // 삭제 동작 (실제 삭제 로직 추가 필요)
  };

  return (
    <Container>
      {/* 헤더 */}
      <Header>
        {/* 타이틀 */}
        <Title onClick={handleBack}>{`<`} 2024년 12월 1일</Title>
        <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
      </Header>

      {/* 앨범 이미지 */}
      <AlbumImage>
        <img src="https://via.placeholder.com/150" alt="앨범 이미지" />
      </AlbumImage>

      {/* 앨범 제목 */}
      <AlbumText>
        한 페이지가 될 수 있게
        <span>데이식스 (DAY6)</span>
      </AlbumText>

      {/* 일기 내용 */}
      <Content>
        {`일기 내용을 볼 수 있어요
일기니까 좀 손글씨 같은 폰트를 써볼까요?

오늘은 날씨가 좋았다
졸업작품을 만들어야 한다 너무 어렵다
그냥 졸업시켜주세요`}
      </Content>
    </Container>
  );
};

export default DetailPage;
