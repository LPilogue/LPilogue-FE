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

  const handleSubmit = async () => {
    try {
      const res = await editProfile(formData);
      if (res.isSuccess) {
        console.log('완료');
      }
    } catch (e) {
      console.error(e);
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
            onNext={() => {
              handleSubmit();
              setStep(6);
            }}
            onChange={(v) => setFormData((prev) => ({ ...prev, artist: v }))}
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
