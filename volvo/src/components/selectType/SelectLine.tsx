import React, { FC, useMemo, useState } from 'react';
import * as S from './style';
import {
  ChooseType,
  ChooseRegion,
  ChooseGraduation,
  ChooseGraduationDate,
  ChooseRemark,
  HeadCount,
} from './column';

interface Props {
  applicationType: string | null;
  socialType: string;
  isDaejeon: boolean | null;
  educationalStatus: string | null;
  graduatedAt: string | null;
  graduationMonth: number;
  graduationYear: number;
  headcount: string | null;
  applicationRemark: string | null;
  setType: (payload: string) => void;
  setSocialType: (payload: string) => void;
  setArea: (payload: boolean) => void;
  setGraduation: (payload: string) => void;
  setGraduationYear: (payload: number) => void;
  setGraduationMonth: (payload: number) => void;
  setRemark: (payload: string) => void;
  setHeadCount: (payload: string) => void;
}

const SelectLine: FC<Props> = props => {
  // 정원 내/외 선택이 필요할 때 주석 제거
  // const { applicationRemark, setHeadCount } = props;
  const [isProspective, setIsProspective] = useState(false);
  // const [isHeadCount, setIsHeadCount] = useState<boolean>(false);

  // const showHeadCount = useMemo(() => {
  //   if (applicationRemark === 'PRIVILEGED_ADMISSION') {
  //     setIsHeadCount(true);
  //     return <HeadCount {...props} />;
  //   } else {
  //     setIsHeadCount(false);
  //     setHeadCount('');
  //   }
  // }, [applicationRemark]);

  return (
    // 정원 내/외 선택시 isHeadCount={isHeadCount}로 수정
    <S.SelectLine isHeadCount={false}>
      <ChooseType {...props} />
      <ChooseRegion {...props} />
      <ChooseGraduation {...props} setIsProspective={setIsProspective} />
      <ChooseGraduationDate {...props} isProspective={isProspective} />
      <ChooseRemark {...props} />
      {/* {showHeadCount} */}
    </S.SelectLine>
  );
};

export default SelectLine;
