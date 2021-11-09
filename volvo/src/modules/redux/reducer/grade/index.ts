import { createReducer } from 'typesafe-actions';
import { GradeState } from '../../../../types';
import { GradeAction } from '../../action/grade';
import {
  GET_GRADE_FAILURE,
  GET_GRADE_SUCCESS,
  SAVE_GRADE_SUCCESS,
  SET_GRADE,
  SET_INPUT,
  SVAE_GRADE_FAILURE,
  GET_GRADE,
  SAVE_GRADE
} from '../../action/grade/interface';

const initState: GradeState = {
  volunteerTime: 0,
  absence: 0,
  leave: 0,
  lateness: 0,
  truancy: 0,
  grade: {
    korean: 'XXXX',
    social: 'XXXX',
    history: 'XXXX',
    math: 'XXXX',
    science: 'XXXX',
    technical: 'XXXX',
    english: 'XXXX',
  },
  isSuccessSaveGrade: undefined,
};

const gradeReducer = createReducer<GradeState, GradeAction>(initState, {
  [SET_INPUT]: (state, action) => ({ ...state, [action.payload.name]: action.payload.value,isSuccessSaveGrade:undefined }),
  [SET_GRADE]: (state, action) => ({ ...state, grade: action.payload.grade,isSuccessSaveGrade:undefined }),
  
  [SAVE_GRADE]: (state) =>({...state,isSuccessSaveGrade:undefined}),
  [SAVE_GRADE_SUCCESS]: state => ({
    ...state,
    isSuccessSaveGrade: true,
  }),
  [SVAE_GRADE_FAILURE]: (state) => ({
    ...state,
    isSuccessSaveGrade: false,
  }),
  [GET_GRADE] :(state)=>({...state,isSuccessSaveGrade:undefined}),
  [GET_GRADE_SUCCESS]: (state, action) => ({
    ...state,
    volunteerTime: action.payload.volunteerTime,
    absence: action.payload.absence,
    leave: action.payload.leave,
    state: action.payload.lateness,
    truancy: action.payload.truancy,
    grade: action.payload.grade,
    isSuccessSaveGrade:undefined
  }),
  [GET_GRADE_FAILURE]:(state)=>({
    ...state,
    isSuccessSaveGrade:false
  })
});

export default gradeReducer;
