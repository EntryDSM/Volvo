import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from './style';
import { left_arrow, right_arrow, right_arrow_disabled } from '../../../assets/default';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SELECTTYPE } from '../../../modules/redux/action/selectType/interface';
import {
  GED_SCORE,
  GRADUATE_INFORMATION,
  INFORMATION,
} from '../../../modules/redux/action/information/interface';
import useSelectType from '../../../util/hooks/selectType';
import { SAVE_GRADE } from '../../../modules/redux/action/grade/interface';
import { SAVE_INTRO, SAVE_STUDYPLAN } from '../../../modules/redux/action/introduction/interface';

interface Props {
  nextPagePath: string;
  prevPagePath: string;
  isLeft: boolean;
  disabled: boolean;
  page: string;
  isSuccess: boolean | undefined;
  setModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const PageBtn: FC<Props> = props => {
  const { isLeft, disabled, nextPagePath, prevPagePath, isSuccess, page, setModal } = props;
  const [isOnClick, setIsOnClick] = useState(false);
  const educationalStatus = useSelectType().state.educationalStatus;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const left = useMemo(() => {
    if (isLeft) {
      return (
        <>
          <S.ArrowImg src={left_arrow} />
          <p>이전</p>
        </>
      );
    } else return <></>;
  }, [isLeft]);

  const right = useMemo(() => {
    if (!isLeft) {
      return (
        <>
          <p>다음</p>
          <S.ArrowImg src={disabled ? right_arrow_disabled : right_arrow} />
        </>
      );
    } else return <></>;
  }, [isLeft, disabled]);

  const pageBtnClickHandler = () => {
    if (!disabled) {
      if (page === 'select-type') dispatch({ type: SELECTTYPE });
      else if (page === 'information') {
        if (educationalStatus === 'QUALIFICATION_EXAM') {
          dispatch({ type: INFORMATION });
          dispatch({ type: GED_SCORE });
        } else if (
          educationalStatus === 'GRADUATE' ||
          educationalStatus === 'PROSPECTIVE_GRADUATE'
        ) {
          dispatch({ type: INFORMATION });
          dispatch({ type: GRADUATE_INFORMATION });
        }
      } else if (page === 'grade') dispatch({ type: SAVE_GRADE });
      else if (page === 'introduction') {
        dispatch({ type: SAVE_INTRO });
        dispatch({ type: SAVE_STUDYPLAN });
      } else if (page === 'preview') {
        setModal && setModal(true);
      }
      setIsOnClick(true);
    }
  };

  useEffect(() => {
    if (isOnClick && !disabled) {
      if (nextPagePath === '/') {
        if (isLeft) navigate(prevPagePath);
        else setModal && setModal(true);
      } else {
        if (isLeft) navigate(prevPagePath);
        else {
          if (isSuccess) navigate(nextPagePath);
        }
      }
    }
  }, [isOnClick, disabled, isSuccess, isLeft, nextPagePath, prevPagePath]);

  return (
    <S.PageBtn disabled={isLeft ? false : disabled} onClick={pageBtnClickHandler}>
      {left}
      {right}
    </S.PageBtn>
  );
};

export default PageBtn;
