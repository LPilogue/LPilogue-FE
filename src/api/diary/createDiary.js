import api from '../api';

const createDiary = async (diaryData) => {
  try {
    const response = await api.post('/diaries', diaryData);
    return response.data;
  } catch (error) {
    console.error('다이어리 작성 실패:', error);
    throw error;
  }
};

export default createDiary;
