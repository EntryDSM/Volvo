import createRequestSaga from '../../../../util/saga/createRequestSaga';
import {
  informationStateToRequest,
  information,
  graduateInformationStateToRequest,
  graduateInformation,
  getInformation,
  getGraduateInformation,
  userPhoto,
  getSearchSchool,
  gedScore,
  getGedScore,
} from '../../../../util/api/information';
import {
  INFORMATION,
  INPUT,
  SEX,
  BIRTHYEAR,
  BIRTHMONTH,
  BIRTHDATE,
  SCHOOLCODE,
  ADDRESS_AND_CODE,
  GET_INFORMATION,
  GET_GRADUATE_INFORMATION,
  GRADUATE_INFORMATION,
  USER_PICTURE,
  SEARCH_SCHOOL,
  GET_GED_SCORE,
  GED_SCORE,
} from '../../action/information/interface';
import { call, debounce, put, select, takeLatest } from 'redux-saga/effects';
import { reducerType } from '../../reducer';
import { informationInterface, responseGenerator } from '../../../../types';
import InformationState from '../../reducer/information/interface';
import SelectTypeState from '../../reducer/selectType/interface';

const actionArray = [INPUT, SEX, BIRTHYEAR, BIRTHMONTH, BIRTHDATE, ADDRESS_AND_CODE, SCHOOLCODE];

const getStateFunc = (state: reducerType): reducerType['information'] => state.information;
const getSelectTypeStateFunc = (state: reducerType): reducerType['selectType'] => state.selectType;
const getUserName = (state: reducerType) => state.user.name;

const informationGetSaga = createRequestSaga(GET_INFORMATION, getInformation);
const graduateInformationGetSaga = createRequestSaga(
  GET_GRADUATE_INFORMATION,
  getGraduateInformation,
);
const userPhotoSaveSaga = createRequestSaga(USER_PICTURE, userPhoto);
const searchSchoolGetSaga = createRequestSaga(SEARCH_SCHOOL, getSearchSchool);
const gedScoreGetSaga = createRequestSaga(GET_GED_SCORE, getGedScore);

const informationSaveSaga = function* () {
  const ACTION = 'INFORMATION/INFORMATION';
  const state: InformationState = yield select(getStateFunc);
  const userName: string = yield select(getUserName);
  const requestState: informationInterface = informationStateToRequest(state, userName);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response: responseGenerator = yield call(information, accessToken, requestState);
    yield put({
      type: `${ACTION}_SUCCESS`,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    yield put({
      type: `${ACTION}_FAILURE`,
      payload: { ...error.response?.data, type: ACTION },
    });
  }
};

const graduateInformationSaveSaga = function* () {
  const ACTION = 'INFORMATION/GRADUATE_INFORMATION';
  const state: InformationState = yield select(getStateFunc);
  const request = graduateInformationStateToRequest(state);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response: responseGenerator = yield call(graduateInformation, accessToken, request);
    yield put({
      type: `${ACTION}_SUCCESS`,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    yield put({
      type: `${ACTION}_FAILURE`,
      payload: { ...error.response?.data, type: ACTION },
    });
  }
};

const proxySaga = function* () {
  const state: SelectTypeState = yield select(getSelectTypeStateFunc);
  yield call(informationSaveSaga);
  if (state.educationalStatus !== 'QUALIFICATION_EXAM') {
    yield call(graduateInformationSaveSaga);
  }
};

const gedScoreSaveSaga = function* () {
  const ACTION = 'INFORMATION/GED_SCORE';
  const state: InformationState = yield select(getStateFunc);
  const accessToken = localStorage.getItem('access_token') || '';
  try {
    const response: responseGenerator = yield call(gedScore, accessToken, state.totalScore);
    yield put({
      type: `${ACTION}_SUCCESS`,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    yield put({
      type: `${ACTION}_FAILURE`,
      payload: { ...error.response?.data, type: ACTION },
    });
  }
};

function* informationSaga() {
  yield takeLatest(INFORMATION, informationSaveSaga);
  yield takeLatest(GET_INFORMATION, informationGetSaga);
  yield takeLatest(GRADUATE_INFORMATION, graduateInformationSaveSaga);
  yield takeLatest(GET_GRADUATE_INFORMATION, graduateInformationGetSaga);
  yield takeLatest(USER_PICTURE, userPhotoSaveSaga);
  yield takeLatest(SEARCH_SCHOOL, searchSchoolGetSaga);
  yield takeLatest(GET_GED_SCORE, gedScoreGetSaga);
  yield debounce(2000, GED_SCORE, gedScoreSaveSaga);
  yield debounce(3000, actionArray, proxySaga);
}

export default informationSaga;
