import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import leftButton from '../assets/images/leftButton.svg';
import rightButton from '../assets/images/rightButton.svg';
import recommend from '../mockData/recommend';

const Container = styled.div`
  display: flex;
  width: 370px;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const CompleteButton = styled.button`
  background-color: #56b7c4;
  color: white;
  height: 35px;
  width: 55px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: 27px;
  font-size: 20px;
  font-family: 'Ownglyph';
`;

const Text = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;

const SubText = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
  color: #bb3939;
`;

const SongContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
  }
`;

const AlbumImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-top: 30px;
`;

const SongInfo = styled.div`
  text-align: center;
`;

const SongName = styled.h2`
  font-size: 32px;
  font-weight: 400;
`;

const ArtistName = styled.h3`
  font-size: 20px;
  font-weight: 400;
  margin: 5px 0;
`;

const RepresentativeButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  cursor: pointer;

  span {
    font-size: 18px;
  }
`;

const RadioButton = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid #d9cdbd;
  background-color: ${(props) =>
    props.isSelected ? '#d9cdbd' : 'transparent'};
`;

const Recommend = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSong, setSelectedSong] = useState(null); // 대표곡 정보

  const navigate = useNavigate();

  const { songs } = recommend || {};

  // 로컬스토리지에서 데이터 불러오기
  useEffect(() => {
    const storedSong = localStorage.getItem('representativeSong');
    if (storedSong) {
      setSelectedSong(JSON.parse(storedSong)); // JSON 데이터 복원
    }
  }, []);

  if (!songs || songs.length === 0) {
    return <Container>추천할 노래 데이터가 없습니다.</Container>;
  }

  const currentSong = songs[currentIndex];

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1,
    );
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === songs.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handleRepresentativeSelect = () => {
    setSelectedSong(currentSong); // 현재 곡을 대표곡으로 설정
    localStorage.setItem(
      'representativeSong',
      JSON.stringify(currentSong), // JSON 형식으로 저장
    );
  };

  const emotion = '행복';
  const nickname = '김가천';

  return (
    <Container>
      <CompleteButton
        type="button"
        onClick={() => {
          navigate('/recommend/confirm');
        }}
      >
        완료
      </CompleteButton>
      <Text>
        오늘 {emotion}을 느낀 {nickname}님을 위한
        <br />
        노래를 추천해줄게요.
      </Text>
      <SubText>🎧 앨범아트를 클릭하여 노래를 재생할 수 있어요</SubText>

      <SongContainer>
        <ArrowButton onClick={handleLeftClick}>
          <img src={leftButton} alt="Left button" />
        </ArrowButton>
        <AlbumImage src={currentSong.filePath} alt={currentSong.name} />
        <ArrowButton onClick={handleRightClick}>
          <img src={rightButton} alt="Right button" />
        </ArrowButton>
      </SongContainer>

      <SongInfo>
        <SongName>{currentSong.name}</SongName>
        <ArtistName>{currentSong.artist}</ArtistName>
      </SongInfo>

      {/* 대표곡 선택 버튼 */}
      <RepresentativeButton
        onClick={handleRepresentativeSelect}
        isSelected={selectedSong && selectedSong.name === currentSong.name}
      >
        <RadioButton
          isSelected={selectedSong && selectedSong.name === currentSong.name}
        />
        <span>대표곡</span>
      </RepresentativeButton>
    </Container>
  );
};

export default Recommend;
