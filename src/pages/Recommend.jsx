import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import leftButton from '../assets/images/leftButton.svg';
import rightButton from '../assets/images/rightButton.svg';
import recommend from '../mockData/recommend';
import PositiveButton from '../components/PositiveButton';

const Container = styled.div`
  display: flex;
  width: 390px;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 20px;
`;

const Text = styled.div`
  font-size: 24px;
  margin: 20px 0;
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
  cursor: pointer;
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
  const [selectedSong, setSelectedSong] = useState(null);
  const iframeRef = useRef(null);
  const { songs } = recommend || {};
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('representativeSong');
  }, []);

  if (!songs || songs.length === 0) {
    return <Container>추천할 노래 데이터가 없습니다.</Container>;
  }

  const currentSong = songs[currentIndex];

  const stopSong = () => {
    if (iframeRef.current) {
      document.body.removeChild(iframeRef.current);
      iframeRef.current = null;
    }
  };

  const handleLeftClick = () => {
    stopSong();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1,
    );
  };

  const handleRightClick = () => {
    stopSong();
    setCurrentIndex((prevIndex) =>
      prevIndex === songs.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePlaySong = () => {
    const videoURL = songs[currentIndex].songURL;
    const videoID = new URL(videoURL).searchParams.get('v');
    const embedURL = `https://www.youtube.com/embed/${videoID}?autoplay=1`;

    if (iframeRef.current) {
      stopSong(); // 이미 재생 중이면 종료
    } else {
      const iframe = document.createElement('iframe');
      iframe.src = embedURL;
      iframe.style.display = 'none';
      iframe.allow = 'autoplay';
      document.body.appendChild(iframe);
      iframeRef.current = iframe;
    }
  };

  const handleRepresentativeSelect = () => {
    setSelectedSong(currentSong);
    localStorage.setItem('representativeSong', JSON.stringify(currentSong));
  };

  return (
    <Container>
      <Header>
        <PositiveButton
          onClick={() => {
            const storedSong = localStorage.getItem('representativeSong');
            if (storedSong) {
              navigate('/recommend/confirm');
            } else {
              alert('대표곡을 선택해주세요.');
            }
          }}
        />
      </Header>
      <Text>
        오늘 행복을 느낀 김가천님을 위한
        <br />
        노래를 추천해줄게요.
      </Text>
      <SubText>
        🎧 앨범아트를 클릭하여 노래를 재생하거나 종료할 수 있어요
      </SubText>

      <SongContainer>
        <ArrowButton onClick={handleLeftClick}>
          <img src={leftButton} alt="Left button" />
        </ArrowButton>
        <AlbumImage
          src={currentSong.filePath}
          alt={currentSong.name}
          onClick={handlePlaySong}
        />
        <ArrowButton onClick={handleRightClick}>
          <img src={rightButton} alt="Right button" />
        </ArrowButton>
      </SongContainer>

      <SongInfo>
        <SongName>{currentSong.name}</SongName>
        <ArtistName>{currentSong.artist}</ArtistName>
      </SongInfo>

      <RepresentativeButton onClick={handleRepresentativeSelect}>
        <RadioButton
          isSelected={selectedSong && selectedSong.name === currentSong.name}
        />
        <span>대표곡</span>
      </RepresentativeButton>
    </Container>
  );
};

export default Recommend;
