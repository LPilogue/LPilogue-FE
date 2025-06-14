import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import getMainSong from '../api/song/getMainSong';

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
  const location = useLocation();
  const navigate = useNavigate();
  const diaryId = location.state?.diaryId;
  // const diaryId = 19;

  useEffect(() => {
    if (!diaryId) return;

    const fetchMainSong = async () => {
      try {
        const result = await getMainSong(diaryId);
        if (result && result.length > 0) {
          setSongData(result[0]);
        }
      } catch (err) {
        console.error('대표곡 불러오기 실패:', err);
      }
    };

    fetchMainSong();
  }, [diaryId]);

  const handleRetry = () => {
    navigate('/recommend');
  };

  if (!songData) {
    return <Container>대표곡 정보를 불러오는 중입니다...</Container>;
  }

  return (
    <Container>
      <SongImage src={songData.songImagePath} alt={songData.songName} />
      <Description>
        &lt;{songData.songName}&gt;
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
            navigate('/recommend/result', {
              state: { diaryId },
            });
          }}
        >
          좋아!🥰
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default RepresentativeConfirm;
