import { FC, useState } from 'react';
import * as S from './style';
import {
  ChooseType,
  ChooseRegion,
  ChooseGraduation,
  ChooseGraduationDate,
  ChooseRemark,
} from './column';

interface Props {
  applicationType: string | null;
  socialType: string;
  isDaejeon: boolean | null;
  educationalStatus: string | null;
  graduatedAt: string | null;
  graduationMonth: number;
  graduationYear: number;
  isOutOfHeadcount: boolean;
  applicationRemark: string | null;
  setType: (payload: string) => void;
  setSocialType: (payload: string) => void;
  setArea: (payload: boolean) => void;
  setGraduation: (payload: string) => void;
  setGraduationYear: (payload: number) => void;
  setGraduationMonth: (payload: number) => void;
  setRemark: (payload: string) => void;
  setIsOutOfHeadCount: (payload: boolean) => void;
}

const SelectLine: FC<Props> = props => {
  // 정원 내/외 선택이 필요할 때 주석 제거
  const [isProspective, setIsProspective] = useState(false);

  return (
    // 정원 내/외 선택시 isHeadCount={isHeadCount}로 수정
    <S.SelectLine isHeadCount={false}>
      <ChooseType {...props} />
      <ChooseRegion {...props} />
      <ChooseGraduation {...props} setIsProspective={setIsProspective} />
      <ChooseGraduationDate {...props} isProspective={isProspective} />
      <ChooseRemark {...props} />
    </S.SelectLine>
  );
};

export default SelectLine;
