import React, { FC, useMemo, useState } from 'react';
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
  homeTel: string;
  address: string;
  detailAddress: string;
  postCode: string;
  schoolCode: string;
  schoolTel: string;
  stdGrade: string;
  stdClass: string;
  stdNumber: string;
  schoolName: string;
  totalScore: string;
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
  setGedScore: (payload: string) => void;
}

const Information: FC<Props> = props => {
  const {
    totalPages,
    content,
    isSuccessSaveInformation,
    isSuccessSaveUserPicture,
    isSuccessSaveGraduateInformation,
    isSuccessSaveGedScore,
    setSchoolCode,
    setAddress,
    searchSchool,
    setSchoolName,
  } = props;
  const [isClickSearchBtn, setIsClickSearchBtn] = useState(false);
  const [isClickAddressBtn, setIsClickAddressBtn] = useState(false);
  const educationalStatus = useSelectType().state.educationalStatus;

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

  const pagination = useMemo(() => {}, []);

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
