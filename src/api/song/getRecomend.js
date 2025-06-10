import api from '../api';

const getRecommend = async (diaryId) => {
  try {
    const response = await api.get(`/diaries/${diaryId}/songs`);
    return response.data.result.diarySongList;
  } catch (error) {
    console.error('추천 곡 조회 실패:', error);
    throw error;
  }
};

export default getRecommend;
