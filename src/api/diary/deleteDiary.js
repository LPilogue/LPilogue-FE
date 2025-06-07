import api from '../api';

const deleteDiary = async (diaryId) => {
  try {
    const response = await api.delete(`/diaries/${diaryId}`);
    return response.data;
  } catch (error) {
    console.error('일기 삭제 실패:', error);
    throw error;
  }
};

export default deleteDiary;
