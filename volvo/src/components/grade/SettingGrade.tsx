import React, { useCallback, useState } from 'react';
import { GColumnFactor } from '../../constance/grade';
import { SubjectScore } from '../../types';
import * as s from './style';
interface Props {
  isProspectiveGraduate: boolean;
  setAllGrade: (paylode: { value: SubjectScore; isProspectiveGraduate: boolean }) => void;
}
const SettingGrade: React.FC<Props> = ({ setAllGrade, isProspectiveGraduate }) => {
  const [isClick, setIsClick] = useState<number | null>(null);
  const GradeOnClick = useCallback(
    (value: SubjectScore, e: React.MouseEvent<HTMLDivElement>) => {
      setIsClick(Number(e.currentTarget.id));
      setAllGrade({ value, isProspectiveGraduate });
    },
    [setAllGrade],
  );
  return (
    <s.SettingGradeWrapper>
      <p>전체 성적 초기화</p>
      {GColumnFactor.map((props: SubjectScore, i: number) => (
        <s.SettingGradeTitle
          isClick={i === isClick}
          key={i}
          id={String(i)}
          onClick={e => GradeOnClick(props, e)}
        >
          {props}
        </s.SettingGradeTitle>
      ))}
    </s.SettingGradeWrapper>
  );
};

export default SettingGrade;
