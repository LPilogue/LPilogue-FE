import { useState } from 'react';
import Happy from '../components/onboarding/Happy';

const Onboarding = () => {
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Happy onNext={() => setStep(2)} />;
      case 2:
        return <Happy onNext={() => setStep(3)} onBack={() => setStep(1)} />;
      case 3:
        return <Happy onBack={() => setStep(2)} />;
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

export default Onboarding;
