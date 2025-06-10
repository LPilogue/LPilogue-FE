import { useNavigate } from 'react-router-dom';
import Onboarding from '../components/onboarding/Onboarding';
import signUp from '../api/auth/signup';

const SignupOnboarding = () => {
  const navigate = useNavigate();

  const handleSignup = async () => {
    const saved = sessionStorage.getItem('signupUserData');
    if (!saved) return;

    const userData = JSON.parse(saved);

    try {
      const res = await signUp(userData);

      if (res?.isSuccess) {
        const token = res.result?.accessToken;
        if (token) {
          localStorage.setItem('accessToken', token);
        }

        sessionStorage.removeItem('signupUserData'); // 정리 (선택)
        navigate('/'); // 홈으로 이동
      } else {
        alert(res.message || '회원가입에 실패했습니다.');
      }
    } catch (err) {
      console.error('회원가입 오류:', err);
      alert('회원가입 요청에 실패했습니다.');
    }
  };

  return <Onboarding handleSubmit={handleSignup} />;
};

export default SignupOnboarding;
