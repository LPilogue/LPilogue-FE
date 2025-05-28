import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  max-width: 390px;
  width: 390px;
  margin: 0 auto;
  min-height: 100vh;
  user-select: none;
  position: relative;
  padding: 20px 30px;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 60px;
`;

const UserIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainContent = styled.div`
  text-align: center;
  margin-top: 114px;
`;

const WeatherInfo = styled.div`
  font-size: 24px;
  margin-bottom: 30px;
`;

const SuggestionText = styled.div`
  font-size: 24px;
  margin-bottom: 15px;
`;

const SongRecommendation = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const RecommendationMessage = styled.div`
  font-size: 24px;
`;

const PopularSection = styled.div`
  margin-top: 160px;
`;

const PopularTitle = styled.div`
  font-size: 24px;
  text-align: center;
  margin-bottom: 30px;
  line-height: 1.4;
`;

const SongList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SongItem = styled.div`
  background: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;

const SongNumber = styled.div`
  font-weight: bold;
  color: #333;
`;

const SongInfo = styled.div`
  color: #333;
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 40%;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #56b7c4;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  z-index: 100;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const Home = () => {
  const navigate = useNavigate();

  // 임시 데이터 - 실제로는 props나 API에서 받아올 데이터
  const weatherInfo = '비가 와요.';
  const recommendedSong = {
    artist: '아티스트명',
    title: '곡 제목',
  };

  const popularSongs = [
    { number: 1, artist: '아티스트명', title: '곡제목' },
    { number: 2, artist: '아티스트명', title: '곡제목' },
    { number: 3, artist: '아티스트명', title: '곡제목' },
    { number: 4, artist: '아티스트명', title: '곡제목' },
    { number: 5, artist: '아티스트명', title: '곡제목' },
  ];

  const handleWriteClick = () => {
    navigate('/onboarding/today');
  };

  const handleUserIconClick = () => {
    navigate('/mypage');
  };

  return (
    <Container>
      <Header>
        <UserIcon onClick={handleUserIconClick}>👤</UserIcon>
      </Header>

      <MainContent>
        <WeatherInfo>오늘은 ({weatherInfo})</WeatherInfo>
        <SuggestionText>이런 날엔</SuggestionText>
        <SongRecommendation>
          {`{${recommendedSong.artist}} - {${recommendedSong.title}}`}
        </SongRecommendation>
        <RecommendationMessage>음 추천드렸어요!😊</RecommendationMessage>
      </MainContent>

      <PopularSection>
        <PopularTitle>
          오늘 LP/플로그 유저들이
          <br />
          많이 기록한 노래예요.
        </PopularTitle>

        <SongList>
          {popularSongs.map((song) => (
            <SongItem key={song.number}>
              <SongNumber>{song.number}.</SongNumber>
              <SongInfo>{`{${song.artist}} - {${song.title}}`}</SongInfo>
            </SongItem>
          ))}
        </SongList>
      </PopularSection>

      <FloatingButton onClick={handleWriteClick}>✏️</FloatingButton>
    </Container>
  );
};

export default Home;
