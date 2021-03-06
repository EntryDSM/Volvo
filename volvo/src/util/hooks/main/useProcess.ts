import { useDispatch } from 'react-redux';
import useSelectState from '../default/useSelectState';
import {
  setProcess,
  setIsEnd,
  setIsStart,
  setStatus,
  getStatus,
  getStatusSuccess,
} from '../../../modules/redux/action/status';
import { processTimeType, processType } from '../../../modules/redux/reducer/status/interface';
import { statusType } from '../../../constance/main';

const useProcess = () => {
  const dispatch = useDispatch();
  const state = useSelectState().status;
  const setState = {
    setStatus: (payload: statusType) => dispatch(setStatus(payload)),
    setIsStart: (payload: boolean) => dispatch(setIsStart(payload)),
    setIsEnd: (payload: boolean) => dispatch(setIsEnd(payload)),
    setProcess: (payload: processType[]) => dispatch(setProcess(payload)),
    getStatus: () => dispatch(getStatus()),
    setStatusSuccess: (payload: { schedules: Array<processTimeType>; current_status: string }) =>
      dispatch(getStatusSuccess(payload)),
  };
  return {
    state,
    setState,
  };
};

export default useProcess;
