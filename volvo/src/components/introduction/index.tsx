import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import Pagination from '../default/pagination';
import ToastPopUp from '../default/toastPopUp';
import DescriptionAndInput from './descriptionAndInput';
import * as S from './styles';

interface Props {
  onChangeSelfIntroduce: (string: string) => void;
  onChangeStudyPlan: (str: string) => void;
  selfIntroduceText: string;
  studyPlanText: string;
  educationalStatus: string | null;
  isSuccessSetStudy: boolean | undefined;
  isSuccessSetIntro: boolean | undefined;
  getSelfStudy: () => void;
}

const Introduction = ({
  onChangeSelfIntroduce,
  onChangeStudyPlan,
  selfIntroduceText,
  studyPlanText,
  getSelfStudy,
  educationalStatus,
  isSuccessSetStudy,
  isSuccessSetIntro,
}: Props) => {
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    getSelfStudy();
  }, []);

  useEffect(() => {
    if (selfIntroduceText !== '' && studyPlanText !== '') setDisabled(false);
    else setDisabled(true);
  }, [selfIntroduceText, studyPlanText]);

  const pagination = useMemo(() => {
    return (
      <Pagination
        isDisabled={disabled}
        nextPagePath={'/preview'}
        isQualification={educationalStatus === 'QUALIFICATION_EXAM' ? true : false}
        prevPagePath={educationalStatus === 'QUALIFICATION_EXAM' ? '/information' : '/grade'}
        currentPage={educationalStatus === 'QUALIFICATION_EXAM' ? 3 : 4}
        page={'introduction'}
        isSuccess={isSuccessSetIntro && isSuccessSetStudy}
      />
    );
  }, [disabled, educationalStatus, isSuccessSetStudy, isSuccessSetIntro]);

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
      {pagination}
      <ToastPopUp isSuccessSave={isSuccessSetIntro} />
      <ToastPopUp isSuccessSave={isSuccessSetStudy} />
    </S.CoverLetterPageWrapper>
  );
};
export default Introduction;
