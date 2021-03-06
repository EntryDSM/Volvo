import React, { FC, useMemo, useState } from 'react';
import { dropdown, dropdown_active } from '../../../assets/selectType';
import * as S from '../style';

interface Props {
  birthMonth: number;
  setBirthMonth: (payload: number) => void;
}

const MonthSelect: FC<Props> = props => {
  const { birthMonth, setBirthMonth } = props;
  const [active, setActive] = useState(false);
  const monthArray = [...Array(12)].map((_, i) => i + 1);

  const selectClickHandler = () => {
    setActive(!active);
  };

  const birthMonthClickHandler = (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    setBirthMonth(Number(event.currentTarget.innerText));
  };

  const month = useMemo(() => {
    if (active) {
      return (
        <S.SubSelect>
          <S.GrayLine width={52} />
          {monthArray.map(month => {
            return <p onClick={birthMonthClickHandler}>{month}</p>;
          })}
        </S.SubSelect>
      );
    }
  }, [active]);

  const activeImg = useMemo(() => {
    if (active) return <img src={dropdown_active} />;
    else return <img src={dropdown} />;
  }, [active]);

  return (
    <S.Select width={83} onClick={selectClickHandler}>
      <S.SelectContent width={52}>
        <p>{birthMonth}</p>
        {activeImg}
      </S.SelectContent>
      {month}
    </S.Select>
  );
};

export default MonthSelect;
