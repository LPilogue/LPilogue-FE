import api from '../api';

const getRecommend = async () => {
  try {
    const content = sessionStorage.getItem('content');
    const badSongListRaw = sessionStorage.getItem('badSongList');
    const badSongList = badSongListRaw ? JSON.parse(badSongListRaw) : [];

    const response = await api.post('/rec/recommendations/songs', {
      content,
      badSongList,
    });

    return response.data;
  } catch (error) {
    console.error('노래 추천 요청 실패:', error);
    throw error;
  }
};

export default getRecommend;
