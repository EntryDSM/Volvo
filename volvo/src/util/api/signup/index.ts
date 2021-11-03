import uri from '../../../constance/uri';
import { signupResponse } from '../../../types';
import { getRequest } from '../default';
import {
  signupRequest,
  signupVertifyCodeRequest,
  resetPasswordVertifyCodeRequest,
  checkVertifyCodeRequest,
  resetPasswordRequest,
} from '../../../types';

export const signup = async (
  _: any,
  signupRequest: signupRequest,
): Promise<{ access_token: string }> => {
  try {
    const request = getRequest();
    const { data } = await request.post<signupResponse>(uri.signup, signupRequest);
    window.localStorage.setItem('access_token', data.access_token);
    return data;
  } catch (error) {
    throw error;
  }
};

export const sendSignUpVertifyCode = async (
  _: any,
  signupVertifyCodeRequest: signupVertifyCodeRequest,
) => {
  try {
    const request = getRequest();
    await request.post(uri.sendVertify, signupVertifyCodeRequest);
  } catch (error) {
    throw error;
  }
};

export const sendResetPasswordVertifyCode = async (
  _: any,
  resetPasswordVertifyCodeRequest: resetPasswordVertifyCodeRequest,
) => {
  try {
    const request = getRequest();
    await request.post(uri.sendPasswordVertify, resetPasswordVertifyCodeRequest);
  } catch (error) {
    throw error;
  }
};

export const chekckVertifyCode = async (_: any, checkVertifyRequest: checkVertifyCodeRequest) => {
  try {
    const request = getRequest();
    await request.put(uri.sendVertify, checkVertifyRequest);
  } catch (error) {
    throw error;
  }
};

export const resetPassword = async (_: any, resetPasswordRequest: resetPasswordRequest) => {
  try {
    const request = getRequest();
    await request.put(uri.resetPassword, resetPasswordRequest);
  } catch (error) {
    throw error;
  }
};
