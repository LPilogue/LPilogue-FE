import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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

  const diary = {
    createdAt: '2025-06-07T12:37:46.036Z',
    content: '오늘은 기분이 좋아서 산책을 나갔다. 바람이 참 기분 좋았다.',
    songName: '한 페이지가 될 수 있게',
    songURI: 'https://open.spotify.com/track/mockURI',
    artist: 'DAY6',
    songImagePath:
      'https://image.bugsm.co.kr/album/images/200/202657/20265759.jpg?version=20211119004415',
    cocktailName: 'Mojito',
    cocktailImagePath: 'https://example.com/cocktail-image.jpg',
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleDelete = () => {
    // TODO: 일기 삭제 api 요청하도록 수정
    alert('일기가 삭제되었습니다.');
  };

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
