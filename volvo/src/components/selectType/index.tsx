import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from './style';
import Pagination from '../default/pagination';
import SelectLine from './SelectLine';
import ToastPopUp from '../default/toastPopUp';
import { currentYear, school } from '../../constance/default';

interface Props {
  applicationType: string | null;
  socialType: string;
  isDaejeon: boolean | null;
  educationalStatus: string | null;
  graduatedAt: string | null;
  graduationMonth: number;
  graduationYear: number;
  applicationRemark: string | null;
  isSuccessSaveSelectType: boolean | undefined;
  isOutOfHeadcount: boolean;
  setType: (payload: string) => void;
  setSocialType: (payload: string) => void;
  setArea: (payload: boolean) => void;
  setGraduation: (payload: string) => void;
  setGraduationYear: (payload: number) => void;
  setGraduationMonth: (payload: number) => void;
  setRemark: (payload: string) => void;
  setIsOutOfHeadCount: (payload: boolean) => void;
}

const SelectType: FC<Props> = props => {
  const {
    applicationType,
    socialType,
    isDaejeon,
    educationalStatus,
    graduationYear,
    graduationMonth,
    applicationRemark,
    isSuccessSaveSelectType,
  } = props;
  const content = [
    applicationType,
    socialType,
    isDaejeon,
    educationalStatus,
    graduationYear,
    graduationMonth,
    applicationRemark,
  ];
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (
      applicationType !== '' &&
      isDaejeon !== null &&
      educationalStatus !== '' &&
      graduationYear !== 0 &&
      graduationMonth !== 0
    )
      setDisabled(false);
    else setDisabled(true);
  }, [...content]);

  const pagination = useMemo(() => {
    return (
      <Pagination
        page={'select-type'}
        isDisabled={disabled}
        nextPagePath={'/information'}
        isQualification={educationalStatus === 'QUALIFICATION_EXAM' ? true : false}
        prevPagePath={'/'}
        currentPage={1}
        isSuccess={isSuccessSaveSelectType}
      />
    );
  }, [disabled, educationalStatus, isSuccessSaveSelectType]);

  return (
    <S.SelectType>
      <div>
        <S.School>{school}</S.School>
        <S.Title>{currentYear}년 지원자 전형 구분</S.Title>
      </div>
      <SelectLine {...props} />
      {pagination}
      <ToastPopUp isSuccessSave={isSuccessSaveSelectType} />
    </S.SelectType>
  );
};

export default SelectType;
