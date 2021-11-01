import { createReducer } from "typesafe-actions";
import { GradeAction, setInput } from "../../action/grade";
import { SET_GRADE, SET_INPUT } from "../../action/grade/interface";
import { GradeState } from "./interface";

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
  

  const gradeReducer = createReducer<GradeState,GradeAction>(initState,{
      [SET_INPUT]: (state,action)=>({...state,[action.payload.name]:action.payload.value}),
      [SET_GRADE]: (state,action)=>({...state,grade:action.payload.grade}),
      
  })

  export default gradeReducer;