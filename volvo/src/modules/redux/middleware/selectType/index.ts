import createRequestSaga from '../../../../util/saga/createRequestSaga';
import {
  getSelectType,
  selectType,
  selectTypeStateToRequest,
} from '../../../../util/api/selectType';
import {
  TYPE,
  SOCIALTYPE,
  AREA,
  GRADUATION,
  GRADUATION_YEAR,
  GRADUATION_MONTH,
  REMARK,
  HEADCOUNT,
  GET_SELECTTYPE,
  SELECTTYPE,
} from '../../action/selectType/interface';
import { debounce, put, select, takeLatest } from 'redux-saga/effects';
import * as Effects from 'redux-saga/effects';
import { reducerType } from '../../reducer';
import SelectTypeState from '../../reducer/selectType/interface';
import { responseGenerator, selectTypeRequestInterface } from '../../../../types';

const actionArray = [
  TYPE,
  SOCIALTYPE,
  AREA,
  GRADUATION,
  GRADUATION_YEAR,
  GRADUATION_MONTH,
  REMARK,
  HEADCOUNT,
];

const getStateFunc = (state: reducerType): reducerType['selectType'] => state.selectType;
const call: any = Effects.call;

export const getSelectTypeRequestSaga = createRequestSaga(GET_SELECTTYPE, getSelectType);

export const selectTypeSaveSaga = function* () {
  const SUCCESS = 'SELECTTYPE/SELECTTYPE_SUCCESS';
  const FAILURE = 'SELECTTYPE/SELECTTYPE_FAILURE';
  const state: SelectTypeState = yield select(getStateFunc);
  const request: selectTypeRequestInterface = selectTypeStateToRequest(state);
  const accessToken = localStorage.getItem('access_token');
  try {
    const response: responseGenerator = yield call(selectType, accessToken, request);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: 'SELECTTYPE/SELECTTYPE' },
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

function* selectTypeSaga() {
  yield takeLatest(SELECTTYPE, selectTypeSaveSaga);
  yield takeLatest(GET_SELECTTYPE, getSelectTypeRequestSaga);
  yield debounce(3000, actionArray, selectTypeSaveSaga);
}

export default selectTypeSaga;
