import React, { FC, useMemo } from 'react';
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

const SelectType: FC<Props> = props => {
  const { isSuccessSaveSelectType } = props;
  const pagination = useMemo(() => {}, []);

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
