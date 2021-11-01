export const SET_INPUT = "grade/SET_INPUT";
export const SET_GRADE = "grade/SET_GRADE";

export const SAVE_GRADE = "grade/SAVE_GRADE";
export const SAVE_GRADE_SUCCESS = "grade/SAVE_GRADE_SUCCESS";
export const SVAE_GRADE_FAILURE = "grade/SVAE_GRADE_FAILURE";

export const GET_GRADE ="grade/GET_GRADE";
export const GET_GRADE_SUCCESS = "grade/SET_GRADE_SUCCESS";
export const GET_GRADE_FAILURE = "grade/GET_GRADE_FAILURE";

export type gradeType = {
    korean: string,
    social: string,
    history: string,
    math: string,
    science: string,
    technical: string,
    english: string
}