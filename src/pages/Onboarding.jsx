import { useState } from 'react';
import Happy from '../components/onboarding/Happy';
import Gloomy from '../components/onboarding/Gloomy';
import Stress from '../components/onboarding/Stress';
import Lonley from '../components/onboarding/Lonely';
import Favorite from '../components/onboarding/Favorite';
import Loading from '../components/Loading';

const Onboarding = () => {
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Happy onNext={() => setStep(2)} />;
      case 2:
        return <Gloomy onNext={() => setStep(3)} />;
      case 3:
        return <Stress onNext={() => setStep(4)} />;
      case 4:
        return <Lonley onNext={() => setStep(5)} />;
      case 5:
        return <Favorite onNext={() => setStep(6)} />;
      case 6:
        return <Loading />;
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

export default Onboarding;
