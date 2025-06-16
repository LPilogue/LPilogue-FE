import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ResultRequest from '../components/ResultRequest';
import ResultCocktail from '../components/ResultCocktail';
import getDiaryDetail from '../api/diary/getDiaryDetail';
import home from '../assets/images/home.svg';

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  width: 390px;
  flex-direction: column;
  height: 100vh;
`;

const Card = styled.div`
  position: relative;
  width: 390px;
  height: 500px;
  margin-top: 50px;
  transform-style: preserve-3d;
  transition: transform 0.8s ease;
  transform: ${({ isTouched }) =>
    isTouched ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
`;

const CardFront = styled(CardFace)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardBack = styled(CardFace)`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
`;

const HomeIcon = styled.img`
  margin: 20px;
  margin-left: auto;
  width: 30px;
  cursor: pointer;
`;

const Description = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Result = () => {
  const [isTouched, setIsTouched] = useState(false);
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const diaryId = location.state?.diaryId;
  // const diaryId = 19;

  useEffect(() => {
    if (!diaryId) {
      alert('diaryId가 없습니다.');
      navigate('/');
      return;
    }

    const fetchDetail = async () => {
      try {
        const data = await getDiaryDetail(diaryId);
        setDetail(data);
      } catch (err) {
        console.error('다이어리 상세 조회 실패:', err);
        alert('다이어리 정보를 불러오지 못했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [diaryId, navigate]);

  if (loading) {
    return <Container>불러오는 중...</Container>;
  }

  if (!detail) {
    return <Container>다이어리 정보가 없습니다.</Container>;
  }
  console.log(detail);

  return (
    <Container>
      <Content>
        <HomeIcon src={home} alt="home" onClick={() => navigate('/')} />

        <Card onClick={() => setIsTouched(!isTouched)} isTouched={isTouched}>
          <CardFront>
            {/* ⬇️ 대표곡 정보 전달 */}
            <ResultRequest
              songName={detail.result.songName}
              artist={detail.result.artist}
            />
          </CardFront>

          <CardBack>
            {/* ⬇️ 칵테일 정보 전달 */}
            <ResultCocktail
              cocktailName={detail.result.cocktailName}
              cocktailImagePath={detail.result.cocktailImagePath}
            />
          </CardBack>
        </Card>

        <Description>화면을 터치해보세요!</Description>
      </Content>
    </Container>
  );
};

export default Result;
