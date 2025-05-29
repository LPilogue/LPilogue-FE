import { useState } from 'react';
import Mood from '../components/onboarding/TodayMood';
import Recommend from '../components/onboarding/TodayRecommend';

const Todayprofile = () => {
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Mood onNext={() => setStep(2)} />;
      case 2:
        return <Recommend onNext={() => setStep(3)} />;
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

export default Todayprofile;
