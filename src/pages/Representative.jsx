import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  min-height: 100vh;
`;

const SongImage = styled.img`
  width: 211px;
  height: 211px;
  object-fit: cover;
  margin-top: 100px;
`;

const Description = styled.div`
  font-size: 24px;
  color: #333;
  margin-top: 60px;
  margin-bottom: 60px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-family: 'Ownglyph';

  ${(props) =>
    props.variant === 'retry' &&
    `
    background-color: #fff;
    color: #56b7c4;
    &:hover {
      background-color: #D4D4D4;
    }
  `}

  ${(props) =>
    props.variant === 'confirm' &&
    `
    background-color: #56b7c4;
    color: white;
    &:hover {
      background-color: #2595A5;
    }
  `}
`;

const RepresentativeConfirm = () => {
  const [songData, setSongData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // 로컬스토리지에서 대표곡 데이터 불러오기
    const storedSong = localStorage.getItem('representativeSong');
    if (storedSong) {
      setSongData(JSON.parse(storedSong));
    }
  }, []);

  const handleRetry = () => {
    navigate('/recommend'); // 이전 추천 페이지로 돌아가기
  };

  if (!songData) {
    return <Container>대표곡 정보가 없습니다.</Container>;
  }

  return (
    <Container>
      <SongImage src={songData.filePath} alt={songData.name} />
      <Description>
        &lt;{songData.name}&gt;
        <br />
        오늘의 대표곡으로 설정할까요?
      </Description>
      <ButtonContainer>
        <Button variant="retry" onClick={handleRetry}>
          다시 고를래
        </Button>
        <Button
          variant="confirm"
          onClick={() => {
            navigate('/recommend/result');
          }}
        >
          좋아!🥰
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default RepresentativeConfirm;
