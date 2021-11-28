import React, { useEffect } from 'react';
import { usePreview } from '../../util/hooks/preview';
import Preview from '../../components/preview';
import { useDispatch } from 'react-redux';
import { GET_PREVIEW } from '../../modules/redux/action/preview/interface';
import { useUser } from '../../util/hooks/user';
import { useNavigate } from 'react-router-dom';
import { GET_SELECTTYPE } from '../../modules/redux/action/selectType/interface';

const PreviewContainer = () => {
  const { state, setState } = usePreview();
  const isFinalSubmitDone = useUser().state.isfinalSubmitDone;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: GET_PREVIEW });
    dispatch({ type: GET_SELECTTYPE });
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  useEffect(() => {
    if (isFinalSubmitDone) {
      alert(
        '최종제출되었습니다. 접근하시려면 최종제출을 취소하고 접근해주세요. 최종제출은 학교에 연락하여 취소하셔야 합니다.',
      );
      navigate('/');
    }
  }, [isFinalSubmitDone]);

  return <Preview {...state} {...setState} />;
};

export default PreviewContainer;
