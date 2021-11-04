import { reducerType } from '../../../modules/redux/reducer';
import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';
import { selectTypeInterface } from '../../../types';

const graduatedAt = (year: number, month: number) => {
  if (month < 10) return `${year}0${month}`;
  else return `${year}${month}`;
};

export const selectTypeStateToRequest = (state: reducerType['selectType']): selectTypeInterface => {
  return {
    educational_status: state.educationalStatus,
    application_type: state.applicationType,
    is_daejeon: state.isDaejeon,
    application_remark: state.applicationRemark,
    graduated_at: graduatedAt(state.graduationYear, state.graduationMonth),
    headcount: state.headcount,
  };
};

export const selectType = async (access_token: string, selectTypeRequest: selectTypeInterface) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.patch(uri.selectType, selectTypeRequest);
  } catch (error) {
    throw error;
  }
};

export const getSelectType = async (access_token: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.get(uri.selectType);
  } catch (error) {
    throw error;
  }
};
