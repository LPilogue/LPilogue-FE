import api from '../api';

const setMainSong = async (songId) => {
  try {
    const response = await api.patch(`/songs/main/${songId}`);
    return response.data;
  } catch (error) {
    console.error('대표곡 설정 실패:', error);
    throw error;
  }
};

export default setMainSong;
