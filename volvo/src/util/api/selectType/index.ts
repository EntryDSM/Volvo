import { reducerType } from '../../../modules/redux/reducer';
import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';
import { selectTypeRequestInterface } from '../../../types';

const graduatedAt = (year: number, month: number) => {
  if (month < 10) return `${year}0${month}`;
  else return `${year}${month}`;
};

export const applicationTypeResponseToStatus = (response: string | null) => {
  if (response === '일반전형') return 'COMMON';
  else if (response === '마이스터전형') return 'MEISTER';
  else if (response === '사회통합전형') return 'SOCIAL';
  else return null;
};

export const selectTypeStateToRequest = (
  state: reducerType['selectType'],
): selectTypeRequestInterface => {
  return {
    educational_status: state.educationalStatus,
    application_type: state.applicationType,
    is_daejeon: state.isDaejeon,
    application_remark: state.applicationRemark ? state.applicationRemark : null,
    graduated_at: graduatedAt(state.graduationYear, state.graduationMonth),
    is_out_of_headcount: state.is_out_of_headcount,
  };
};

export const selectType = async (
  access_token: string,
  selectTypeRequest: selectTypeRequestInterface,
) => {
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
