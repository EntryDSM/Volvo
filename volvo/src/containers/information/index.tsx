import React, { useEffect } from 'react';
import useInformation from '../../util/hooks/information';
import Information from '../../components/information';
import { useDispatch } from 'react-redux';
import { GET_SELECTTYPE } from '../../modules/redux/action/selectType/interface';
import useSelectType from '../../util/hooks/selectType';
import {
  GET_GED_SCORE,
  GET_GRADUATE_INFORMATION,
  GET_INFORMATION,
} from '../../modules/redux/action/information/interface';
import { useUser } from '../../util/hooks/user';
import { useNavigate } from 'react-router-dom';
import { isFinalSubmit, isLogin } from '../../util/api/default';

const InformationContainer = () => {
  const { state, setState } = useInformation();
  const educationalStatus = useSelectType().state.educationalStatus;
  const isFinalSubmitDone = useUser().state.isfinalSubmitDone;
  const accessToken = localStorage.getItem('access_token');
  const userName = useUser().state.name;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: GET_SELECTTYPE });
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    if (educationalStatus === 'GRADUATE') {
      dispatch({ type: GET_GRADUATE_INFORMATION });
    } else if (educationalStatus === 'QUALIFICATION_EXAM') {
      dispatch({ type: GET_INFORMATION });
      dispatch({ type: GET_GED_SCORE });
    } else if (educationalStatus === 'PROSPECTIVE_GRADUATE') {
      dispatch({ type: GET_GRADUATE_INFORMATION });
    }
  }, [educationalStatus]);

  useEffect(() => {
    const final = isFinalSubmit(isFinalSubmitDone);
    const login = isLogin(accessToken);
    if (final || login) navigate('/');
  }, [isFinalSubmitDone, accessToken]);

  return <Information {...state} {...setState} userName={userName} />;
};

export default InformationContainer;
