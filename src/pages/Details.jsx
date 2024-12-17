import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import diary from '../mockData/diary';

const Container = styled.div`
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
    font-size: 20px;
  }
`;

const Title = styled.h2`
  text-align: left;
  font-weight: 400;
  font-size: 30px;
  cursor: pointer;
`;

const AlbumImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;

  img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

const AlbumText = styled.div`
  text-align: center;
  margin-top: 28px;

  span {
    font-size: 14px;
    display: block;
    margin-top: 5px;
  }
`;

const Content = styled.div`
  margin: 20px 29px;
  line-height: 1.5;
  white-space: pre-wrap;
`;

const DeleteButton = styled.button`
  background-color: #c0392b;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
`;

const DetailPage = () => {
  const { diaryDate } = useParams();
  const navigate = useNavigate();

  // 해당 날짜의 일기 데이터 찾기
  const selectedDiary = diary.find((entry) => {
    const entryDate = new Date(entry.createdAt);
    const formattedDate = `${entryDate.getFullYear()}-${String(
      entryDate.getMonth() + 1,
    ).padStart(2, '0')}-${String(entryDate.getDate()).padStart(2, '0')}`;
    return formattedDate === diaryDate;
  });

  const handleBack = () => {
    navigate(-1);
  };

  const handleDelete = () => {
    alert('일기가 삭제되었습니다.'); // 삭제 동작 (실제 삭제 로직 추가 필요)
  };

  if (!selectedDiary) {
    return <Container>해당 날짜의 일기를 찾을 수 없습니다.</Container>;
  }

  return (
    <Container>
      <Header>
        <Title onClick={handleBack}>
          {`<`} {diaryDate}
        </Title>
        <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
      </Header>

      <AlbumImage>
        <img src={selectedDiary.songFilePath} alt={selectedDiary.songName} />
      </AlbumImage>

      {/* 앨범 제목 */}
      <AlbumText>
        {selectedDiary.songName}
        <span>{selectedDiary.artist}</span>
      </AlbumText>

      {/* 일기 내용 */}
      <Content>{selectedDiary.content}</Content>
    </Container>
  );
};

export default DetailPage;
