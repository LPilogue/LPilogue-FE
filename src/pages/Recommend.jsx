/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import leftButton from '../assets/images/leftButton.svg';
import rightButton from '../assets/images/rightButton.svg';
import PositiveButton from '../components/PositiveButton';
import setMainSong from '../api/song/setMainSong';
import Unlike from '../assets/images/unlike.svg?react';
import Like from '../assets/images/like.svg?react';
import setLikeSong from '../api/song/setLikeSong';
// import getRecommend from '../api/song/getRecommend';
// import getDiaryEmotion from '../api/diary/getDiaryEmotion';
// import emotionMap from '../constants/emotion';
import createDiary from '../api/diary/createDiary';
import { getCocktails } from '../api/diary/getChatbot';
import recommend from '../mockData/recommend';

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
  // const [songs, setSongs] = useState([]);
  const { songs } = recommend;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSong, setSelectedSong] = useState(null);
  const [likeStates, setLikeStates] = useState({});
  const iframeRef = useRef(null);
  const navigate = useNavigate();
  const nickname = sessionStorage.getItem('nickname');
  // TODO: api 완성 후 수정 필요
  // const { diaryId } = useParams();
  // const rawEmotion = sessionStorage.getItem('emotion');
  // const emotion = emotionMap[rawEmotion];
  const emotion = '기쁨';

  // useEffect(() => {
  //   localStorage.removeItem('representativeSong');

  //   const fetchSongs = async () => {
  //     try {
  //       const result = await getRecommend();
  //       setSongs(result);
  //     } catch (error) {
  //       console.error('노래 불러오기 실패:', error);
  //     }
  //   };

  //   fetchSongs();
  // }, []);

  if (!songs || songs.length === 0) {
    return <Container>Loading..</Container>;
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
      await setMainSong(currentSong.id);
      setSelectedSong(currentSong);
    } catch (err) {
      alert('대표곡 설정 중 오류가 발생했습니다.');
    }
  };

  const handleLike = async (id) => {
    if (!likeStates[id]) {
      try {
        const response = await setLikeSong(id);
        if (response.isSuccess) {
          setLikeStates((prev) => ({
            ...prev,
            [id]: 'like',
          }));
        } else {
          alert('좋아요 설정에 실패했습니다.');
        }
      } catch (error) {
        alert('서버 오류로 좋아요 설정에 실패했습니다.');
      }
    }
  };

  const handleUnlike = (id) => {
    if (!likeStates[id]) {
      setLikeStates((prev) => ({
        ...prev,
        [id]: 'unlike',
      }));
    }
  };

  const handleSubmit = async () => {
    if (!selectedSong) {
      alert('대표곡을 선택해주세요.');
      return;
    }

    try {
      const content =
        sessionStorage.getItem('diaryContent') || '오늘 기분이 어땠어요';
      const cocktailRes = await getCocktails(content);

      const diaryRes = await createDiary({
        emotionType: cocktailRes.emotion,
        cocktailName: cocktailRes.cocktail.name,
        songs: [
          {
            id: selectedSong.id,
            isLiked: likeStates[selectedSong.id] === 'like' ? 1 : 0,
            type: 'MAIN',
          },
        ],
      });

      const diaryId = diaryRes?.result?.diaryId;

      if (!diaryId) {
        throw new Error('diaryId가 응답에 없습니다.');
      }

      navigate('/recommend/confirm', { state: { diaryId } });
    } catch (error) {
      console.error('다이어리 저장 실패:', error);
      alert('다이어리 저장에 실패했습니다.');
    }
  };

  return (
    <Container>
      <Header>
        <PositiveButton onClick={handleSubmit} />
      </Header>
      <Text>
        오늘 {emotion}을 느낀 {nickname}님을 위한
        {/* 오늘 {emotion.label}을 느낀 {nickname}님을 위한 */}
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
        <div onClick={() => handleUnlike(currentSong.id)}>
          <Unlike
            style={{
              opacity: likeStates[currentSong.id] === 'unlike' ? 1 : 0.3,
              cursor: likeStates[currentSong.id] ? 'default' : 'pointer',
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

        <div onClick={() => handleLike(currentSong.id)}>
          <Like
            style={{
              opacity: likeStates[currentSong.id] === 'like' ? 1 : 0.3,
              cursor: likeStates[currentSong.id] ? 'default' : 'pointer',
            }}
          />
        </div>
      </Align>
    </Container>
  );
};

export default Recommend;
