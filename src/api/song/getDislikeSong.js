import api from '../api';

const getDislikeSong = async () => {
  try {
    const response = await api.get('/songs/dislike');
    return response.data.result.songlist;
  } catch (error) {
    console.error('싫어요한 곡 불러오기 실패:', error);
    throw error;
  }
};

export default getDislikeSong;
