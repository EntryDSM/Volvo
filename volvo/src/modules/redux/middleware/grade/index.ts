import {  AxiosResponse } from 'axios';
import { call, debounce, put, takeLatest,select } from 'redux-saga/effects';
import { GetGradeState, GradeState } from '../../../../types';
import { getGradeApi, setGrade } from '../../../../util/api/grade';
import { getGrade, saveGrade } from '../../action/grade';
import {  GET_GRADE, SAVE_GRADE, SET_GRADE, SET_INPUT } from '../../action/grade/interface';
import { reducerType } from '../../reducer';

const SET_STATE_ACTION = [SET_GRADE, SET_INPUT];

export function* gradeGetSaga() {
  try {
    const response: AxiosResponse<GetGradeState> = yield call(getGradeApi);
    const rData = response.data;
    yield put(getGrade.success({
      absence:rData.day_absence_count,
      grade:{
        english:rData.english_grade,
        history:rData.history_grade,
        korean:rData.korean_grade,
        math:rData.math_grade,
        science:rData.science_grade,
        social:rData.social_grade,
        technical:rData.tech_and_home_grade
      },
      lateness:rData.lateness_count,
      leave:rData.early_leave_count,
      truancy:rData.lecture_absence_count,
      volunteerTime:rData.volunteer_time
    }));
  } catch (error:any) {
    if (error.response?.data) {
      yield put(getGrade.failure());
    } else {
      yield put(getGrade.failure());
    }
  }
}

export function* gradeSaveSaga() {
  try {
    const state:reducerType['grade'] = yield select((state:reducerType):reducerType["grade"]=>state.grade)
    yield call(setGrade,state );
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
