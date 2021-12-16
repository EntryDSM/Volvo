import uri from '../../../constance/uri';
import { getRequestWithAccessToken } from '../default';

export const saveIntro = async (access_token: string, introduction: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.patch(uri.introduction, { content: introduction });
  } catch (error) {
    throw error;
  }
};
export const saveStudy = async (access_token: string, study_plan: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.patch(uri.studyPlan, { content: study_plan });
  } catch (error) {
    throw error;
  }
};

export const getIntro = async (access_token: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.get(uri.introduction);
  } catch (error) {
    throw error;
  }
};

export const getStudy = async (access_token: string) => {
  try {
    const request = getRequestWithAccessToken(access_token);
    return await request.get(uri.studyPlan);
  } catch (error) {
    throw error;
  }
};
