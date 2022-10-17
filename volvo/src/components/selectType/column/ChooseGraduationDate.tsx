import React, { FC, useEffect, useMemo } from 'react';
import * as S from '../style';
import { YearSelect, MonthSelect } from '../Select';
import { currentYear } from '../../../constance/default';

interface Props {
  graduatedAt: string | null;
  isProspective: boolean;
  educationalStatus: string | null;
  graduationMonth: number;
  graduationYear: number;
  setGraduationYear: (payload: number) => void;
  setGraduationMonth: (payload: number) => void;
}

const ChooseGraduationDate: FC<Props> = props => {
  const {
    isProspective,
    educationalStatus,
    setGraduationMonth,
    setGraduationYear,
    graduationMonth,
    graduationYear,
    graduatedAt,
  } = props;

  useEffect(() => {
    if (graduatedAt) {
      const graduatedYear = graduatedAt ? graduatedAt.slice(0, 4) : currentYear;
      const graduatedMonth = graduatedAt ? graduatedAt.slice(4) : 3;
      setGraduationYear(Number(graduatedYear));
      setGraduationMonth(Number(graduatedMonth));
    }
  }, [graduatedAt]);

  const graduationDateTitle = useMemo(() => {
    if (educationalStatus === 'QUALIFICATION_EXAM')
      return (
        <S.LineTitle>
          <span>*</span>합격 연월
        </S.LineTitle>
      );
    else
      return (
        <S.LineTitle>
          <span>*</span>졸업 연월
        </S.LineTitle>
      );
  }, [educationalStatus]);

  const explain = useMemo(() => {
    if (educationalStatus === 'QUALIFICATION_EXAM') return;
    else
      return (
        <S.Explain>
          <span>*</span>
          졸업 예정자의 경우 졸업 예정 년,월을 선택해주세요.
        </S.Explain>
      );
  }, [educationalStatus]);

  return (
    <S.Line>
      {graduationDateTitle}
      <YearSelect
        graduationYear={graduationYear}
        setGraduationYear={setGraduationYear}
        disabled={'normal'}
      />
      <S.Date>년</S.Date>
      <MonthSelect graduationMonth={graduationMonth} setGraduationMonth={setGraduationMonth} />
      <S.Date>월</S.Date>
      {explain}
    </S.Line>
  );
};

export default ChooseGraduationDate;
