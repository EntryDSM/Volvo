import uri from '../../../constance/uri';
import { statusResponse } from '../../../types';
import { getRequest } from '../default';

export const getStatus = async () => {
  const request = getRequest();
  const response = await request.get<statusResponse>(uri.schedule);
  return response;
};
