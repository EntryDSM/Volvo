import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Introduction from '../../components/introduction';
import {
  setStudyPlan,
  setSelfIntroduce,
  setGetIntro,
  setGetStudy,
} from '../../modules/redux/action/introduction';
import { GET_SELECTTYPE } from '../../modules/redux/action/selectType/interface';
import { reducerType } from '../../modules/redux/reducer';
import { isFinalSubmit, isLogin } from '../../util/api/default';
import useSelectType from '../../util/hooks/selectType';
import { useUser } from '../../util/hooks/user';

const IntroductionContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isFinalSubmitDone = useUser().state.isfinalSubmitDone;
  const accessToken = localStorage.getItem('access_token');
  const educationalStatus = useSelectType().state.educationalStatus;

  useEffect(() => {
    const final = isFinalSubmit(isFinalSubmitDone);
    const login = isLogin(accessToken);
    if (final || login) navigate('/');
  }, [isFinalSubmitDone, accessToken]);

  useEffect(() => {
    dispatch({ type: GET_SELECTTYPE });
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
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
