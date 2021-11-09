// grade
export type Subject =
  | 'korean'
  | 'social'
  | 'history'
  | 'math'
  | 'science'
  | 'technical'
  | 'english';

export type SubjectScore = 'A' | 'B' | 'C' | 'D' | 'E' | 'X';

export type GradeSubjectState = Record<Subject, string>;

// select type
export interface selectTypeStateInterface {
  educationalStatus: string | null;
  applicationType: string | null;
  isDaejeon: boolean | null;
  applicationRemark: string | null;
  graduationMonth: number | null;
  graduationYear: number | null;
  headcount: string | null;
}

export interface selectTypeInterface {
  educational_status: string | null;
  application_type: string | null;
  is_daejeon: boolean | null;
  application_remark: string | null;
  graduated_at: string | null;
  headcount: string | null;
}

export interface typeInfoType {
  id: 'regular' | 'meister';
  content: string;
}

export interface areaType {
  id: 'daejeon' | 'country';
  content: string;
}

export interface graduationType {
  id: 'prospective' | 'graduate' | 'qualification';
  content: string;
}

export interface remarkType {
  id: 'nationalMerit' | 'specialAdmission';
  content: string;
}

export interface headCountType {
  id: 'inOfHeadCount' | 'outOfHeadCount';
  content: string;
}

// error
export type error = {
  status: number;
  message: string;
  type: string;
};

// user
export interface userResponse {
  name: string;
  email: string;
  phone_number: string;
  is_submit: boolean;
  is_printed_arrived: boolean;
  application_type: string;
  self_introduce: number;
  study_plan: number;
}

// status
export interface statusResponse {
  schedules: { type: string; date: string; process: string }[];
  current_status: string;
}

// signup
export interface signupResponse {
  access_token: string;
  refresh_token: string;
}

export interface signUpResponse {
  access_token: string;
}

export interface signupRequest {
  email: string;
  password: string;
  name: string;
}

export interface checkVertifyRequest {
  email: string;
  code: string;
}

export interface signupVertifyCodeRequest {
  email: string;
}

export interface resetPasswordVertifyCodeRequest {
  email: string;
}

export interface resetPasswordRequest {
  email: string;
  password: string;
}

export interface checkVertifyCodeRequest {
  email: string;
  code: string;
}

// signin
export interface signinResponse {
  access_token: string;
  refresh_token: string;
}

export interface refreshResponse {
  access_token: string;
}

export interface signinRequest {
  email: string;
  password: string;
}

// generator
export interface responseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

// information

export interface informationType {
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
}

export interface informationInterface {
  sex: string | null;
  birthday: string | null;
  parent_name: string | null;
  parent_tel: string | null;
  telephone_number: string | null;
  home_tel: string | null;
  address: string | null;
  detail_address: string | null;
  post_code: string | null;
}

export interface graduateInformationType {
  stdGrade: string;
  stdClass: string;
  stdNumber: string;
  schoolCode: string;
  schoolTel: string;
}

export interface graduateInformationInterFace {
  student_number: string | null;
  school_code: string | null;
  school_tel: string | null;
}

export interface getGraduateInformationType {
  name: string;
  sex: string;
  birthday: string;
  parent_name: string;
  parent_tel: string;
  telephone_number: string;
  home_tel: string;
  address: string;
  detail_address: string;
  post_code: string;
  student_number: string;
  school_code: string;
  school_tel: string;
  school_name: string;
  photo_file_name: string;
}

export interface getInformationType {
  name: string;
  sex: string;
  birthday: string;
  parent_name: string;
  parent_tel: string;
  telephone_number: string;
  home_tel: string;
  address: string;
  detail_address: string;
  post_code: string;
  photo_file_name: string;
}

export interface searchSchoolQueryType {
  name: string;
  size: number;
  page: number;
}

export interface schoolArrayType {
  code: string;
  name: string;
  information: string;
}

export interface searchSchoolResponse {
  content: Array<schoolArrayType>;
  total_pages: number;
}

export interface addressType {
  postCode: string;
  address: string;
}
