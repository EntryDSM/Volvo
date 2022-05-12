import React, { FC, useEffect, useState } from 'react';
import { HEADCOUNT } from '../../../constance';
import * as S from '../style';

interface Props {
  headcount: string | null;
  setHeadCount: (payload: string) => void;
}

const HeadCount: FC<Props> = props => {
  const { headcount, setHeadCount } = props;
  const [isCheck, setIsCheck] = useState({ inOfHeadCount: false, outOfHeadCount: false });

  const onCheckBtnClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let dataId = event.currentTarget.dataset.id as 'inOfHeadCount' | 'outOfHeadCount';
    switch (dataId) {
      case 'inOfHeadCount':
        setIsCheck({ inOfHeadCount: !isCheck[dataId], outOfHeadCount: false });
        if (!isCheck[dataId]) setHeadCount('IN_OF_HEADCOUNT');
        else setHeadCount('');
        break;
      case 'outOfHeadCount':
        setIsCheck({ inOfHeadCount: false, outOfHeadCount: !isCheck[dataId] });
        if (!isCheck[dataId]) setHeadCount('OUT_OF_HEADCOUNT');
        else setHeadCount('');
        break;
    }
  };

  useEffect(() => {
    if (headcount === 'IN_OF_HEADCOUNT') setIsCheck({ inOfHeadCount: true, outOfHeadCount: false });
    else if (headcount === 'OUT_OF_HEADCOUNT')
      setIsCheck({ inOfHeadCount: false, outOfHeadCount: true });
  }, [headcount]);

  return (
    <S.Line>
      <S.LineTitle>정원 내외</S.LineTitle>
      {HEADCOUNT.map(data => {
        return (
          <S.SelectBox margin={100} key={data.id}>
            <S.CheckCircle onClick={onCheckBtnClick} data-id={data.id}>
              {isCheck[data.id] && <S.CheckedCircle />}
            </S.CheckCircle>
            <p data-id={data.id} onClick={onCheckBtnClick}>
              {data.content}
            </p>
          </S.SelectBox>
        );
      })}
    </S.Line>
  );
};

export default HeadCount;
