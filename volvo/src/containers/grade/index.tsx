import React from 'react';
import Grade from '../../components/grade';
import { useGrade } from '../../util/hooks/grade';

const GradeContainers = () => {
  const { state, setState } = useGrade();

  return <Grade {...state} {...setState} />;
};

export default GradeContainers;
