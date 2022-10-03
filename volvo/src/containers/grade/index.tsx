import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Grade from '../../components/grade';
import { GET_GRADE } from '../../modules/redux/action/grade/interface';
import { isFinalSubmit, isLogin } from '../../util/api/default';
import { useGrade } from '../../util/hooks/grade';
import { useUser } from '../../util/hooks/user';

const GradeContainers = () => {
  const { state: gradeState, setState: setGradeState } = useGrade();
  const { state: userState } = useUser();
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
    dispatch({ type: GET_GRADE });
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [dispatch]);

  const isProspectiveGraduate = useMemo(
    () => userState.educationalStatus === 'PROSPECTIVE_GRADUATE',
    [userState],
  );

  return <Grade {...gradeState} {...setGradeState} isProspectiveGraduate={isProspectiveGraduate} />;
};

export default GradeContainers;
