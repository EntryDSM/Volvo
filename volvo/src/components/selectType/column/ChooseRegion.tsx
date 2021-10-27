import React, { FC, useEffect, useState } from 'react';
import * as S from '../style';
import { AREA } from '../../../constance/selectType';

interface Props {
  setArea: (payload: boolean) => void;
  isDaejeon: boolean | null;
}

const ChooseRegion: FC<Props> = ({ setArea, isDaejeon }) => {
  const [isCheck, setIsCheck] = useState({ daejeon: false, country: false });
  const [region, setRegion] = useState('');
  useEffect(() => {
    if (isDaejeon) setRegion('daejeon');
    else if (isDaejeon === null) setRegion('');
    else setRegion('country');
  }, [isDaejeon]);

  useEffect(() => {
    if (region === 'daejeon') setIsCheck({ daejeon: true, country: false });
    else if (region === 'country') setIsCheck({ daejeon: false, country: true });
    else setIsCheck({ daejeon: false, country: false });
  }, [region]);

  const onCheckBtnClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    let dataId = event.currentTarget.dataset.id;
    switch (dataId) {
      case 'daejeon':
        setIsCheck({ daejeon: true, country: false });
        setArea(true);
        break;
      case 'country':
        setIsCheck({ daejeon: false, country: true });
        setArea(false);
        break;
    }
  };

  return (
    <S.Line>
      <S.LineTitle>
        <span>*</span>지역 선택
      </S.LineTitle>
      {AREA.map(data => {
        return (
          <S.SelectBox margin={117} key={data.id}>
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

export default ChooseRegion;
