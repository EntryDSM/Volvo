import { error } from '../../../../../types';

interface IUserState {
  phoneNumber: string;
  name: string;
  isfinalSubmitDone: boolean;
  isReceiveMail: boolean;
  selfIntroduceLength: number;
  studyPlanLength: number;
  applicationType: string;
  educationalStatus: string;
  error: error;
}

export default IUserState;
