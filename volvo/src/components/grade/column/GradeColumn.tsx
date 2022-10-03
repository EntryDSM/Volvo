import * as s from '../style';
import React, { useState } from 'react';
import { GColumnFactor } from '../../../constance/grade';
import { Subject, SubjectScore } from '../../../types';
interface Props {
  isBlock: boolean;
  gradeState: string;
  stateSequence: number;
  setGrade: (paylode: { subject: Subject; value: SubjectScore; stateSequence: number }) => void;
  subjectEn: Subject;
}

const GradeColumn: React.FC<Props> = props => {
  const { gradeState, stateSequence, subjectEn, setGrade, isBlock } = props;
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
    <s.GradeColumnFontWrapper isBlock={isBlock}>
      <div>
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
          <p onClick={() => !isBlock && setIsOpen(!isOpen)}>{gradeState}</p>
        )}
      </div>
    </s.GradeColumnFontWrapper>
  );
};

export default GradeColumn;
