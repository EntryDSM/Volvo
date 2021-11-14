import { introductionActionType } from '../../action/introduction';
import { ONCHANGE_SELF_INTRODUCE, ONCHANGE_STUDY_PLAN } from '../../action/introduction/interface';
import IntroductionState from './interface';

const initState: IntroductionState = {
  selfIntroduce: '',
  studyPlan: '',
};

const introductionReducer = (
  state: IntroductionState = initState,
  action: introductionActionType,
): IntroductionState => {
  switch (action.type) {
    case ONCHANGE_SELF_INTRODUCE:
      return {
        ...state,
        selfIntroduce: action.payload,
      };
    case ONCHANGE_STUDY_PLAN:
      return {
        ...state,
        studyPlan: action.payload,
      };
    default:
      return state;
  }
};
export default introductionReducer;
