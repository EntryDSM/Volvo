import React, { FC, useEffect, useMemo, useState } from 'react';
import * as S from './style';
import Pagination from '../default/pagination';
import InformationForm from './InformationForm';
import SearchSchoolModal from '../modal/searchSchool/SearchSchool';
import AddressModal from '../modal/address';
import useSelectType from '../../util/hooks/selectType';
import ToastPopUp from '../default/toastPopUp';
import { currentYear, school } from '../../constance/default';
import { addressType, schoolArrayType, searchSchoolQueryType } from '../../types';

interface Props {
  userName: string;
  sex: string;
  birthYear: number;
  birthMonth: number;
  birthDate: number;
  parentName: string;
  parentTel: string;
  telephoneNumber: string;
  address: string;
  detailAddress: string;
  postCode: string;
  schoolCode: string;
  schoolTel: string;
  stdGrade: string;
  stdClass: string;
  stdNumber: string;
  schoolName: string;
  totalScore: number;
  photoFileName: string;
  pictureUrl: string;
  userPicture: File | null;
  page: number;
  size: number;
  totalPages: number;
  content: Array<schoolArrayType>;
  isSuccessSaveInformation: boolean | undefined;
  isSuccessSaveUserPicture: boolean | undefined;
  isSuccessSaveGraduateInformation: boolean | undefined;
  isSuccessSaveGedScore: boolean | undefined;
  setInput: (payload: { name: string; value: string }) => void;
  setSex: (payload: string) => void;
  setBirthYear: (payload: number) => void;
  setBirthMonth: (payload: number) => void;
  setBirthDate: (payload: number) => void;
  setImageUrl: (payload: string) => void;
  setSchoolCode: (payload: string) => void;
  setSchoolName: (payload: string) => void;
  setAddress: (payload: addressType) => void;
  setUserPicture: (payload: File) => void;
  searchSchool: (payload: searchSchoolQueryType) => void;
  setGedScore: (payload: number) => void;
}

const Information: FC<Props> = props => {
  const {
    sex,
    birthYear,
    birthMonth,
    birthDate,
    parentName,
    parentTel,
    telephoneNumber,
    address,
    detailAddress,
    postCode,
    schoolCode,
    schoolTel,
    stdGrade,
    stdClass,
    stdNumber,
    photoFileName,
    totalPages,
    pictureUrl,
    totalScore,
    content,
    isSuccessSaveInformation,
    isSuccessSaveUserPicture,
    isSuccessSaveGraduateInformation,
    isSuccessSaveGedScore,
    searchSchool,
  } = props;
  const [isClickSearchBtn, setIsClickSearchBtn] = useState<boolean>(false);
  const [isClickAddressBtn, setIsClickAddressBtn] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const educationalStatus = useSelectType().state.educationalStatus;
  const contentArray = [
    sex,
    birthYear,
    birthMonth,
    birthDate,
    parentName,
    parentTel,
    telephoneNumber,
    address,
    detailAddress,
    postCode,
  ];
  const schoolArray = [schoolCode, schoolTel, stdGrade, stdClass, stdNumber];

  const searchSchoolModal = useMemo(() => {
    if (isClickSearchBtn)
      return <SearchSchoolModal {...props} setIsClickSearchBtn={setIsClickSearchBtn} />;
    else return;
  }, [isClickSearchBtn, content, totalPages, searchSchool]);

  const addressModal = useMemo(() => {
    if (isClickAddressBtn)
      return <AddressModal setIsClickAddressBtn={setIsClickAddressBtn} {...props} />;
    else return;
  }, [isClickAddressBtn]);

  useEffect(() => {
    if (
      sex !== null &&
      birthYear !== 0 &&
      birthMonth !== 0 &&
      birthDate !== 0 &&
      parentName !== '' &&
      parentTel !== '' &&
      telephoneNumber !== '' &&
      address !== '' &&
      detailAddress !== '' &&
      postCode !== '' &&
      (photoFileName || isSuccessSaveUserPicture)
    ) {
      if (educationalStatus === 'QUALIFICATION_EXAM') {
        if (totalScore !== 0) setDisabled(false);
        else setDisabled(true);
      } else {
        if (schoolCode !== '' && schoolTel !== '' && stdClass !== '' && stdNumber !== '')
          setDisabled(false);
        else setDisabled(true);
      }
    } else setDisabled(true);
  }, [...contentArray, ...schoolArray, totalScore, isSuccessSaveUserPicture]);

  const pagination = useMemo(() => {
    return (
      <Pagination
        isDisabled={disabled}
        nextPagePath={educationalStatus === 'QUALIFICATION_EXAM' ? '/introduction' : '/grade'}
        isQualification={educationalStatus === 'QUALIFICATION_EXAM' ? true : false}
        prevPagePath={'/select-type'}
        currentPage={2}
        page={'information'}
        isSuccess={
          educationalStatus === 'QUALIFICATION_EXAM'
            ? isSuccessSaveInformation && isSuccessSaveGedScore
            : isSuccessSaveInformation && isSuccessSaveGraduateInformation
        }
      />
    );
  }, [
    disabled,
    educationalStatus,
    isSuccessSaveGraduateInformation,
    isSuccessSaveInformation,
    isSuccessSaveGedScore,
  ]);

  return (
    <S.Information>
      <div>
        <S.School>{school}</S.School>
        <S.Title>{currentYear}년 지원자 인적사항</S.Title>
      </div>
      <S.InfoExplain>
        저장된 정보가 뜨지 않을 때 새로고침하시면 저장된 정보를 확인하실 수 있습니다.
      </S.InfoExplain>
      <InformationForm
        {...props}
        setIsClickSearchBtn={setIsClickSearchBtn}
        setIsClickAddressBtn={setIsClickAddressBtn}
      />
      {searchSchoolModal}
      {addressModal}
      {pagination}
      {isSuccessSaveInformation !== undefined ? (
        <ToastPopUp isSuccessSave={isSuccessSaveInformation} />
      ) : (
        ''
      )}
      {isSuccessSaveGedScore !== undefined ? (
        <ToastPopUp isSuccessSave={isSuccessSaveGedScore} />
      ) : (
        ''
      )}
      {isSuccessSaveUserPicture !== undefined ? (
        <ToastPopUp isSuccessSave={isSuccessSaveUserPicture} />
      ) : (
        ''
      )}
      {isSuccessSaveGraduateInformation !== undefined ? (
        <ToastPopUp isSuccessSave={isSuccessSaveGraduateInformation} />
      ) : (
        ''
      )}
    </S.Information>
  );
};

export default Information;
