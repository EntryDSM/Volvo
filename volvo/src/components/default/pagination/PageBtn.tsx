import React, { FC, useMemo } from 'react';
import * as S from './style';
import { left_arrow, right_arrow, right_arrow_disabled } from '../../../assets/default';
import { useNavigate } from 'react-router-dom';

interface Props {
  nextPagePath: string;
  prevPagePath: string;
  isLeft: boolean;
  disabled: boolean;
  isSuccess: boolean | undefined;
}

const PageBtn: FC<Props> = props => {
  const { isLeft, disabled, nextPagePath, prevPagePath, isSuccess } = props;
  const navigate = useNavigate();

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
      if (isLeft) navigate(prevPagePath);
      else {
        if (isSuccess) navigate(nextPagePath);
      }
    }
  };

  return (
    <S.PageBtn disabled={isLeft ? false : disabled} onClick={pageBtnClickHandler}>
      {left}
      {right}
    </S.PageBtn>
  );
};

export default PageBtn;
