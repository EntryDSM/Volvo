import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from '../style';
import { dropdown, dropdown_active } from '../../../assets/selectType';
import { currentYear } from '../../../constance/default';

interface Props {
  disabled: string;
  graduationYear: number;
  setGraduationYear: (payload: number) => void;
}

const YearSelect: FC<Props> = props => {
  const { disabled, graduationYear, setGraduationYear } = props;
  const [active, setActive] = useState(false);
  const date = new Date();
  const year = date.getFullYear() - 8;
  const YearArray = [...Array(11)].map((_, i) => i + year);

  useEffect(() => {
    if (disabled === 'block') setGraduationYear(currentYear);
  }, [disabled]);

  const onSelectClick = () => {
    if (disabled === 'normal') {
      if (active === true) {
        setActive(false);
      } else {
        setActive(true);
      }
    }
  };

  const onGraduationYearClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const year = Number(event.currentTarget.innerText);
    setGraduationYear(year);
  };

  const activeImg = useMemo(() => {
    if (active) return <img src={dropdown_active} alt='dropdown_active' />;
    else return <img src={dropdown} alt='dropdown' />;
  }, [active]);

  return (
    <S.Select width={112} disabled={disabled} onClick={onSelectClick}>
      <S.SelectContent width={80}>
        <p>{graduationYear}</p>
        {activeImg}
      </S.SelectContent>
      {disabled === 'normal' && active && (
        <S.SubSelect>
          <S.GrayLine width={80} />
          <div>
            {YearArray.map((_, i) => {
              return <p onClick={onGraduationYearClick}>{i + year - 1}</p>;
            })}
          </div>
        </S.SubSelect>
      )}
    </S.Select>
  );
};

export default YearSelect;
