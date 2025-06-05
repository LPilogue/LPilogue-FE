import { publicApi } from '../api';

const duplicateId = async (username) => {
  const res = await publicApi.get('/auth/exists-username', {
    params: { username },
  });

  return res.data.result.exists;
};

export default duplicateId;
