import React, { FC, useMemo } from 'react';
import * as S from '../style';

interface Props {
  onClick: () => void;
  isAble: boolean;
}

const MainButton: FC<Props> = ({ children, onClick, isAble }) => {
  const btnText = useMemo(() => {
    if (children === '제출 서류 다운로드')
      return <p style={{ fontSize: '1.5625rem' }}>{children}</p>;
    else return <p>{children}</p>;
  }, [children]);

  return (
    <S.MainButton onClick={onClick} isAble={isAble}>
      {btnText}
      <div />
    </S.MainButton>
  );
};

export default MainButton;
