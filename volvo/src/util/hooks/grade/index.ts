import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGrade, setInput } from '../../../modules/redux/action/grade';
import { reducerType } from '../../../modules/redux/reducer';
import { GradeState, GradeSubjectState, Subject, SubjectScore } from '../../../types';

export const useGrade = () => {
  const state = useSelector((state: reducerType) => state.grade);

  const [stateG, setStateG] = useState<GradeState>({
    grade: {
      english: '',
      history: '',
      korean: '',
      math: '',
      science: '',
      social: '',
      technical: '',
    },
    absence: 0,
    lateness: 0,
    leave: 0,
    truancy: 0,
    volunteerTime: 0,
    isSuccessSaveGrade: undefined,
  });
  useEffect(() => {
    if (state.grade) {
      setStateG(state);
    }
  }, [state]);
  
  const dispatch = useDispatch();
  const setState = {
    setInput: useCallback(
      (paylode: { name: string; value: number }) => dispatch(setInput(paylode)),
      [dispatch],
    ),
    setGrade: useCallback(
      (paylode: { subject: Subject; value: SubjectScore; stateSequence: number }) => {
        let stateGArr;
        if (stateG.grade[paylode.subject]) {
          stateGArr = stateG.grade[paylode.subject].split('');
          stateGArr[paylode.stateSequence] = paylode.value;
          const GradePaylode = {
            grade: {
              ...stateG.grade,
              [paylode.subject]: stateGArr.join(''),
            },
          };
          dispatch(setGrade(GradePaylode));
        }
      },
      [dispatch, stateG],
    ),
    setAllGrade: useCallback(
      (paylode: { value: SubjectScore }) => {
        const score = paylode.value.repeat(4);

        const gradePaylode = {
          grade: (Object as any).assign(
            ...Object.keys(state.grade).map(item => ({ [item]: score })),
          ) as GradeSubjectState,
        };
        dispatch(setGrade(gradePaylode));
      },
      [dispatch, state.grade],
    ),
  };
  return { state, setState };
};
