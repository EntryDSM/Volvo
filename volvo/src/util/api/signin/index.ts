import uri from '../../../constance/uri';
import { signinRequest } from '../../../models/dto/request/signinRequest';
import { refreshResponse, signinResponse } from '../../../models/dto/response/signinResponse';
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
    localStorage.setItem('access_token', response.access_token);
    return response;
  } catch (error) {
    throw error;
  }
};
