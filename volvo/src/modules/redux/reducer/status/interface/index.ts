import { statusType } from '../../../../../constance/main';

interface IStatusState {
  status: statusType;
  isEnd: boolean;
  isStart: boolean;
  processes: Record<statusType, processType>;
  date: Array<processTimeType>;
  error: number;
}

export interface processTimeType {
  type: string;
  date: string;
}

export interface processType {
  title: React.ReactNode;
  getDescription: (value: string) => React.ReactNode;
  isHaveTerm: boolean;
  buttonText: string;
  isButtonAble: boolean;
  uri: string;
  isOutsideUrl?: boolean;
}

export default IStatusState;
