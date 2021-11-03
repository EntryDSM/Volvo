import { error } from '../../../../../types';

interface IAuthState {
  accessToken: string;
  isLogin: boolean;
  error: error;
}

export default IAuthState;
