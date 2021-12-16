import axios from 'axios';
import React, { useEffect } from 'react';
import DescriptionAndInput from './descriptionAndInput';
import * as S from './styles';

interface Props {
  onChangeSelfIntroduce: (string: string) => void;
  onChangeStudyPlan: (str: string) => void;
  selfIntroduceText: string;
  studyPlanText: string;
  getSelfStudy: () => void;
}

const Introduction = ({
  onChangeSelfIntroduce,
  onChangeStudyPlan,
  selfIntroduceText,
  studyPlanText,
  getSelfStudy,
}: Props) => {
  useEffect(() => {
    getSelfStudy();
  }, []);
  return (
    <S.CoverLetterPageWrapper>
      <S.SchoolName>대덕소프트웨어마이스터고등학교</S.SchoolName>
      <S.Title>{'자기소개서 & 학업 계획서'}</S.Title>
      <DescriptionAndInput
        onChangeText={onChangeSelfIntroduce}
        text={selfIntroduceText}
        type='coverLetter'
      />
      <DescriptionAndInput onChangeText={onChangeStudyPlan} text={studyPlanText} />
    </S.CoverLetterPageWrapper>
  );
};
export default Introduction;
