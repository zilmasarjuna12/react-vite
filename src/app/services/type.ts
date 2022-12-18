// model
interface meta {
  debug_param: string;
}

interface baseResponse {
  response_code: string;
  response_message: string;
  trace_id: string;
  meta: meta;
}

interface login {
  id: number;
  email: string;
  name: string;
  status: number;
  is_reset_password: number;
  role: string;
  user_type: string;
  token: string;
  actived_at: string;
  expired_at: string;
}

// request payload
export interface loginPayload {
  email: string;
  password: string;
  trace_id: string;
  session_id?: string;
  captcha_code?: string;
}

// response body
export interface loginResponse extends baseResponse {
  user: login;
}

export interface captchaResponse extends baseResponse {
  session_id: string;
  captcha: string;
}
