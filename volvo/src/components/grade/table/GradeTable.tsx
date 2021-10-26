
import React from 'react';
import GradeColumn from '../column/GradeColumn';
import * as s from '../style';
type subjects ={
    subject:string,
    subjectId:number
}
function GradeTable() {
    const gradeSubjects:subjects[]=[{
        subject:"국어",
        subjectId:1
    },{
        subject:"사회",
        subjectId:2
    },{
        subject:"역사",
        subjectId:3
    },{
        subject:"수학",
        subjectId:4
    },{
        subject:"과학",
        subjectId:5
    },{
        subject:"기술가정",
        subjectId:6
    },{
        subject:"영어",
        subjectId:7
    }]
    const GradeTableWrap:React.FC<subjects>= ({subject,subjectId})=>{
        return(
            <tr key={subjectId} style={{height:75}}>
                <th>{subject}</th>
                <td><GradeColumn></GradeColumn></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        )
    }
  return (
    <s.GradeTableWrapper>
      <s.GradeTableTitle>성적입력</s.GradeTableTitle>
      <s.GradeTableFrame style={{ width: '100%', tableLayout: 'fixed' }}>
        <tr>
          <th rowSpan={2} style={{ width: 150}}></th>
          <th colSpan={2} style={{height:80}}>3학년</th>
          <th colSpan={2}>성적이 있는 최근 학기</th>
        </tr>
        <tr>
          <th style={{height:65}}>2학기</th>
          <th>1학기</th>
          <th>직전 학기</th>
          <th>직전전 학기</th>
        </tr>
        {
            gradeSubjects.map(GradeTableWrap)
        }
      </s.GradeTableFrame>
    </s.GradeTableWrapper>
  );
}

export default GradeTable;
