export const SCHOOL = '대덕소프트웨어마이스터고등학교';
export const SELECTTYPE = '2022년 지원자 전형 구분';
export type typeInfoIdType = 'regular' | 'meister';
export type typeInfoType = {
  id: typeInfoIdType;
  content: string;
};
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
export type areaIdType = 'daejeon' | 'country';
export type areaType = {
  id: areaIdType;
  content: string;
};
export const AREA: Array<areaType> = [
  { id: 'daejeon', content: '대전' },
  { id: 'country', content: '전국' },
];
export type graduationIdType = 'prospective' | 'graduate' | 'qualification';
export type graduationType = {
  id: graduationIdType;
  content: string;
};
export const GRADUATION: Array<graduationType> = [
  { id: 'prospective', content: '졸업 예정자' },
  { id: 'graduate', content: '졸업자' },
  { id: 'qualification', content: '검정고시' },
];
export type remarkIdType = 'nationalMerit' | 'specialAdmission';
export type remarkType = {
  id: remarkIdType;
  content: string;
};
export const REMARKS: Array<remarkType> = [
  { id: 'nationalMerit', content: '국가 유공자' },
  { id: 'specialAdmission', content: '특례 입학 대상자' },
];
export type headCountIdType = 'inOfHeadCount' | 'outOfHeadCount';
export type headCountType = {
  id: headCountIdType;
  content: string;
};
export const HEADCOUNT: Array<headCountType> = [
  { id: 'inOfHeadCount', content: '정원 내' },
  { id: 'outOfHeadCount', content: '정원 외' },
];
export const GRADUATION_DATE_EXPLAIN = '졸업 예정자의 경우 졸업 예정월만 선택해주세요';
export const REMARK_EXPLAIN = '해당하는 특기사항에 체크해주세요';

export type selectTypeType = {
  educational_status: string | null;
  application_type: string | null;
  is_daejeon: boolean | null;
  application_remark: string | null;
  graduated_at: string | null;
  headcount: string | null;
};

export type selectTypeSaveType = {
  educationalStatus: string | null;
  applicationType: string | null;
  isDaejeon: boolean | null;
  applicationRemark: string | null;
  graduationMonth: number | null;
  graduationYear: number | null;
  headcount: string | null;
};

export interface selectTypeInterface {
  educational_status: string | null;
  application_type: string | null;
  is_daejeon: boolean | null;
  application_remark: string | null;
  graduated_at: string | null;
  headcount: string | null;
}
