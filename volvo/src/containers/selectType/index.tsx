import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GET_SELECTTYPE } from '../../modules/redux/action/selectType/interface';
import SelectType from '../../components/selectType';
import useSelectType from '../../util/hooks/selectType';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../util/hooks/user';
import { isFinalSubmit, isLogin } from '../../util/api/default';

const SelectTypeContainer = () => {
  const { state, setState } = useSelectType();
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
    dispatch({ type: GET_SELECTTYPE });
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return <SelectType {...state} {...setState} />;
};

export default SelectTypeContainer;
