import React from 'react';
import DescriptionAndInput from './descriptionAndInput';
import * as S from './styles'
const CoverLetter = () => {
    return(
        <S.CoverLetterPageWrapper>
            <S.SchoolName>대덕소프트웨어마이스터고등학교</S.SchoolName>
            <S.Title>{'자기소개서 & 학업 계획서'}</S.Title>
            <DescriptionAndInput type="coverLetter" />
            <DescriptionAndInput/>
        </S.CoverLetterPageWrapper>
    )
}
export default CoverLetter;