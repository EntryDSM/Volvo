import { call, put, takeLatest } from 'redux-saga/effects';
import { SIGNIN } from '../../action/signin';
import { refreshToken, signin } from '../../../../util/api/signin';
import { MODAL_OFF } from '../../action/modal';
import { IS_LOGIN } from '../../action/auth';
import { REFRESH_TOKEN } from '../../action/signin/interface';
import { responseGenerator, signinResponse } from '../../../../types';

export const refreshTokenSaga = function* (action: any) {
  const FAILURE = `${REFRESH_TOKEN}_FAILURE`;
  const SUCCESS = `${REFRESH_TOKEN}_SUCCESS`;
  const callback = action.payload.callback;
  try {
    const response: signinResponse = yield call(refreshToken);
    yield put({
      type: SUCCESS,
      payload: response ? response : '',
    });
    localStorage.setItem('access_token', response.access_token);
    yield call(callback);
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: REFRESH_TOKEN },
      });
    } else {
      yield put({
        type: FAILURE,
        payload: {
          message: `Network Error`,
          status: 500,
        },
      });
    }
  }
};

export const siginRequestSaga = function* (action: any) {
  const SUCCESS = `${SIGNIN}_SUCCESS`;
  const FAILURE = `${SIGNIN}_FAILURE`;
  try {
    const response: responseGenerator = yield call(signin, action.payload);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
    yield put({
      type: MODAL_OFF,
    });
    yield put({
      type: IS_LOGIN,
      payload: true,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: SIGNIN },
      });
    } else {
      yield put({
        type: FAILURE,
        payload: {
          message: `Network Error`,
          status: 500,
        },
      });
    }
  }
};

function* signinSaga() {
  yield takeLatest(SIGNIN, siginRequestSaga);
  yield takeLatest(REFRESH_TOKEN, refreshTokenSaga);
}

export default signinSaga;
