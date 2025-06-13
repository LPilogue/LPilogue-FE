import api from '../api';

const getChatbot = async ({ content, emotion }) => {
  try {
    const response = await api.post('/chatbot', {
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
