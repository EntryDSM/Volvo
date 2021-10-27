import React, { FC, useMemo } from 'react';
import * as S from './style';
import { SCHOOL, SELECTTYPE } from '../../constance/selectType';
import Pagination from '../default/pagination';
import SelectLine from './SelectLine';
import ToastPopUp from '../default/toastPopUp';

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
  headcount: string | null;
  setType: (payload: string) => void;
  setSocialType: (payload: string) => void;
  setArea: (payload: boolean) => void;
  setGraduation: (payload: string) => void;
  setGraduationYear: (payload: number) => void;
  setGraduationMonth: (payload: number) => void;
  setRemark: (payload: string) => void;
  setHeadCount: (payload: string) => void;
}

const SelectType: FC<Props> = ({
  applicationType,
  socialType,
  isDaejeon,
  educationalStatus,
  graduatedAt,
  graduationMonth,
  graduationYear,
  applicationRemark,
  isSuccessSaveSelectType,
  headcount,
  setType,
  setSocialType,
  setArea,
  setGraduation,
  setGraduationMonth,
  setGraduationYear,
  setRemark,
  setHeadCount,
}) => {
  const pagination = useMemo(() => {
    if (
      applicationType &&
      isDaejeon !== undefined &&
      educationalStatus &&
      graduationYear &&
      graduationMonth
    ) {
      if (
        applicationType !== 'SOCIAL' ||
        (applicationType === 'SOCIAL' &&
          applicationRemark !== null &&
          applicationRemark !== 'NATIONAL_MERIT' &&
          applicationRemark !== 'PRIVILEGED_ADMISSION')
      ) {
        if (educationalStatus === 'QUALIFICATION_EXAM') return <Pagination />;
        else return <Pagination />;
      } else {
        if (educationalStatus === 'QUALIFICATION_EXAM') return <Pagination />;
        else return <Pagination />;
      }
    } else {
      if (educationalStatus === 'QUALIFICATION_EXAM') return <Pagination />;
      else return <Pagination />;
    }
  }, [
    applicationType,
    isDaejeon,
    educationalStatus,
    graduationYear,
    graduationMonth,
    applicationRemark,
  ]);

  return (
    <S.SelectType>
      <div>
        <S.School>{SCHOOL}</S.School>
        <S.Title>{SELECTTYPE}</S.Title>
      </div>
      <SelectLine
        applicationType={applicationType}
        isDaejeon={isDaejeon}
        educationalStatus={educationalStatus}
        graduationMonth={graduationMonth}
        graduationYear={graduationYear}
        applicationRemark={applicationRemark}
        socialType={socialType}
        headcount={headcount}
        graduatedAt={graduatedAt}
        setType={setType}
        setSocialType={setSocialType}
        setArea={setArea}
        setGraduation={setGraduation}
        setGraduationMonth={setGraduationMonth}
        setGraduationYear={setGraduationYear}
        setRemark={setRemark}
        setHeadCount={setHeadCount}
      />
      {pagination}
      <ToastPopUp isSuccessSave={isSuccessSaveSelectType} />
    </S.SelectType>
  );
};

export default SelectType;
