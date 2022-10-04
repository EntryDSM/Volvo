import React, { useEffect, useMemo, useState } from 'react';
import * as s from './style';
import GradeTable from './table/GradeTable';
import Volunteer from './table/Volunteer';
import { currentYear } from '../../constance/default';
import { GradeType } from '../../constance/grade';
import { Subject, SubjectScore } from '../../types';
import Pagination from '../default/pagination';
import ToastPopUp from '../default/toastPopUp';
interface Props {
  volunteerTime: number;
  absence: number; //결석
  leave: number; //조퇴
  lateness: number; //지각
  truancy: number; //무단 결석
  grade: GradeType;
  isSuccessSaveGrade?: boolean;
  isProspectiveGraduate: boolean;
  setInput: (paylode: { name: string; value: number }) => void;
  setGrade: (paylode: { subject: Subject; value: SubjectScore; stateSequence: number }) => void;
  setAllGrade: (paylode: { value: SubjectScore; isProspectiveGraduate: boolean }) => void;
}

const Grade: React.FC<Props> = ({
  volunteerTime,
  absence,
  leave,
  lateness,
  truancy,
  grade,
  isSuccessSaveGrade,
  isProspectiveGraduate,
  setInput,
  setGrade,
  setAllGrade,
}) => {
  const [disabled, setDisabled] = useState<boolean>(false);
  useEffect(() => {
    if (volunteerTime !== 0) setDisabled(false);
    else setDisabled(true);
  }, [volunteerTime]);

  const pagination = useMemo(() => {
    return (
      <Pagination
        isDisabled={disabled}
        nextPagePath={'/introduction'}
        isQualification={false}
        prevPagePath={'/information'}
        currentPage={3}
        page={'grade'}
        isSuccess={isSuccessSaveGrade}
      />
    );
  }, [disabled, isSuccessSaveGrade]);

  return (
    <s.GradeWrapper>
      <s.GradeTitles>
        <s.GradeSchoolTitle>대덕소프트웨어마이스터고등학교</s.GradeSchoolTitle>
        <s.GradeBigTitle>{currentYear}학년도 지원자 성적 입력</s.GradeBigTitle>
      </s.GradeTitles>
      <Volunteer
        volunteerTime={volunteerTime}
        absence={absence}
        leave={leave}
        lateness={lateness}
        truancy={truancy}
        setInput={setInput}
      />
      <GradeTable
        grade={grade}
        setGrade={setGrade}
        setAllGrade={setAllGrade}
        isProspectiveGraduate={isProspectiveGraduate}
      />
      {pagination}
      <ToastPopUp isSuccessSave={isSuccessSaveGrade} />
    </s.GradeWrapper>
  );
};

export default Grade;
