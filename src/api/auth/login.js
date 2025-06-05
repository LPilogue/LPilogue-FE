import { publicApi } from '../api';

const login = async ({ username, password }) => {
  const response = await publicApi.post(
    '/auth/signin',
    { username, password },
    { withCredentials: true },
  );
  return response.data;
};

export default login;
