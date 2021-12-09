import React,{ useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Grade from '../../components/grade';
import { GET_GRADE } from '../../modules/redux/action/grade/interface';
import { useGrade } from '../../util/hooks/grade';

const GradeContainers = () => {
  const { state, setState } = useGrade();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({type:GET_GRADE})
  },[dispatch])
  
  return <Grade {...state} {...setState} />;
};

export default GradeContainers;
