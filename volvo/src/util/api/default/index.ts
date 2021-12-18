import axios from 'axios';

export const getRequest = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: 'https://rolls.entrydsm.hs.kr/',
  });
  return request;
};

export const getRequestWithAccessToken = (
  token: string,
  type: 'json' | 'blob' | 'text' = 'json',
) => {
  const request = axios.create({
    timeout: 10000,
    baseURL: 'https://rolls.entrydsm.hs.kr/',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    responseType: type,
  });
  return request;
};

export const isFinalSubmit = (isFinalSubmitDone: boolean): boolean => {
  if (isFinalSubmitDone) {
    alert(
      '최종제출되었습니다. 접근하시려면 최종제출을 취소하고 접근해주세요. 최종제출은 학교에 연락하여 취소하셔야 합니다.',
    );
    return true;
  } else return false;
};

export const isLogin = (accessToken: string | null): boolean => {
  if (!accessToken) {
    alert('로그인 후 이용하실 수 있습니다.');
    return true;
  } else return false;
};
