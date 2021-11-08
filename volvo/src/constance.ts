import { areaType, graduationType, headCountType, remarkType, typeInfoType } from './types';

// select-type

export const CHOOSETYPEINFO: Array<typeInfoType> = [
  { id: 'regular', content: '일반전형' },
  { id: 'meister', content: '마이스터 인재전형' },
];

export const SOCIAL = [
  { id: 1, content: '기초생활수급자' },
  { id: 2, content: '한부모가족' },
  { id: 3, content: '차상위계층' },
  { id: 4, content: '소년소녀가장' },
  { id: 5, content: '북한이탈주민' },
  { id: 6, content: '다문화가정' },
];

export const AREA: Array<areaType> = [
  { id: 'daejeon', content: '대전' },
  { id: 'country', content: '전국' },
];

export const GRADUATION: Array<graduationType> = [
  { id: 'prospective', content: '졸업 예정자' },
  { id: 'graduate', content: '졸업자' },
  { id: 'qualification', content: '검정고시' },
];

export const REMARKS: Array<remarkType> = [
  { id: 'nationalMerit', content: '국가 유공자' },
  { id: 'specialAdmission', content: '특례 입학 대상자' },
];

export const HEADCOUNT: Array<headCountType> = [
  { id: 'inOfHeadCount', content: '정원 내' },
  { id: 'outOfHeadCount', content: '정원 외' },
];

// information
export const GENDER: Array<{ id: 'male' | 'female'; content: string }> = [
  { id: 'male', content: '남자' },
  { id: 'female', content: '여자' },
];

export const GRADE = [
  { name: 'stdGrade', content: '학년' },
  { name: 'stdClass', content: '반' },
  { name: 'stdNumber', content: '번' },
];
