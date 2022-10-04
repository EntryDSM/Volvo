import React, { useEffect, useState } from 'react';
import GradeColumn from '../column/GradeColumn';
import { gradeSubjects, GradeType, subjects } from '../../../constance/grade';
import * as s from '../style';
import SettingGrade from '../SettingGrade';
import { Subject, SubjectScore } from '../../../types';

interface Props {
  grade: GradeType;
  isProspectiveGraduate: boolean;
  setGrade: (paylode: { subject: Subject; value: SubjectScore; stateSequence: number }) => void;
  setAllGrade: (paylode: { value: SubjectScore; isProspectiveGraduate: boolean }) => void;
}

const GradeTable: React.FC<Props> = props => {
  const { setGrade, setAllGrade, grade, isProspectiveGraduate } = props;

  console.log(isProspectiveGraduate);
  const GradeTableWrap: React.FC<subjects> = ({ subject, subjectEn }, i) => {
    const [gradeArray, setGradeArray] = useState(['']);
    useEffect(() => {
      if (grade[subjectEn]) {
        setGradeArray(grade[subjectEn].split(''));
      }
    }, [grade, subjectEn]);
    const listArray = [...Array(4)];

    return (
      <tr key={i} style={{ height: 75 }}>
        <th>{subject}</th>
        {listArray.map((_, index: number) => (
          <GradeColumn
            isBlock={isProspectiveGraduate && index === 0}
            setGrade={setGrade}
            gradeState={gradeArray[index]}
            stateSequence={index}
            subjectEn={subjectEn}
          />
        ))}
      </tr>
    );
  };

  return (
    <s.GradeTableWrapper>
      <s.GradeSettingWrapper>
        <s.GradeTableTitle>성적입력</s.GradeTableTitle>
        <SettingGrade setAllGrade={setAllGrade} isProspectiveGraduate={isProspectiveGraduate} />
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
