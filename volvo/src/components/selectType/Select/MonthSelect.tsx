import React, { FC, useMemo, useState } from 'react';
import * as S from '../style';
import { dropdown, dropdown_active } from '../../../assets/selectType';

interface Props {
  graduationMonth: number;
  setGraduationMonth: (payload: number) => void;
}

const MonthSelect: FC<Props> = props => {
  const { graduationMonth, setGraduationMonth } = props;
  const [active, setActive] = useState(false);
  const [disabled, setDisabled] = useState('normal');
  const JanuaryToDecember = [...Array(12)].map((_, i) => i + 1);

  const onSelectClick = () => {
    if (active === true) {
      setActive(false);
      setDisabled('normal');
    } else {
      setActive(true);
      setDisabled('enabled');
    }
  };

  const onGraduationMonthClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const month = Number(event.currentTarget.innerText);
    setGraduationMonth(month);
  };

  const activeImg = useMemo(() => {
    if (active) return <img src={dropdown_active} alt='dropdown_active' />;
    else return <img src={dropdown} alt='dropdown' />;
  }, [active]);

  return (
    <S.Select width={105} disabled={disabled} onClick={onSelectClick}>
      <S.SelectContent width={74}>
        <p>{graduationMonth}</p>
        {activeImg}
      </S.SelectContent>
      {active && (
        <S.SubSelect>
          <S.GrayLine width={74} />
          <div>
            {JanuaryToDecember.map(month => {
              return <p onClick={onGraduationMonthClick}>{month}</p>;
            })}
          </div>
        </S.SubSelect>
      )}
    </S.Select>
  );
};

export default MonthSelect;
