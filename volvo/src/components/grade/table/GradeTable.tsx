import React from 'react';
import GradeColumn from '../column/GradeColumn';
import { gradeSubjects, GradeType, subjects } from '../../../constance/grade';
import * as s from '../style';
import SettingGrade from '../SettingGrade';
import { Subject, SubjectScore } from '../../../types';


interface Props {
  grade: GradeType;
  setGrade: (paylode: { subject: Subject; value: SubjectScore; stateSequence: number }) => void;
  setAllGrade: (paylode: { value: SubjectScore }) => void;
}

const GradeTable: React.FC<Props> = props => {
  const { setGrade, setAllGrade, grade } = props;

  const GradeTableWrap: React.FC<subjects> = ({ subject, subjectEn }, i) => {
    const listArray = [...Array(4)];
    const gradeArray = grade[subjectEn].split('');
    return (
      <tr key={i} style={{ height: 75 }}>
        <th>{subject}</th>
        {listArray.map((_, index: number) => (
          <td key={index}>
            <GradeColumn
              setGrade={setGrade}
              gradeState={gradeArray[index]}
              stateSequence={index}
              subjectEn={subjectEn}
            ></GradeColumn>
          </td>
        ))}
      </tr>
    );
  };

  return (
    <s.GradeTableWrapper>
      <s.GradeSettingWrapper>
        <s.GradeTableTitle>성적입력</s.GradeTableTitle>
        <SettingGrade setAllGrade={setAllGrade}></SettingGrade>
      </s.GradeSettingWrapper>

      <s.GradeTableFrame style={{ width: '100%', tableLayout: 'fixed' }}>
        <tbody>
          <tr>
            <th rowSpan={2} style={{ width: 150 }}></th>
            <th colSpan={2} style={{ height: 80 }}>
              3학년
            </th>
            <th colSpan={2}>성적이 있는 최근 학기</th>
          </tr>
          <tr>
            <th style={{ height: 65 }}>2학기</th>
            <th>1학기</th>
            <th>직전 학기</th>
            <th>직전전 학기</th>
          </tr>
          {gradeSubjects.map(GradeTableWrap)}
        </tbody>
      </s.GradeTableFrame>
    </s.GradeTableWrapper>
  );
};

export default GradeTable;
