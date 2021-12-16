import axios from 'axios';
import { introductionActionType } from '../../action/introduction';
import {
  SUBMIT_INTRODUCTION,
  CHANGE_SELFINTRODUCE,
  CHANGE_STUDYPLAN,
  SAVE_INTRO_FAILURE,
  SAVE_STUDYPLAN_FAILURE,
  GET_STUDYPLAN_FAILURE,
  GET_SELFINTRO_FAILURE,
  GET_SELFINTRO_SUCCESS,
  GET_STUDYPLAN_SUCCESS,
} from '../../action/introduction/interface';
import IntroductionState from './interface';

const initState: IntroductionState = {
  selfIntroduce: '',
  studyPlan: '',
  error: {
    status: 0,
    message: '',
    type: '',
  },
};

const introductionReducer = (
  state: IntroductionState = initState,
  action: introductionActionType,
): IntroductionState => {
  switch (action.type) {
    case CHANGE_SELFINTRODUCE:
      return {
        ...state,
        selfIntroduce: action.payload,
      };
    case CHANGE_STUDYPLAN:
      return {
        ...state,
        studyPlan: action.payload,
      };
    case SAVE_INTRO_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case SAVE_STUDYPLAN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case GET_SELFINTRO_SUCCESS:
      return {
        ...state,
        selfIntroduce: action.payload,
      };
    case GET_STUDYPLAN_SUCCESS:
      return {
        ...state,
        studyPlan: action.payload,
      };
    case GET_STUDYPLAN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case GET_SELFINTRO_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default introductionReducer;
