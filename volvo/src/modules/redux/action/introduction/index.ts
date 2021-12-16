import {
  SUBMIT_INTRODUCTION,
  CHANGE_SELFINTRODUCE,
  CHANGE_STUDYPLAN,
  SAVE_INTRO,
  SAVE_INTRO_SUCCESS,
  SAVE_INTRO_FAILURE,
  SAVE_STUDYPLAN,
  SAVE_STUDYPLAN_FAILURE,
  SAVE_STUDYPLAN_SUCCESS,
  GET_STUDYPLAN,
  GET_STUDYPLAN_FAILURE,
  GET_STUDYPLAN_SUCCESS,
  GET_SELFINTRO,
  GET_SELFINTRO_FAILURE,
  GET_SELFINTRO_SUCCESS,
} from './interface';
import { createAction } from 'typesafe-actions';
import { error } from '../../../../types';

// export const setIntroduction = createAction(SUBMIT_INTRODUCTION)<string>();

export const setSelfIntroduce = (selfIntro: string) => ({
  type: CHANGE_SELFINTRODUCE,
  payload: selfIntro,
});

export const setStudyPlan = (studyPlan: string) => ({
  type: CHANGE_STUDYPLAN,
  payload: studyPlan,
});

export const setSaveIntro = createAction(SAVE_INTRO)<string>();
export const setSaveIntroS = createAction(SAVE_INTRO_SUCCESS)();
export const setSaveIntroF = createAction(SAVE_INTRO_FAILURE)<error>();

export const setSaveStudy = createAction(SAVE_STUDYPLAN)<string>();
export const setSaveStudyS = createAction(SAVE_STUDYPLAN_SUCCESS)();
export const setSaveStudyF = createAction(SAVE_STUDYPLAN_FAILURE)<error>();

export const setGetIntro = createAction(GET_SELFINTRO)();
export const setGetIntroS = createAction(GET_SELFINTRO_SUCCESS)<string>();
export const setGetIntroF = createAction(GET_SELFINTRO_FAILURE)<error>();

export const setGetStudy = createAction(GET_STUDYPLAN)();
export const setGetStudyS = createAction(GET_STUDYPLAN_SUCCESS)<string>();
export const setGetStudyF = createAction(GET_STUDYPLAN_FAILURE)<error>();

export { SUBMIT_INTRODUCTION };

export type introductionActionType =
  | ReturnType<typeof setStudyPlan>
  | ReturnType<typeof setSelfIntroduce>
  | ReturnType<typeof setSaveIntro>
  | ReturnType<typeof setSaveIntroS>
  | ReturnType<typeof setSaveIntroF>
  | ReturnType<typeof setSaveStudy>
  | ReturnType<typeof setSaveStudyS>
  | ReturnType<typeof setSaveStudyF>
  | ReturnType<typeof setGetIntro>
  | ReturnType<typeof setGetIntroS>
  | ReturnType<typeof setGetIntroF>
  | ReturnType<typeof setGetStudy>
  | ReturnType<typeof setGetStudyS>
  | ReturnType<typeof setGetStudyF>;
