/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import leftButton from '../assets/images/leftButton.svg';
import rightButton from '../assets/images/rightButton.svg';
import PositiveButton from '../components/PositiveButton';
import setMainSong from '../api/song/setMainSong';
import Unlike from '../assets/images/unlike.svg?react';
import Like from '../assets/images/like.svg?react';
import setLikeSong from '../api/song/setLikeSong';
import getRecommend from '../api/song/getRecomend';
import getDiaryEmotion from '../api/diary/getDiaryEmotion';
import emotionMap from '../constants/emotion';

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

const Align = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const Recommend = () => {
  const [songs, setSongs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSong, setSelectedSong] = useState(null);
  const [likeStates, setLikeStates] = useState({});
  const [emotionLabel, setEmotionLabel] = useState('');
  const iframeRef = useRef(null);
  const navigate = useNavigate();
  const nickname = sessionStorage.getItem('nickname');
  // TODO: api 완성 후 수정 필요
  // const { diaryId } = useParams();
  const diaryId = 19;

  useEffect(() => {
    const fetchEmotion = async () => {
      try {
        const emotionCode = await getDiaryEmotion(diaryId);
        const label = emotionMap[emotionCode]?.label || '알 수 없음';
        setEmotionLabel(label);
      } catch (e) {
        console.error('감정 조회 실패:', e);
        setEmotionLabel('오류');
      }
    };

    fetchEmotion();
  }, [diaryId]);

  useEffect(() => {
    localStorage.removeItem('representativeSong');

    const fetchSongs = async () => {
      try {
        const result = await getRecommend(diaryId);
        setSongs(result);
      } catch (error) {
        console.error('노래 불러오기 실패:', error);
      }
    };

    fetchSongs();
  }, [diaryId]);

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
    const videoURL = currentSong.songURI;
    const videoID = new URL(videoURL).searchParams.get('v');
    const embedURL = `https://www.youtube.com/embed/${videoID}?autoplay=1`;

    if (iframeRef.current) {
      stopSong();
    } else {
      const iframe = document.createElement('iframe');
      iframe.src = embedURL;
      iframe.style.display = 'none';
      iframe.allow = 'autoplay';
      document.body.appendChild(iframe);
      iframeRef.current = iframe;
    }
  };

  const handleRepresentativeSelect = async () => {
    try {
      await setMainSong(currentSong.songId);
      setSelectedSong(currentSong);
    } catch (err) {
      alert('대표곡 설정 중 오류가 발생했습니다.');
    }
  };

  const handleLike = async (songId) => {
    if (!likeStates[songId]) {
      try {
        const response = await setLikeSong(songId);
        if (response.isSuccess) {
          setLikeStates((prev) => ({
            ...prev,
            [songId]: 'like',
          }));
        } else {
          alert('좋아요 설정에 실패했습니다.');
        }
      } catch (error) {
        alert('서버 오류로 좋아요 설정에 실패했습니다.');
      }
    }
  };

  const handleUnlike = (songId) => {
    if (!likeStates[songId]) {
      setLikeStates((prev) => ({
        ...prev,
        [songId]: 'unlike',
      }));
    }
  };

  return (
    <Container>
      <Header>
        <PositiveButton
          onClick={() => {
            if (selectedSong) {
              navigate('/recommend/confirm');
            } else {
              alert('대표곡을 선택해주세요.');
            }
          }}
        />
      </Header>
      <Text>
        오늘 {emotionLabel}을 느낀 {nickname}님을 위한
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
          src={currentSong.songImagePath}
          alt={currentSong.songName}
          onClick={handlePlaySong}
        />
        <ArrowButton onClick={handleRightClick}>
          <img src={rightButton} alt="Right button" />
        </ArrowButton>
      </SongContainer>

      <SongInfo>
        <SongName>{currentSong.songName}</SongName>
        <ArtistName>{currentSong.artist}</ArtistName>
      </SongInfo>

      <Align>
        <div onClick={() => handleUnlike(currentSong.songId)}>
          <Unlike
            style={{
              opacity: likeStates[currentSong.songId] === 'unlike' ? 1 : 0.3,
              cursor: likeStates[currentSong.songId] ? 'default' : 'pointer',
            }}
          />
        </div>

        <RepresentativeButton onClick={handleRepresentativeSelect}>
          <RadioButton
            isSelected={
              selectedSong && selectedSong.songName === currentSong.songName
            }
          />
          <span>대표곡</span>
        </RepresentativeButton>

        <div onClick={() => handleLike(currentSong.songId)}>
          <Like
            style={{
              opacity: likeStates[currentSong.songId] === 'like' ? 1 : 0.3,
              cursor: likeStates[currentSong.songId] ? 'default' : 'pointer',
            }}
          />
        </div>
      </Align>
    </Container>
  );
};

export default Recommend;
