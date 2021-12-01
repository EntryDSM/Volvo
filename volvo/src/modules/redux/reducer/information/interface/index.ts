import { error, schoolArrayType } from '../../../../../types';

interface InformationState {
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
  searchSchoolName: string;
  totalScore: string;
  photoFileName: string;
  pictureUrl: string;
  userPicture: File | null;
  page: number;
  size: number;
  totalPages: number;
  content: Array<schoolArrayType>;
  error: error;
  isSuccessSaveUserPicture: boolean | undefined;
  isSuccessSaveInformation: boolean | undefined;
  isSuccessSaveGraduateInformation: boolean | undefined;
  isSuccessSaveGedScore: boolean | undefined;
  isSuccessGetSearchSchool: boolean | undefined;
}

export default InformationState;
