import { Subject, SubjectScore } from "../../types";

export type subjects = {
  subject: string;
  subjectEn: Subject;
};
export type GradeType = Record<Subject,string>


export const gradeSubjects: subjects[] = [
  {
    subject: '국어',
    subjectEn: 'korean',
  },
  {
    subject: '사회',
    subjectEn: 'social',
  },
  {
    subject: '역사',
    subjectEn: 'history',
  },
  {
    subject: '수학',
    subjectEn: 'math',
  },
  {
    subject: '과학',
    subjectEn: 'science',
  },
  {
    subject: '기술가정',
    subjectEn: 'technical',
  },
  {
    subject: '영어',
    subjectEn: 'english',
  },
];

export const GColumnFactor: SubjectScore[] = ['A', 'B', 'C', 'D', 'E', 'X'];
