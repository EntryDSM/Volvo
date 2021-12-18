import React, { useEffect } from 'react';
import { usePreview } from '../../util/hooks/preview';
import Preview from '../../components/preview';
import { useDispatch } from 'react-redux';
import { GET_PREVIEW } from '../../modules/redux/action/preview/interface';
import { useUser } from '../../util/hooks/user';
import { useNavigate } from 'react-router-dom';
import { GET_SELECTTYPE } from '../../modules/redux/action/selectType/interface';
import { isFinalSubmit, isLogin } from '../../util/api/default';

const PreviewContainer = () => {
  const { state, setState } = usePreview();
  const isFinalSubmitDone = useUser().state.isfinalSubmitDone;
  const accessToken = localStorage.getItem('access_token');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const final = isFinalSubmit(isFinalSubmitDone);
    const login = isLogin(accessToken);
    if (final || login) navigate('/');
  }, [isFinalSubmitDone, accessToken]);

  useEffect(() => {
    dispatch({ type: GET_PREVIEW });
    dispatch({ type: GET_SELECTTYPE });
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return <Preview {...state} {...setState} />;
};

export default PreviewContainer;
