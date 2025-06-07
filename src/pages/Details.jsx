import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import getDiaryDetail from '../api/diary/getDiaryDetail';
import deleteDiary from '../api/diary/deleteDiary';

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

const BackButton = styled.h2`
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
  const navigate = useNavigate();
  const { diaryId } = useParams();
  const [diary, setDiary] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleBack = () => {
    navigate(-1);
  };

  const handleDelete = async () => {
    if (!window.confirm('정말 이 일기를 삭제하시겠습니까?')) return;
    try {
      const res = await deleteDiary(diaryId);
      if (res.isSuccess) {
        alert('일기가 삭제되었습니다.');
        navigate('/mypage/monthly');
      } else {
        alert(`삭제 실패: ${res.message}`);
      }
    } catch (err) {
      alert('삭제 중 오류가 발생했습니다.');
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchDiary = async () => {
      try {
        const response = await getDiaryDetail(diaryId);
        if (response.isSuccess) {
          setDiary(response.result);
        } else {
          console.warn('일기 조회 실패:', response.message);
        }
      } catch (error) {
        console.error('에러:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDiary();
  }, [diaryId]);

  if (loading) {
    return <Container>불러오는 중...</Container>;
  }

  if (!diary) {
    return <Container>해당 날짜의 일기를 찾을 수 없습니다.</Container>;
  }

  return (
    <Container>
      <Header>
        <BackButton onClick={handleBack}>{`<`}</BackButton>
        <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
      </Header>

      <AlbumImage>
        <img src={diary.songImagePath} alt={diary.songName} />
      </AlbumImage>

      <AlbumText>
        {diary.songName}
        <span>{diary.artist}</span>
      </AlbumText>

      <Content>{diary.content}</Content>
    </Container>
  );
};

export default DetailPage;
