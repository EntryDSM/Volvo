import { error } from '../../../../../models/error';

interface ISignUpState {
  phoneNumber: string;
  name: string;
  phoneCode: string;
  password: string;
  passwordCheck: string;
  ruleCheck: boolean;
  isCheckVertifyCode: boolean;
  isSendVertifyCode: boolean;
  error: error;
}

export default ISignUpState;
