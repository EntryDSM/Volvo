import axios from 'axios';

export const getRequest = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: '',
  });
  return request;
};

export const getRequestWithAccessToken = (
  token: string,
  type: 'json' | 'blob' | 'text' = 'json',
) => {
  const request = axios.create({
    timeout: 10000,
    baseURL: '',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    responseType: type,
  });
  return request;
};
