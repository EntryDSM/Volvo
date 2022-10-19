import React, { FC } from 'react';
import * as S from '../style';
import ProgressContent from './progressContent';
import {
  APPLICATION_PERIOD,
  FIRST_ANNOUNCEMENT,
  INTERVIEW,
  mainProcessNumber,
  SECOND_ANNOUNCEMENT,
  statusType,
} from '../../../constance/main';
interface Props {
  status: statusType;
  date: string;
}

const SECOND_DATE = 86400000;

const Progress: FC<Props> = ({ status, date }) => {
  const getLeftDate = (date: string): number => {
    const dateObj = new Date(date);
    const nowDateObj = new Date();
    // console.log(dateObj.getDate());
    // console.log(nowDateObj.getDate());

    const leftSecond = dateObj.getDate() - nowDateObj.getDate();
    // console.log(leftSecond);
    return leftSecond;
  };
  return (
    <S.Progress>
      <ProgressContent
        progressName='원서 접수'
        isNow={status === APPLICATION_PERIOD}
        isPassed={mainProcessNumber[status] >= 2}
        leftDate={getLeftDate(date)}
      />
      <S.ProgressBlankBar />
      <ProgressContent
        progressName='1차 발표'
        isNow={status === FIRST_ANNOUNCEMENT}
        isPassed={mainProcessNumber[status] >= 4}
        leftDate={getLeftDate(date)}
      />
      <S.ProgressBlankBar />
      <ProgressContent
        progressName='면접'
        isNow={status === INTERVIEW}
        isPassed={mainProcessNumber[status] >= 6}
        leftDate={getLeftDate(date)}
      />
      <S.ProgressBlankBar />
      <ProgressContent
        progressName='발표 및 등록'
        isNow={status === SECOND_ANNOUNCEMENT}
        isPassed={mainProcessNumber[status] >= 8}
        leftDate={getLeftDate(date)}
      />
      <div />
    </S.Progress>
  );
};

export default Progress;
