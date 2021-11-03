import { error } from '../../../../../types';

interface ISignInState {
  id: string;
  password: string;
  error: error;
}

export default ISignInState;
