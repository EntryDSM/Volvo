import { ActionType, deprecated } from 'typesafe-actions';
import { GradeSubjectState } from '../../../../types';

import { GET_GRADE, SAVE_GRADE, SET_GRADE, SET_INPUT } from './interface';
const { createStandardAction } = deprecated;

export const setInput = createStandardAction(SET_INPUT)<{ name: string; value: number }>();
export const setGrade = createStandardAction(SET_GRADE)<{ grade: GradeSubjectState }>();
export const getGrade = createStandardAction(GET_GRADE)();

export const saveGrade = createStandardAction(SAVE_GRADE)();
const actions = { setInput, setGrade };
export type GradeAction = ActionType<typeof actions>;
