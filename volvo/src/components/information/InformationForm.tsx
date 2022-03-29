import React, { FC, useMemo } from 'react';
import * as S from './style';
import {
  GenderColumn,
  NameColumn,
  PhoneNumberColumn,
  BirthDateColumn,
  GradeColumn,
  SchoolNameColumn,
  AddressColumn,
  PictureBtn,
  TotalScoreColumn,
} from './column';
import useSelectType from '../../util/hooks/selectType';

interface Props {
  userName: string;
  sex: string;
  birthYear: number;
  birthMonth: number;
  birthDate: number;
  schoolCode: string;
  schoolName: string;
  schoolTel: string;
  parentName: string;
  parentTel: string;
  telephoneNumber: string;
  postCode: string;
  address: string;
  detailAddress: string;
  stdGrade: string;
  stdClass: string;
  stdNumber: string;
  pictureUrl: string;
  totalScore: number;
  photoFileName: string;
  isSuccessSaveUserPicture: boolean | undefined;
  setInput: (payload: { name: string; value: string }) => void;
  setSex: (payload: string) => void;
  setBirthYear: (payload: number) => void;
  setBirthMonth: (payload: number) => void;
  setBirthDate: (payload: number) => void;
  setImageUrl: (payload: string) => void;
  setUserPicture: (payload: File) => void;
  setGedScore: (payload: number) => void;
  setIsClickSearchBtn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsClickAddressBtn: React.Dispatch<React.SetStateAction<boolean>>;
}

const InformationForm: FC<Props> = props => {
  const { schoolName, schoolTel, totalScore, setInput } = props;
  const graduation = useSelectType().state.educationalStatus;

  const styleInfo = useMemo(() => {
    if (graduation === 'QUALIFICATION_EXAM')
      return {
        widthHeight: {
          width: 904,
          height: 694,
        },
        picture: {
          width: 270,
          height: 295,
          paddingTop: 80,
          paddingSide: 68,
          top: 10,
        },
      };
    else
      return {
        widthHeight: {
          width: 860,
          height: 855,
        },
        picture: {
          width: 317,
          height: 363,
          paddingTop: 110,
          paddingSide: 84,
          top: 18,
        },
      };
  }, [graduation]);

  const showGrade = useMemo(() => {
    if (graduation === 'QUALIFICATION_EXAM') return <TotalScoreColumn {...props} />;
    else
      return (
        <>
          <GradeColumn {...props} />
          <SchoolNameColumn {...props} />
        </>
      );
  }, [setInput, graduation, schoolName, totalScore]);

  const phoneNumberColumn = useMemo(() => {
    if (graduation !== 'QUALIFICATION_EXAM')
      return <PhoneNumberColumn {...props} inputName={'schoolTel'} title={'학교 연락처'} />;
  }, [graduation, schoolTel]);

  return (
    <S.InformationForm height={styleInfo.widthHeight.height}>
      <NameColumn
        {...props}
        width={styleInfo.widthHeight.width}
        title={'이름'}
        inputName={'userName'}
      />
      <PictureBtn {...styleInfo.picture} {...props} />
      <GenderColumn width={styleInfo.widthHeight.width} {...props} />
      <BirthDateColumn width={styleInfo.widthHeight.width} {...props} />
      {showGrade}
      <NameColumn {...props} title={'보호자명'} inputName={'parentName'} width={1220} />
      {phoneNumberColumn}
      <PhoneNumberColumn {...props} title={'보호자 연락처'} inputName={'parentTel'} />
      <PhoneNumberColumn {...props} title={'본인 연락처'} inputName={'telephoneNumber'} />
      <AddressColumn {...props} />
    </S.InformationForm>
  );
};

export default InformationForm;
