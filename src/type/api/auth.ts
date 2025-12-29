import { RequestOTP, VerifyOTP } from '@type/models/auth';
import { ApiResponse } from './common';

// Request payloads
export type RequestOTPPayload = {
  phone_number: string;
};

export type VerifyOTPPayload = {
  otp_code: string;
  phone_number: string;
};

// Response types
export type RequestOTPResponse = ApiResponse<RequestOTP>;

export type VerifyOTPResponse = ApiResponse<VerifyOTP>;
