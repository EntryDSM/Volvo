import { call, debounce, put, select, takeLatest } from '@redux-saga/core/effects';
import { responseGenerator } from '../../../../types';
import { getIntro, saveIntro, saveStudy, getStudy } from '../../../../util/api/introduction';
import createRequestSaga from '../../../../util/saga/createRequestSaga';
import {
  CHANGE_SELFINTRODUCE,
  CHANGE_STUDYPLAN,
  GET_SELFINTRO,
  GET_STUDYPLAN,
  SAVE_INTRO,
  SAVE_STUDYPLAN,
} from '../../action/introduction/interface';
import { reducerType } from '../../reducer';
import IntroductionState from '../../reducer/introduction/interface';

const getStateFunc = (state: reducerType): reducerType['introduction'] => state.introduction;

const introSaveSaga = function* () {
  const action = 'introduction/SAVE_INTRO';
  const SUCCESS = `${action}_SUCCESS`;
  const FAILURE = `${action}_FAILURE`;
  const state: IntroductionState = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response: responseGenerator = yield call(saveIntro, accessToken, state.selfIntroduce);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: action },
      });
    } else {
      yield put({
        type: FAILURE,
        payload: {
          message: 'Network Error',
          status: 500,
        },
      });
    }
  }
};
const studyPlanSaveSaga = function* () {
  const action = 'introduction/SAVE_STUDYPLAN';
  const SUCCESS = `${action}_SUCCESS`;
  const FAILURE = `${action}_FAILURE`;
  const state: IntroductionState = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response: responseGenerator = yield call(saveStudy, accessToken, state.studyPlan);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: action },
      });
    } else {
      yield put({
        type: FAILURE,
        payload: {
          message: 'Network Error',
          status: 500,
        },
      });
    }
  }
};

const getSelfIntroSaga = function* () {
  const action = 'introduction/GET_SELFINTRO';
  const SUCCESS = `${action}_SUCCESS`;
  const FAILURE = `${action}_FAILURE`;
  const state: IntroductionState = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response: responseGenerator = yield call(getIntro, accessToken);
    yield put({
      type: SUCCESS,
      payload: response.data.content !== null ? response.data.content : '',
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: action },
      });
    } else {
      yield put({
        type: FAILURE,
        payload: {
          message: 'Network Error',
          status: 500,
        },
      });
    }
  }
};
const getStudySaga = function* () {
  const action = 'introduction/GET_STUDYPLAN';
  const SUCCESS = `${action}_SUCCESS`;
  const FAILURE = `${action}_FAILURE`;
  const state: IntroductionState = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response: responseGenerator = yield call(getStudy, accessToken);
    yield put({
      type: SUCCESS,
      payload: response.data.content !== null ? response.data.content : '',
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: action },
      });
    } else {
      yield put({
        type: FAILURE,
        payload: {
          message: 'Network Error',
          status: 500,
        },
      });
    }
  }
};
function* introductionSaga() {
  yield takeLatest(SAVE_INTRO, introSaveSaga);
  yield debounce(3000, CHANGE_SELFINTRODUCE, introSaveSaga);
  yield takeLatest(SAVE_STUDYPLAN, studyPlanSaveSaga);
  yield debounce(3000, CHANGE_STUDYPLAN, studyPlanSaveSaga);
  yield takeLatest(GET_SELFINTRO, getSelfIntroSaga);
  yield takeLatest(GET_STUDYPLAN, getStudySaga);
}

export default introductionSaga;
