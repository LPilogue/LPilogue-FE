import api from '../api';

export const getMostEmotionMonthly = async (year, month) => {
  try {
    const response = await api.get('/diaries/mostFrequentEmotion/monthly', {
      params: { year, month },
    });
    return response.data;
  } catch (error) {
    console.error('연간 감정 조회 실패:', error);
    throw error;
  }
};

export const getMostEmotionYearly = async (year) => {
  try {
    const response = await api.get('/diaries/mostFrequentEmotion/yearly', {
      params: { year },
    });
    return response.data;
  } catch (error) {
    console.error('연간 감정 조회 실패:', error);
    throw error;
  }
};

export default getMostEmotionYearly;
