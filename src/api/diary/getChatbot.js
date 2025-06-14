import api from '../api';

export const getChatbot = async ({ content, emotion }) => {
  try {
    const response = await api.post('/rec/chatbot', {
      content,
      emotion,
    });

    return response.data;
  } catch (error) {
    console.error('AI 답변 생성 실패:', error);
    throw error;
  }
};

export default getChatbot;

export const getCocktails = async (content) => {
  try {
    const response = await api.post('/rec/recommendations/cocktails', {
      content,
    });

    return response.data;
  } catch (error) {
    console.error('칵테일 추천 요청 실패:', error);
    throw error;
  }
};
