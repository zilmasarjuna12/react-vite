import axios from 'axios';

import { loginPayload, loginResponse, captchaResponse } from './type';

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const fetchLogin = async (payload: loginPayload) => {
  const res = await client.post<loginResponse>('/v1.0/auth/login', payload);

  return res;
};

export const fetchCaptcha = async () => {
  const res = await client.get<captchaResponse>('/v1.0/auth/captcha');

  return res;
};
