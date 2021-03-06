import { useDispatch } from 'react-redux';
import {
  setInput,
  setSex,
  setBirthDate,
  setBirthMonth,
  setBirthYear,
  setImageUrl,
  setSchoolCode,
  setAddress,
  userPicture,
  searchSchool,
  setSchoolName,
  gedScore,
} from '../../../modules/redux/action/information';
import { addressType, searchSchoolQueryType } from '../../../types';
import { useSelectState } from '../default';

const useInformation = () => {
  const dispatch = useDispatch();
  const state = useSelectState().information;
  const setState = {
    setInput: (payload: { name: string; value: string }) => {
      dispatch(setInput(payload));
    },
    setSex: (payload: string) => {
      dispatch(setSex(payload));
    },
    setBirthYear: (payload: number) => {
      dispatch(setBirthYear(payload));
    },
    setBirthMonth: (payload: number) => {
      dispatch(setBirthMonth(payload));
    },
    setBirthDate: (payload: number) => {
      dispatch(setBirthDate(payload));
    },
    setImageUrl: (payload: string) => {
      dispatch(setImageUrl(payload));
    },
    setAddress: (payload: addressType) => {
      dispatch(setAddress(payload));
    },
    setSchoolCode: (payload: string) => {
      dispatch(setSchoolCode(payload));
    },
    setUserPicture: (payload: File) => {
      dispatch(userPicture(payload));
    },
    searchSchool: (payload: searchSchoolQueryType) => {
      dispatch(searchSchool(payload));
    },
    setSchoolName: (payload: string) => {
      dispatch(setSchoolName(payload));
    },
    setGedScore: (payload: number) => {
      dispatch(gedScore(payload));
    },
  };

  return { state, setState };
};

export default useInformation;
