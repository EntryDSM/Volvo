import { error } from '../../../../../types';

interface IntroductionState {
  selfIntroduce: string;
  studyPlan: string;
  error: error;
  isSuccessSetIntro: boolean | undefined;
  isSuccessSetStudy: boolean | undefined;
}

export default IntroductionState;
