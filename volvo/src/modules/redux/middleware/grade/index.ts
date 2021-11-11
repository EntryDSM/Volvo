import {  AxiosResponse } from 'axios';
import { call, debounce, put, takeLatest } from 'redux-saga/effects';
import { GradeState } from '../../../../types';
import { getGradeApi, setGrade } from '../../../../util/api/grade';
import { getGrade, saveGrade } from '../../action/grade';
import {  GET_GRADE, SAVE_GRADE, SET_GRADE, SET_INPUT } from '../../action/grade/interface';

const SET_STATE_ACTION = [SET_GRADE, SET_INPUT];

export function* gradeGetSaga() {
  try {
    const response: AxiosResponse<GradeState> = yield call(getGradeApi);
    yield put(getGrade.success(response.data));
  } catch (error:any) {
    if (error.response?.data) {
      yield put(getGrade.failure());
    } else {
      yield put(getGrade.failure());
    }
  }
}

export function* gradeSaveSaga(action: ReturnType<typeof saveGrade.request>) {
  try {
    yield call(setGrade, action.payload);
    yield put(saveGrade.success());
  } catch (error:any) {
    if (error.response?.data) {
      yield put(saveGrade.failure());
    } else {
      yield put(saveGrade.failure());
    }
  }
}

export default function* gradeSaga() {
  yield takeLatest(SAVE_GRADE, gradeSaveSaga);
  yield takeLatest(GET_GRADE, gradeGetSaga);
  yield debounce(3000, SET_STATE_ACTION, gradeSaveSaga);
}
