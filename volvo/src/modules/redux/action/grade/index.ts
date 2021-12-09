import { ActionType, createAsyncAction, deprecated } from 'typesafe-actions';
import { GradeState, GradeSubjectState } from '../../../../types';

import {
  GET_GRADE,
  GET_GRADE_FAILURE,
  GET_GRADE_SUCCESS,
  SAVE_GRADE,
  SAVE_GRADE_SUCCESS,
  SET_GRADE,
  SET_INPUT,
  SVAE_GRADE_FAILURE,
} from './interface';
const { createStandardAction } = deprecated;

export const setInput = createStandardAction(SET_INPUT)<{ name: string; value: number }>();
export const setGrade = createStandardAction(SET_GRADE)<{ grade: GradeSubjectState }>();
export const getGrade = createAsyncAction(GET_GRADE, GET_GRADE_SUCCESS, GET_GRADE_FAILURE)<
  undefined,
  GradeState,
  undefined
>();

export const saveGrade = createAsyncAction(SAVE_GRADE, SAVE_GRADE_SUCCESS, SVAE_GRADE_FAILURE)<
  GradeState,
  undefined,
  undefined
>();

const actions = { setInput, setGrade, getGrade, saveGrade };
export type GradeAction = ActionType<typeof actions>;
