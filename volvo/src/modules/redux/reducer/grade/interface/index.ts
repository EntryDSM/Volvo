import { GradeSubjectState } from "../../../../../types";

export interface GradeState {
    volunteerTime: number,
    absence: number,//결석
    leave: number,//조퇴
    lateness: number,//지각
    truancy: number,//무단 결석
    grade: GradeSubjectState,
    isSuccessSaveGrade?: boolean,
}





