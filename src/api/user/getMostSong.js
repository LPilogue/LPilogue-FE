import api from '../api';

const getMostSong = async (year) => {
  try {
    const response = await api.get('/songs/mostFrequentSong', {
      params: { year },
    });

    return response.data;
  } catch (error) {
    console.error('🎵 가장 많이 기록한 곡 조회 실패:', error);
    throw error;
  }
};

export default getMostSong;
