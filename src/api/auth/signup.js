import { publicApi } from '../api';

const signUp = async (userData) => {
  try {
    const response = await publicApi.post('/auth/signup', {
      username: userData.username,
      password: userData.password,
      nickname: userData.nickname,
      city: userData.city,
      happy: userData.happy,
      sad: userData.sad,
      stressed: userData.stressed,
      lonely: userData.lonely,
      artist: userData.artist,
    });
    return response.data;
  } catch (error) {
    console.error('회원가입 요청 실패:', error);
    throw error;
  }
};

export default signUp;
