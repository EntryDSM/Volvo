import React, { useState } from 'react';
import { GColumnFactor } from '../../constance/grade';
import { SubjectScore } from '../../types';
import * as s from './style';
interface Props {
  setAllGrade: (paylode: { value: SubjectScore }) => void;
}
const SettingGrade: React.FC<Props> = Props => {
  const [isClick, setIsClick] = useState<number | null>(null);
  console.log(Props);
  const GradeOnClick = (value: SubjectScore, e: React.MouseEvent<HTMLDivElement>) => {
    setIsClick(Number(e.currentTarget.id));
    Props.setAllGrade({ value: value });
  };
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
