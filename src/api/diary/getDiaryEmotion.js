import api from '../api';

const getDiaryEmotion = async (diaryId) => {
  try {
    const response = await api.get(`/diaries/${diaryId}/emotions`);
    return response.data.result;
  } catch (error) {
    console.error('감정 조회 실패:', error);
    throw error;
  }
};

export default getDiaryEmotion;
