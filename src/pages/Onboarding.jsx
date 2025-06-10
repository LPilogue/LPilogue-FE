import { useState } from 'react';
import Happy from '../components/onboarding/Happy';
import Gloomy from '../components/onboarding/Gloomy';
import Stress from '../components/onboarding/Stress';
import Lonley from '../components/onboarding/Lonely';
import Favorite from '../components/onboarding/Favorite';
import Loading from '../components/Loading';
import editProfile from '../api/user/editProfile';

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    happy: 0,
    sad: 0,
    stressed: 0,
    lonely: 0,
    artist: '',
  });

  const updateFormData = (newPartialData) => {
    const updatedFormData = { ...formData, ...newPartialData };
    setFormData(updatedFormData);

    const prev = sessionStorage.getItem('signupUserData');
    const parsed = prev ? JSON.parse(prev) : {};

    const merged = { ...parsed, ...newPartialData };
    sessionStorage.setItem('signupUserData', JSON.stringify(merged));
  };
  const handleSubmit = async (finalFormData) => {
    try {
      const res = await editProfile(finalFormData);
      if (res.isSuccess) {
        console.log('✅ 프로필 업데이트 완료');
        sessionStorage.removeItem('signupUserData'); // 저장된 값 제거 (선택사항)
      } else {
        console.error('❌ 실패:', res.message);
      }
    } catch (err) {
      console.error('🚨 에러 발생:', err);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Happy
            onNext={() => setStep(2)}
            onChange={(v) => updateFormData({ happy: v })}
          />
        );
      case 2:
        return (
          <Gloomy
            onNext={() => setStep(3)}
            onChange={(v) => updateFormData({ sad: v })}
          />
        );
      case 3:
        return (
          <Stress
            onNext={() => setStep(4)}
            onChange={(v) => updateFormData({ stressed: v })}
          />
        );
      case 4:
        return (
          <Lonley
            onNext={() => setStep(5)}
            onChange={(v) => updateFormData({ lonely: v })}
          />
        );
      case 5:
        return (
          <Favorite
            onNext={() => setStep(6)}
            onChange={(value) => {
              const updated = { ...formData, artist: value };
              updateFormData({ artist: value });
              handleSubmit(updated);
            }}
          />
        );
      case 6:
        return <Loading />;
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

export default Onboarding;
