import { useEffect, useState } from 'react';
import styled from 'styled-components';
import RecapCard from '../components/RecapCard';
import { getMostEmotionYearly } from '../api/diary/getMostEmotion';

const Container = styled.div`
  width: 390px;
  margin: 0 auto;
  padding: 40px 30px 30px 30px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
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
  margin-bottom: 20px;
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

const CardIcon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const Recap = () => {
  const [emotionData, setEmotionData] = useState(null);
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

    fetchEmotion();
  }, [currentYear]);

  return (
    <Container>
      <Title>Recap of {currentYear}</Title>

      <RecapCard emotionData={emotionData} />

      <StyledCard>
        <CardContent>
          <CardTitle>가장 많이 기록한 아티스트</CardTitle>
          <CardSubtitle>DAY6 5회</CardSubtitle>
        </CardContent>
        <CardIcon>
          <img
            src="https://via.placeholder.com/60x60/4285f4/ffffff?text=DAY6"
            alt="DAY6"
          />
        </CardIcon>
      </StyledCard>

      <StyledCard>
        <CardContent>
          <CardTitle>가장 많이 기록한 노래</CardTitle>
          <CardSubtitle>Zombie 6회</CardSubtitle>
        </CardContent>
        <CardIcon>
          <img
            src="https://via.placeholder.com/60x60/333333/ffffff?text=♪"
            alt="Zombie"
          />
        </CardIcon>
      </StyledCard>
    </Container>
  );
};

export default Recap;
