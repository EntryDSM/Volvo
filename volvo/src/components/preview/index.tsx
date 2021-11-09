import React, { FC, useMemo, useState } from 'react';
import * as S from './style';
import Pagination from '../default/pagination';
import PrecautionModal from '../modal/preview/PrecautionModal';
import ConfirmSubmissionModal from '../modal/preview/ConfirmSubmissionModal';
import useSelectState from '../../util/hooks/default/useSelectState';
import { currentYear, school } from '../../constance/default';

interface Props {
  preview: string;
}

const Preview: FC<Props> = props => {
  const { preview } = props;
  const [isOpenPrecautionModal, setIsOpenPrecautionMoal] = useState(true);
  const [isOpenSubmitModal, setIsOpenSubmitModal] = useState(false);
  const educationalStatus = useSelectState().selectType.educationalStatus;

  const pagination = useMemo(() => {
    if (educationalStatus === 'QUALIFICATION_EXAM') return <Pagination />;
    else return <Pagination />;
  }, [educationalStatus]);

  return (
    <S.Preview>
      <div>
        <S.School>{school}</S.School>
        <S.Title>{currentYear}년 지원자 원서 미리보기</S.Title>
      </div>
      <S.PdfHeader>입학원서 미리보기</S.PdfHeader>
      <S.PdfBox>
        <S.Pdf></S.Pdf>
      </S.PdfBox>
      {pagination}
      {isOpenPrecautionModal && (
        <PrecautionModal setIsOpenPrecautionMoal={setIsOpenPrecautionMoal} />
      )}
      {isOpenSubmitModal && <ConfirmSubmissionModal setIsOpenSubmitModal={setIsOpenSubmitModal} />}
    </S.Preview>
  );
};

export default Preview;
