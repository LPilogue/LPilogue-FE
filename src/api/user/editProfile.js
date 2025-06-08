import api from '../api';

const editProfile = async (data) => {
  return api.put('/user', null, {
    params: data,
  });
};

export default editProfile;
