import { combineReducers } from 'redux';
import userReducer from './user';
import modalReducer from './modal';
import statusReducer from './status';
import signupReducer from './signup';
import signinReducer from './signin';
import resetPasswordReducer from './resetPassword';
import informationReducer from './information';
import authReducer from './auth';
import selectTypeReducer from './selectType';
import previewReducer from './preview';
import gradeReducer from './grade';

const rootReducer = combineReducers({
  grade: gradeReducer,
  user: userReducer,
  modal: modalReducer,
  status: statusReducer,
  signup: signupReducer,
  signin: signinReducer,
  resetPassword: resetPasswordReducer,
  auth: authReducer,
  selectType: selectTypeReducer,
  preview: previewReducer,
  information: informationReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
