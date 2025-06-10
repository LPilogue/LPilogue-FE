import { useNavigate } from 'react-router-dom';
import Onboarding from '../components/onboarding/Onboarding';
import editProfile from '../api/user/editProfile';

const WriteProfile = () => {
  const navigate = useNavigate();

  const handleEdit = async () => {
    const saved = sessionStorage.getItem('signupUserData');
    if (!saved) return;

    const userData = JSON.parse(saved);

    try {
      const res = await editProfile(userData);

      if (res?.data.isSuccess) {
        sessionStorage.removeItem('signupUserData');
        navigate('/write');
      }
    } catch (err) {
      console.error('프로필 수정 에러:', err);
      alert('프로필 수정 중 오류 발생');
    }
  };

  return <Onboarding handleSubmit={handleEdit} />;
};

export default WriteProfile;
