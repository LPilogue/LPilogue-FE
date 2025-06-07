import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import sad from '../assets/images/sad.svg';
import getMonthlyDiary from '../api/diary/getMontlyDiary';
// import joy from '../assets/images/joy.svg'
// import complaint from '../assets/images/complaint.svg'
// import angry from '../assets/images/angry.svg'
// import confusion from '../assets/images/confusion.svg'

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

const RecapCard = styled.div`
  background: #fbf7ec;
  border-radius: 20px;
  padding: 0px 25px;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CardTitle = styled.div`
  font-size: 20px;
  margin: 0;
`;

const CardSubtitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`;

const CardIcon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  flex-shrink: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
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

  const navigate = useNavigate();

  const fetchDiaryData = async (year, month) => {
    try {
      const res = await getMonthlyDiary(year, month);
      setMonthlyDiary(res.result.diaryPreviewList);
    } catch (error) {
      console.error('월간 일기 불러오기 실패:', error);
    }
  };

  useEffect(() => {
    fetchDiaryData(currentYear, currentMonth);
  }, [currentYear, currentMonth]);

  const handleCardClick = (entry) => {
    const entryDate = new Date(entry.createdAt);
    const formattedDate = `${entryDate.getFullYear()}-${String(
      entryDate.getMonth() + 1,
    ).padStart(2, '0')}-${String(entryDate.getDate()).padStart(2, '0')}`;

    navigate(`/diary/${formattedDate}`);
  };

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

      <RecapCard>
        <CardContent>
          <CardTitle>가장 많이 느낀 감정</CardTitle>
          <CardSubtitle>울음 5회</CardSubtitle>
        </CardContent>
        <CardIcon>
          <img src={sad} alt="sad" />
        </CardIcon>
      </RecapCard>

      <Subtitle>닉네임님이 기록한 노래들이에요.</Subtitle>

      <Grid>
        {monthlyDiary.map((entry) => {
          const entryDate = new Date(entry.createdAt);
          const formattedDate = `${entryDate.getMonth() + 1}월 ${entryDate.getDate()}일`;

          return (
            <Card key={entry.createdAt} onClick={() => handleCardClick(entry)}>
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
