import { useState } from 'react';
import Happy from './Happy';
import Gloomy from './Gloomy';
import Stress from './Stress';
import Lonley from './Lonley';
import Favorite from './Favorite';

const Onboarding = ({ handleSubmit }) => {
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
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

export default Onboarding;
