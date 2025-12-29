import api from '@api/client';
import { API_URL } from '@constants/Endpoints';
import { RequestOTPPayload, RequestOTPResponse } from '@type/api/auth';

export const AuthApi = {
  requestOTP: (payload: RequestOTPPayload): Promise<RequestOTPResponse> =>
    api.post(API_URL.AUTH_REQUEST_OTP, payload),
};
