import React from 'react';
import DescriptionAndInput from './descriptionAndInput';
import * as S from './styles';

interface Props {
  onChangeSelfIntroduce: (str: string) => void;
  onChangeStudyPlan: (str: string) => void;
  selfIntroduceText: string;
  studyPlanText: string;
}

const Introduction = ({
  onChangeSelfIntroduce,
  onChangeStudyPlan,
  selfIntroduceText,
  studyPlanText,
}: Props) => {
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
