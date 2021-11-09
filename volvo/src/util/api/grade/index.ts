import uri from '../../../constance/uri';
import { GradeState } from '../../../types';
import { getRequestWithAccessToken } from '../default';

export const setGrade = async ( gradeRequest: GradeState) => {
  try {
    const access_token=localStorage.getItem("access_token");
    const request = getRequestWithAccessToken(access_token as string);
    await request.patch(uri.graduateInformation, gradeRequest);
  } catch (error) {
    throw error;
  }
};

export const getGradeApi = async () => {
  try {
    const access_token=localStorage.getItem("access_token");
    const request = getRequestWithAccessToken(access_token as string);
    return await request.get(uri.graduateInformation);
  } catch (error) {
    throw error;
  }
};