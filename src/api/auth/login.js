import { publicApi } from '../api';

const login = async ({ username, password }) => {
  const response = await publicApi.post(
    '/auth/signin',
    { username, password },
    { withCredentials: true },
  );

  const tokenWithBearer = response.data?.result?.accessToken;
  const nickname = response.data?.result?.nickname;

  if (tokenWithBearer) {
    const token = tokenWithBearer.replace('Bearer ', '');
    localStorage.setItem('accessToken', token);
  } else {
    console.warn('응답에 accessToken이 없습니다:', response.data);
  }

  if (nickname) {
    sessionStorage.setItem('nickname', nickname);
  } else {
    console.warn('응답에 nickname이 없습니다:', response.data);
  }

  return response.data;
};

export default login;
