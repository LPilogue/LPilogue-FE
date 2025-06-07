import api from '../api';

const getDiaryDetail = async (diaryId) => {
  try {
    const response = await api.get(`/diaries/${diaryId}`);
    return response.data;
  } catch (error) {
    console.error('일기 상세 조회 실패:', error);
    throw error;
  }
};

export default getDiaryDetail;
