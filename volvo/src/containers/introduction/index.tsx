import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Introduction from '../../components/introduction';
import { setSelfIntroduce, setStudyPlan } from '../../modules/redux/action/introduction';
import { ReducerType } from '../../modules/redux/store';

const IntroductionContainer = () => {
  const dispatch = useDispatch();
  const onChangeSelfIntroduce = (str: string) => {
    dispatch(setSelfIntroduce(str));
  };
  const onChangeStudyPlan = (str: string) => {
    dispatch(setStudyPlan(str));
  };
  const selfIntroduceText = useSelector((state: ReducerType) => state.introduction.selfIntroduce);
  const studyPlanText = useSelector((state: ReducerType) => state.introduction.studyPlan);
  return (
    <Introduction
      onChangeSelfIntroduce={onChangeSelfIntroduce}
      onChangeStudyPlan={onChangeStudyPlan}
      selfIntroduceText={selfIntroduceText}
      studyPlanText={studyPlanText}
    />
  );
};
export default IntroductionContainer;
