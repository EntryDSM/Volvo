import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGrade, setInput } from '../../../modules/redux/action/grade';
import { reducerType } from '../../../modules/redux/reducer';
import { GradeSubjectState, Subject, SubjectScore } from '../../../types';


export const useGrade = () => {
  const state = useSelector((state: reducerType) => state.grade);
  const stateG: GradeSubjectState = state.grade;
  const dispatch = useDispatch();
  const setState = {
    setInput: useCallback(
      (paylode: { name: string; value: number }) => dispatch(setInput(paylode)),
      [dispatch],
    ),
    setGrade: useCallback(
      (paylode: { subject: Subject; value: SubjectScore; stateSequence: number }) => {
        const stateGArr = stateG[paylode.subject].split('');
        stateGArr[paylode.stateSequence] = paylode.value;
        const GradePaylode = {
          grade: {
            ...state.grade,
            [paylode.subject]: stateGArr.join(''),
          },
        };
        dispatch(setGrade(GradePaylode));
      },
      [dispatch, stateG, state.grade],
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
