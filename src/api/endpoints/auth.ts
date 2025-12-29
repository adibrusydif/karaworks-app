import api from '@api/client';
import { API_URL } from '@constants/Endpoints';
import {
  RequestOTPPayload,
  RequestOTPResponse,
  VerifyOTPPayload,
  VerifyOTPResponse,
} from '@type/api/auth';

export const AuthApi = {
  requestOTP: (payload: RequestOTPPayload): Promise<RequestOTPResponse> =>
    api.post(API_URL.AUTH_REQUEST_OTP, payload),
  verifyOTP: (payload: VerifyOTPPayload): Promise<VerifyOTPResponse> =>
    api.post(API_URL.AUTH_VERIFY_OTP, payload),
};
