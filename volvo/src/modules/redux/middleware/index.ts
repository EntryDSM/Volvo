import { all } from 'redux-saga/effects';
import status from './status';
import user from './user';
import signin from './signin';
import signup from './signup';
import resetPasswordSaga from './resetPassword';
import selectTypeSaga from './selectType';
import previewSaga from './preview';
import gradeSaga from './grade';
import information from './information';

export default function* rootSaga() {
  yield all([
    gradeSaga(),
    status(),
    user(),
    signin(),
    signup(),
    selectTypeSaga(),
    resetPasswordSaga(),
    previewSaga(),
    information(),
  ]);
}
