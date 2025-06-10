import { useEffect, useState } from 'react';
import styled from 'styled-components';
import RecapCard from '../components/RecapCard';
import { getMostEmotionYearly } from '../api/user/getMostEmotion';
import getMostArtist from '../api/user/getMostArtist';
import getMostSong from '../api/user/getMostSong';
import LPilogue from '../assets/images/Logo_LP.svg?react';

const Container = styled.div`
  width: 390px;
  margin: 0 auto;
  padding: 40px 30px 30px 30px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
`;

const StyledCard = styled.div`
  background: #fbf7ec;
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CardTitle = styled.div`
  font-size: 20px;
`;

const CardSubtitle = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const CardAlbum = styled.div`
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 15px;
  }
`;

const Recap = () => {
  const [emotionData, setEmotionData] = useState(null);
  const [mostArtist, setMostArtist] = useState(null);
  const [mostSong, setMostSong] = useState(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const fetchEmotion = async () => {
      try {
        const res = await getMostEmotionYearly(currentYear);
        if (res.isSuccess) {
          setEmotionData(res.result);
        }
      } catch (err) {
        console.error('감정 조회 실패:', err);
      }
    };

    const fetchArtist = async () => {
      try {
        const res = await getMostArtist(currentYear);
        if (res.isSuccess) {
          setMostArtist(res.result);
        }
      } catch (err) {
        console.error('아티스트 조회 실패:', err);
      }
    };

    const fetchSong = async () => {
      try {
        const res = await getMostSong(currentYear);
        if (res.isSuccess) {
          setMostSong(res.result);
        }
      } catch (err) {
        console.error('노래 조회 실패:', err);
      }
    };

    fetchEmotion();
    fetchArtist();
    fetchSong();
  }, [currentYear]);

  return (
    <Container>
      <Title>Recap of {currentYear}</Title>

      <RecapCard emotionData={emotionData} />

      <StyledCard>
        <CardContent>
          <CardTitle>가장 많이 기록한 아티스트</CardTitle>
          <CardSubtitle>
            {mostArtist
              ? `${mostArtist.artist} ${mostArtist.count}회`
              : '불러오는 중...'}
          </CardSubtitle>
        </CardContent>
        <LPilogue height="100px" width="100px" />
      </StyledCard>

      <StyledCard>
        <CardContent>
          <CardTitle>가장 많이 기록한 노래</CardTitle>
          <CardSubtitle>
            {mostSong
              ? `${mostSong.title} ${mostSong.count}회`
              : '불러오는 중...'}
          </CardSubtitle>
        </CardContent>
        <CardAlbum>
          {mostSong?.imagePath ? (
            <img src={mostSong.imagePath} alt={mostSong.title} />
          ) : (
            <LPilogue /> // 이미지 없을 때 대체
          )}
        </CardAlbum>
      </StyledCard>
    </Container>
  );
};

export default Recap;
