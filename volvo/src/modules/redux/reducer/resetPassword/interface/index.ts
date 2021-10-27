import { error } from '../../../../../models/error';

export interface IResetPasswordState {
  vertifyCode: string;
  vertifyPhoneNumber: string;
  newPassword: string;
  error: error;
  vertifyCodeSend: boolean;
  vertifyCodeChecked: boolean;
}
