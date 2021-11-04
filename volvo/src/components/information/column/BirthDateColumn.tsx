import React, { FC } from 'react';
import * as S from '../style';
import { YearSelect, MonthSelect, DateSelect } from '../select';

interface Props {
  width: number;
  birthYear: number;
  birthMonth: number;
  birthDate: number;
  setBirthYear: (payload: number) => void;
  setBirthMonth: (payload: number) => void;
  setBirthDate: (payload: number) => void;
}

const BirthDateColumn: FC<Props> = props => {
  return (
    <S.InformationLine {...props}>
      <S.InformationLineTitle>
        <span>*</span>생년월일
      </S.InformationLineTitle>
      <YearSelect {...props} />
      <S.Unit>년</S.Unit>
      <MonthSelect {...props} />
      <S.Unit>월</S.Unit>
      <DateSelect {...props} />
      <S.Unit>일</S.Unit>
    </S.InformationLine>
  );
};

export default BirthDateColumn;
