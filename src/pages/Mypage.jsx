import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 390px;
  margin: 0 auto;
  padding: 20px;
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
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 5px;
  }

  p {
    margin: 10px;
  }
`;

const Mypage = () => {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1);

  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/detail'); // 모든 카드 클릭 시 "/detail" 페이지로 이동
  };

  return (
    <Container>
      <Title>
        {currentYear}년 {currentMonth}월
      </Title>
      <Subtitle>닉네임님이 기록한 노래들이에요.</Subtitle>

      <Navigation>
        <button
          onClick={() => setCurrentMonth((prev) => (prev > 1 ? prev - 1 : 12))}
        >
          이전 달
        </button>
        <button
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
        {Array.from({ length: daysInMonth }, (_, index) => (
          <Card key={index} onClick={handleCardClick}>
            <img
              src="https://via.placeholder.com/150"
              alt={`앨범 이미지 ${index + 1}`}
            />
            <p>
              {currentMonth}월 {index + 1}일
            </p>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Mypage;
