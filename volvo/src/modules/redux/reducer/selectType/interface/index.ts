import { error } from '../../../../../types';

interface SelectTypeState {
  applicationType: string | null;
  socialType: string;
  isDaejeon: boolean | null;
  educationalStatus: string | null;
  graduationYear: number;
  graduationMonth: number;
  applicationRemark: string | null;
  is_out_of_headcount: boolean | null;
  error: error;
  graduatedAt: string | null;
  isSuccessSaveSelectType: boolean | undefined;
  isSuccessGetSelectType: boolean | undefined;
}

export default SelectTypeState;
