import {
  PASSWORD,
  NAME,
  signupActionType,
  PHONE_CODE,
  PHONE_NUMBER,
  RULE_CHECK,
  CHECK_VERTIFY_CODE_SUCCESS,
  CHECK_VERTIFY_CODE_FAILURE,
  SEND_VERTIFY_CODE_SUCCESS,
  SEND_VERTIFY_CODE_FAILURE,
  SEND_VERTIFY_CODE,
  SIGNUP_FAILURE,
  RESET,
  PASSWORD_CHECK,
} from '../../action/signup';
import ISignUpState from './interface';

const initState: ISignUpState = {
  password: '',
  passwordCheck: '',
  name: '',
  phoneCode: '',
  phoneNumber: '',
  ruleCheck: false,
  isCheckVertifyCode: false,
  isSendVertifyCode: false,
  error: {
    status: 0,
    message: '',
    type: '',
  },
};

const SignUpReducer = (state: ISignUpState = initState, action: signupActionType): ISignUpState => {
  switch (action.type) {
    case NAME: {
      return {
        ...state,
        name: action.payload,
      };
    }
    case PASSWORD: {
      return {
        ...state,
        password: action.payload,
      };
    }
    case PASSWORD_CHECK: {
      return {
        ...state,
        passwordCheck: action.payload,
      };
    }
    case PHONE_CODE: {
      return {
        ...state,
        phoneCode: action.payload,
      };
    }
    case PHONE_NUMBER: {
      return {
        ...state,
        phoneNumber: action.payload,
      };
    }
    case RULE_CHECK: {
      return {
        ...state,
        ruleCheck: action.payload,
      };
    }
    case CHECK_VERTIFY_CODE_SUCCESS: {
      return {
        ...state,
        isCheckVertifyCode: true,
      };
    }
    case CHECK_VERTIFY_CODE_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case SEND_VERTIFY_CODE_SUCCESS: {
      return {
        ...state,
        isSendVertifyCode: true,
      };
    }
    case SEND_VERTIFY_CODE_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case SEND_VERTIFY_CODE: {
      return {
        ...state,
        isSendVertifyCode: false,
        isCheckVertifyCode: false,
      };
    }
    case SIGNUP_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case RESET: {
      return {
        ...state,
        ...initState,
      };
    }
    default: {
      return state;
    }
  }
};

export default SignUpReducer;
