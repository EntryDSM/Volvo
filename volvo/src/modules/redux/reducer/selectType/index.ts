import { currentYear } from '../../../../constance/default';
import { createReducer } from 'typesafe-actions';
import { applicationTypeResponseToStatus } from '../../../../util/api/selectType';
import { selectTypeActionType } from '../../action/selectType';
import {
  TYPE,
  SOCIALTYPE,
  AREA,
  GRADUATION,
  GRADUATION_MONTH,
  GRADUATION_YEAR,
  REMARK,
  HEADCOUNT,
  SELECTTYPE,
  SELECTTYPE_SUCCESS,
  SELECTTYPE_FAILURE,
  GET_SELECTTYPE_FAILURE,
  GET_SELECTTYPE_SUCCESS,
  GET_SELECTTYPE,
} from '../../action/selectType/interface';
import SelectTypeState from './interface';

const initState: SelectTypeState = {
  applicationType: '',
  socialType: '사회통합전형',
  isDaejeon: null,
  educationalStatus: '',
  graduationMonth: 1,
  graduationYear: currentYear,
  graduatedAt: '',
  applicationRemark: null,
  isOutOfHeadcount: false,
  error: { status: 0, message: '', type: '' },
  isSuccessSaveSelectType: undefined,
  isSuccessGetSelectType: undefined,
};

const SelectTypeReducer = createReducer<SelectTypeState, selectTypeActionType>(initState, {
  [TYPE]: (state, action) => ({
    ...state,
    applicationType: action.payload,
    isSuccessSaveSelectType: undefined,
  }),
  [SOCIALTYPE]: (state, action) => ({
    ...state,
    socialType: action.payload,
    isSuccessSaveSelectType: undefined,
  }),
  [AREA]: (state, action) => ({
    ...state,
    isDaejeon: action.payload,
    isSuccessSaveSelectType: undefined,
  }),
  [GRADUATION]: (state, action) => ({
    ...state,
    educationalStatus: action.payload,
    isSuccessSaveSelectType: undefined,
  }),
  [GRADUATION_MONTH]: (state, action) => ({
    ...state,
    graduationMonth: action.payload,
    isSuccessSaveSelectType: undefined,
  }),
  [GRADUATION_YEAR]: (state, action) => ({
    ...state,
    graduationYear: action.payload,
    isSuccessSaveSelectType: undefined,
  }),
  [REMARK]: (state, action) => ({
    ...state,
    applicationRemark: action.payload,
    isSuccessSaveSelectType: undefined,
  }),
  [HEADCOUNT]: (state, action) => ({
    ...state,
    isOutOfHeadcount: action.payload,
    isSuccessSaveSelectType: undefined,
  }),
  [SELECTTYPE]: state => ({
    ...state,
    isSuccessSaveSelectType: undefined,
  }),
  [SELECTTYPE_SUCCESS]: state => ({
    ...state,
    isSuccessSaveSelectType: true,
  }),
  [SELECTTYPE_FAILURE]: (state, action) => ({
    ...state,
    isSuccessSaveSelectType: false,
    error: action.payload,
  }),
  [GET_SELECTTYPE]: state => ({
    ...state,
    isSuccessGetSelectType: undefined,
  }),
  [GET_SELECTTYPE_SUCCESS]: (state, action) => ({
    ...state,
    isSuccessGetSelectType: true,
    applicationRemark: action.payload.application_remark,
    isDaejeon: action.payload.daejeon,
    applicationType: applicationTypeResponseToStatus(action.payload.application_type),
    educationalStatus: action.payload.educational_status,
    graduatedAt: action.payload.graduated_at,
    isOutOfHeadcount: action.payload.out_of_headcount,
  }),
  [GET_SELECTTYPE_FAILURE]: (state, action) => ({
    ...state,
    isSuccessGetSelectType: false,
    error: action.payload,
  }),
});

export default SelectTypeReducer;
