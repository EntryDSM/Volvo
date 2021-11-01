export type Subject = 
'korean' 
| 'social' 
| 'history' 
| 'math' 
| 'science' 
| 'technical' 
| 'english'

export type SubjectScore = 
'A'
| 'B'
| 'C'
| 'D'
| 'E'
| 'X'

export type GradeSubjectState = Record<Subject, string>