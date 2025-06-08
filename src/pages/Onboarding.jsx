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

  console.log(formData);

  const handleSubmit = async (finalFormData) => {
    console.log('🔄 제출할 formData:', finalFormData);

    try {
      const res = await editProfile(finalFormData);
      if (res.isSuccess) {
        console.log('✅ 프로필 업데이트 완료');
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
            onChange={(v) => setFormData((prev) => ({ ...prev, happy: v }))}
          />
        );
      case 2:
        return (
          <Gloomy
            onNext={() => setStep(3)}
            onChange={(v) => setFormData((prev) => ({ ...prev, sad: v }))}
          />
        );
      case 3:
        return (
          <Stress
            onNext={() => setStep(4)}
            onChange={(v) => setFormData((prev) => ({ ...prev, stressed: v }))}
          />
        );
      case 4:
        return (
          <Lonley
            onNext={() => setStep(5)}
            onChange={(v) => setFormData((prev) => ({ ...prev, lonely: v }))}
          />
        );
      case 5:
        return (
          <Favorite
            onNext={() => setStep(6)}
            onChange={(value) => {
              setFormData((prev) => {
                const updated = { ...prev, artist: value };

                handleSubmit(updated);
                return updated;
              });
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
