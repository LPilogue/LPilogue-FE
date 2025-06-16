import api from '../api';
import getDislikeSong from './getDislikeSong';

const getWeatherSong = async () => {
  try {
    const userId = sessionStorage.getItem('userId');
    let badSongList = [];

    try {
      const dislikedSongs = await getDislikeSong();
      badSongList = dislikedSongs.map((song) => song.id);
    } catch (err) {
      console.warn('dislikeSong API 실패, 빈 리스트로 대체:', err);
    }

    const response = await api.post('/rec/recommendations/songs/weather', {
      user_id: userId,
      badSongList,
    });

    return response.data;
  } catch (error) {
    console.error('날씨 기반 추천곡 요청 실패:', error);
    throw error;
  }
};

export default getWeatherSong;
