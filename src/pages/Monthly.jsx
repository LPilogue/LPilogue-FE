import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import getMonthlyDiary from '../api/diary/getMontlyDiary';
import RecapCard from '../components/RecapCard';
import { getMostEmotionMonthly } from '../api/diary/getMostEmotion';

const Container = styled.div`
  width: 390px;
  margin: 0 auto;
  padding-top: 20px;
  color: #333;
  min-height: 100vh;
`;

const Title = styled.div`
  font-size: 28px;
  margin: 0;
`;

const Subtitle = styled.div`
  margin-bottom: 15px;
  color: #555;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 10px;

  button {
    background: #56b7c4;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    color: white;
    cursor: pointer;

    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 20px;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    }
  }

  p {
    margin: 10px 0;
  }
`;

const Monthly = () => {
  const today = new Date();
  // eslint-disable-next-line no-unused-vars
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1);
  const [monthlyDiary, setMonthlyDiary] = useState([]);
  const [emotionData, setEmotionData] = useState(null);
  const navigate = useNavigate();

  const fetchDiaryData = async (year, month) => {
    try {
      const res = await getMonthlyDiary(year, month);
      setMonthlyDiary(res.result.diaryPreviewList);
    } catch (error) {
      console.error('월간 일기 불러오기 실패:', error);
    }
  };

  const fetchEmotionData = async (year, month) => {
    try {
      const res = await getMostEmotionMonthly(year, month);
      if (res.isSuccess) {
        setEmotionData(res.result);
      } else {
        console.warn('감정 조회 실패:', res.message);
      }
    } catch (error) {
      console.error('감정 불러오기 실패:', error);
    }
  };

  useEffect(() => {
    fetchDiaryData(currentYear, currentMonth);
    fetchEmotionData(currentYear, currentMonth);
  }, [currentYear, currentMonth]);

  return (
    <Container>
      <Title>
        {currentYear}년 {currentMonth}월
      </Title>

      <Navigation>
        <button
          type="button"
          onClick={() => setCurrentMonth((prev) => (prev > 1 ? prev - 1 : 12))}
        >
          이전 달
        </button>
        <button
          type="button"
          onClick={() => setCurrentMonth((prev) => (prev < 12 ? prev + 1 : 1))}
          disabled={
            currentYear === today.getFullYear() &&
            currentMonth >= today.getMonth() + 1
          }
        >
          다음 달
        </button>
      </Navigation>

      <RecapCard emotionData={emotionData} />
      <Subtitle>닉네임님이 기록한 노래들이에요.</Subtitle>

      <Grid>
        {monthlyDiary.map((entry) => {
          const entryDate = new Date(entry.createdAt);
          const formattedDate = `${entryDate.getMonth() + 1}월 ${entryDate.getDate()}일`;

          return (
            <Card
              key={entry.createdAt}
              onClick={() => navigate(`/diary/${entry.diaryId}`)}
            >
              <img src={entry.songImagePath} alt="노래 이미지" />
              <p>{formattedDate}</p>
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Monthly;
