import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Introduction from '../../components/introduction';
import {
  setStudyPlan,
  setSelfIntroduce,
  setGetIntro,
  setGetStudy,
} from '../../modules/redux/action/introduction';
import { reducerType } from '../../modules/redux/reducer';

const IntroductionContainer = () => {
  const dispatch = useDispatch();
  const onChangeSelfIntroduce = (string: string) => {
    dispatch(setSelfIntroduce(string));
  };
  const onChangeStudyPlan = (string: string) => {
    dispatch(setStudyPlan(string));
  };
  const getSelfStudy = () => {
    dispatch(setGetIntro());
    dispatch(setGetStudy());
  };
  const selfIntroduceText = useSelector((state: reducerType) => state.introduction.selfIntroduce);
  const studyPlanText = useSelector((state: reducerType) => state.introduction.studyPlan);
  console.log('self : ', selfIntroduceText);
  console.log('study : ', studyPlanText);
  return (
    <Introduction
      onChangeSelfIntroduce={onChangeSelfIntroduce}
      onChangeStudyPlan={onChangeStudyPlan}
      selfIntroduceText={selfIntroduceText}
      studyPlanText={studyPlanText}
      getSelfStudy={getSelfStudy}
    />
  );
};
export default IntroductionContainer;
