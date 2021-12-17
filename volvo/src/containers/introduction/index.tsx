import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Introduction from '../../components/introduction';
import {
  setStudyPlan,
  setSelfIntroduce,
  setGetIntro,
  setGetStudy,
} from '../../modules/redux/action/introduction';
import { GET_SELECTTYPE } from '../../modules/redux/action/selectType/interface';
import { reducerType } from '../../modules/redux/reducer';
import useSelectType from '../../util/hooks/selectType';

const IntroductionContainer = () => {
  const dispatch = useDispatch();
  const educationalStatus = useSelectType().state.educationalStatus;

  useEffect(() => {
    dispatch({ type: GET_SELECTTYPE });
  }, []);

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
  const isSuccessSetIntro = useSelector(
    (state: reducerType) => state.introduction.isSuccessSetIntro,
  );
  const isSuccessSetStudy = useSelector(
    (state: reducerType) => state.introduction.isSuccessSetStudy,
  );

  return (
    <Introduction
      onChangeSelfIntroduce={onChangeSelfIntroduce}
      onChangeStudyPlan={onChangeStudyPlan}
      selfIntroduceText={selfIntroduceText}
      studyPlanText={studyPlanText}
      getSelfStudy={getSelfStudy}
      educationalStatus={educationalStatus}
      isSuccessSetIntro={isSuccessSetIntro}
      isSuccessSetStudy={isSuccessSetStudy}
    />
  );
};
export default IntroductionContainer;
