import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import monthlyDiary from '../mockData/diary';

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
  background: white;
  border-radius: 10px;
  padding: 10px 10px 0 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 5px;
  }

  p {
    margin: 10px 0;
  }
`;

const Mypage = () => {
  const today = new Date();
  // eslint-disable-next-line no-unused-vars
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1);

  const navigate = useNavigate();

  // 현재 월에 해당하는 일기 데이터 필터링
  const filteredDiary = monthlyDiary.filter((entry) => {
    const entryDate = new Date(entry.createdAt);
    return (
      entryDate.getFullYear() === currentYear &&
      entryDate.getMonth() + 1 === currentMonth
    );
  });

  const handleCardClick = (entry) => {
    const entryDate = new Date(entry.createdAt);
    const formattedDate = `${entryDate.getFullYear()}-${String(
      entryDate.getMonth() + 1,
    ).padStart(2, '0')}-${String(entryDate.getDate()).padStart(2, '0')}`;

    navigate(`/diary/${formattedDate}`); // 동적 라우트로 이동
  };

  return (
    <Container>
      <Title>
        {currentYear}년 {currentMonth}월
      </Title>
      <Subtitle>닉네임님이 기록한 노래들이에요.</Subtitle>

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

      <Grid>
        {filteredDiary.map((diaryEntry) => {
          const entryDate = new Date(diaryEntry.createdAt);
          const formattedDate = `${entryDate.getMonth() + 1}월 ${entryDate.getDate()}일`;

          return (
            <Card onClick={() => handleCardClick(diaryEntry)}>
              <img src={diaryEntry.songFilePath} alt={diaryEntry.songName} />
              <p>{formattedDate}</p>
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Mypage;
