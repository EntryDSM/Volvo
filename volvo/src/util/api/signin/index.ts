import uri from '../../../constance/uri';
import { refreshResponse, signinRequest, signinResponse } from '../../../types';
import { getRequest } from '../default';

export const signin = async (body: signinRequest) => {
  try {
    const request = getRequest();
    const response = await request.post<signinResponse>(uri.signin, body);
    localStorage.setItem('access_token', response.data.access_token);
    localStorage.setItem('refresh_token', response.data.refresh_token);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const refreshToken = async () => {
  try {
    const request = getRequest();
    const response: any = await request.put<refreshResponse>(
      uri.signin,
      {},
      {
        headers: {
          'x-refresh-token': localStorage.getItem('refresh_token') as string,
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
