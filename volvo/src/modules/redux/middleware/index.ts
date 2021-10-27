import { all } from 'redux-saga/effects';
import status from './status';
import user from './user';
import signin from './signin';
import signup from './signup';
import resetPasswordSaga from './resetPassword';
import selectTypeSaga from './selectType';
import previewSaga from './preview';

export default function* rootSaga() {
  yield all([
    status(),
    user(),
    signin(),
    signup(),
    selectTypeSaga(),
    resetPasswordSaga(),
    previewSaga(),
  ]);
}
