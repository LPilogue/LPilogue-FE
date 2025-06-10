import api from '../api';

const getMostArtist = async (year) => {
  try {
    const response = await api.get('/songs/mostFrequentArtist', {
      params: { year },
    });

    return response.data;
  } catch (error) {
    console.error('🎵 가장 많이 기록한 아티스트 조회 실패:', error);
    throw error;
  }
};

export default getMostArtist;
