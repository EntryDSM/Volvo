import { ONCHANGE_SELF_INTRODUCE, ONCHANGE_STUDY_PLAN } from './interface';
// import { createAction } from "typesafe-actions";

// export const setIntroduction = createAction(SUBMIT_INTRODUCTION)<string>();

export const setSelfIntroduce = (selfIntroduce: string) => ({
  type: ONCHANGE_SELF_INTRODUCE,
  payload: selfIntroduce,
});
export const setStudyPlan = (studyPlan: string) => ({
  type: ONCHANGE_STUDY_PLAN,
  payload: studyPlan,
});
// export {SUBMIT_INTRODUCTION};

export type introductionActionType =
  | ReturnType<typeof setSelfIntroduce>
  | ReturnType<typeof setStudyPlan>;
