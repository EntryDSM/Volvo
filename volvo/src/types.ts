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
