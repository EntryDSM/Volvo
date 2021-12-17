import uri from '../../../constance/uri';
import { userResponse } from '../../../types';
import { getRequestWithAccessToken } from '../default';

export const userResponseToUser = (response: userResponse) => {
  return {
    phoneNumber: response.phone_number,
    name: response.name,
    isfinalSubmitDone: response.submitted,
    isReceiveMail: response.printed_arrived,
    selfIntroduceLength: response.self_introduce.length,
    studyPlanLength: response.study_plan.length,
    applicationType: response.application_type,
  };
};

export const getUser = async (token: string) => {
  const request = getRequestWithAccessToken(token);
  const response = await request.get<userResponse>(uri.status);
  const user = userResponseToUser(response.data);
  return { data: user };
};
