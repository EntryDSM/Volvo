import React, { FC, useMemo, useState } from 'react';
import * as S from './style';
import Pagination from '../default/pagination';
import PrecautionModal from '../modal/preview/PrecautionModal';
import ConfirmSubmissionModal from '../modal/preview/ConfirmSubmissionModal';
import useSelectState from '../../util/hooks/default/useSelectState';
import { currentYear, school } from '../../constance/default';
import Pdf from './Pdf';

interface Props {
  preview: Blob | null;
}

const Preview: FC<Props> = props => {
  const [isOpenPrecautionModal, setIsOpenPrecautionMoal] = useState<boolean>(true);
  const [isOpenSubmitModal, setIsOpenSubmitModal] = useState<boolean>(false);
  const educationalStatus = useSelectState().selectType.educationalStatus;

  const pagination = useMemo(() => {
    return (
      <Pagination
        page={'preview'}
        isDisabled={false}
        nextPagePath={'/'}
        isQualification={educationalStatus === 'QUALIFICATION_EXAM' ? true : false}
        prevPagePath={'/introduction'}
        currentPage={educationalStatus === 'QUALIFICATION_EXAM' ? 4 : 5}
        isSuccess={true}
        setModal={setIsOpenSubmitModal}
      />
    );
  }, [educationalStatus]);

  return (
    <S.Preview>
      <div>
        <S.School>{school}</S.School>
        <S.Title>{currentYear}년 지원자 원서 미리보기</S.Title>
      </div>
      <S.PdfHeader>입학원서 미리보기</S.PdfHeader>
      <S.PdfBox>
        <S.Pdf>
          <Pdf {...props} />
        </S.Pdf>
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
