import { createReducer } from 'typesafe-actions';
import { previewActionType } from '../../action/preview';
import {
  FINAL,
  FINAL_FAILURE,
  FINAL_PDF_FAILURE,
  FINAL_PDF_SUCCESS,
  FINAL_SUCCESS,
  GET_PREVIEW_FAILURE,
  GET_PREVIEW_SUCCESS,
} from '../../action/preview/interface';
import PreviewState from './interface';

const initState: PreviewState = {
  preview: null,
  error: {
    status: 0,
    type: '',
    message: '',
  },
  isSuccessSaveFinal: undefined,
  finalPdf: null,
};

const previewReducer = createReducer<PreviewState, previewActionType>(initState, {
  [GET_PREVIEW_SUCCESS]: (state, action) => ({
    ...state,
    preview: action.payload,
  }),
  [GET_PREVIEW_FAILURE]: (state, action) => ({
    ...state,
    error: action.payload,
  }),
  [FINAL]: state => ({
    ...state,
    isSuccessSaveFinal: undefined,
  }),
  [FINAL_SUCCESS]: state => ({
    ...state,
    isSuccessSaveFinal: true,
  }),
  [FINAL_FAILURE]: (state, action) => ({
    ...state,
    isSuccessSaveFinal: false,
    error: action.payload,
  }),
  [FINAL_PDF_SUCCESS]: (state, action) => ({
    ...state,
    finalPdf: action.payload,
  }),
  [FINAL_PDF_FAILURE]: (state, action) => ({
    ...state,
    error: action.payload,
  }),
});

export default previewReducer;
