import { introductionActionType } from '../../action/introduction';
import {
  CHANGE_SELFINTRODUCE,
  CHANGE_STUDYPLAN,
  SAVE_INTRO_FAILURE,
  SAVE_STUDYPLAN_FAILURE,
  GET_STUDYPLAN_FAILURE,
  GET_SELFINTRO_FAILURE,
  GET_SELFINTRO_SUCCESS,
  GET_STUDYPLAN_SUCCESS,
  SAVE_INTRO,
  SAVE_INTRO_SUCCESS,
  SAVE_STUDYPLAN,
  SAVE_STUDYPLAN_SUCCESS,
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
  isSuccessSetIntro: undefined,
  isSuccessSetStudy: undefined,
};

const introductionReducer = (
  state: IntroductionState = initState,
  action: introductionActionType,
): IntroductionState => {
  switch (action.type) {
    case CHANGE_SELFINTRODUCE:
      return {
        ...state,
        isSuccessSetIntro: undefined,
        selfIntroduce: action.payload,
      };
    case CHANGE_STUDYPLAN:
      return {
        ...state,
        isSuccessSetStudy: undefined,
        studyPlan: action.payload,
      };
    case SAVE_INTRO:
      return {
        ...state,
        isSuccessSetIntro: undefined,
      };
    case SAVE_INTRO_SUCCESS:
      return {
        ...state,
        isSuccessSetIntro: true,
      };
    case SAVE_INTRO_FAILURE:
      return {
        ...state,
        isSuccessSetIntro: false,
        error: action.payload,
      };
    case SAVE_STUDYPLAN:
      return {
        ...state,
        isSuccessSetStudy: undefined,
      };
    case SAVE_STUDYPLAN_SUCCESS:
      return {
        ...state,
        isSuccessSetStudy: true,
      };
    case SAVE_STUDYPLAN_FAILURE:
      return {
        ...state,
        isSuccessSetStudy: false,
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
