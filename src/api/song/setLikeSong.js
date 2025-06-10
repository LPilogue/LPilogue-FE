import api from '../api';

const setLikeSong = async (songId) => {
  try {
    const response = await api.patch(`/songs/like/${songId}`);
    return response.data;
  } catch (error) {
    console.error('좋아요 설정 실패:', error);
    throw error;
  }
};

export default setLikeSong;
