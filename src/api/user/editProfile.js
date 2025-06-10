import api from '../api';

const editProfile = async (data) => {
  return api.put('/user/', data);
};

export default editProfile;
