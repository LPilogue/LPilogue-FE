import api from '../api';

const getMonthlyDiary = async (year, month) => {
  try {
    const response = await api.get('/diaries', {
      params: {
        year,
        month,
      },
    });
    return response.data;
  } catch (error) {
    console.error('일기 리스트 조회 실패:', error);
    throw error;
  }
};

export default getMonthlyDiary;
