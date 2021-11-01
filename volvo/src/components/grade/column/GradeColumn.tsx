import * as s from '../style';
import React, { useState } from 'react';
import { GColumnFactor } from '../../../constance/grade';
import { Subject, SubjectScore } from '../../../types';
interface Props {
  gradeState: string;
  stateSequence: number;
  setGrade: (paylode: { subject: Subject; value: SubjectScore; stateSequence: number }) => void;
  subjectEn: Subject;
}

const GradeColumn: React.FC<Props> = props => {
  const { gradeState, stateSequence, subjectEn, setGrade } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const GColumnOnclickEvent = (props: SubjectScore) => {
    const setStateObject = {
      subject: subjectEn,
      value: props,
      stateSequence: stateSequence,
    };
    setGrade(setStateObject);
  };
  return (
    <s.GradeColumnFontWrapper>
      {isOpen ? (
        GColumnFactor.map((props, i) => (
          <p
            key={i}
            onClick={() => {
              setIsOpen(!isOpen);
              GColumnOnclickEvent(props);
            }}
          >
            {props}
          </p>
        ))
      ) : (
        <p onClick={() => setIsOpen(!isOpen)}>{gradeState}</p>
      )}
    </s.GradeColumnFontWrapper>
  );
};

export default GradeColumn;
