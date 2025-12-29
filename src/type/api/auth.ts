import { RequestOTP } from '@type/models/auth';
import { ApiResponse } from './common';

// Request payloads
export type RequestOTPPayload = {
  phone_number: string;
};

// Response types
export type RequestOTPResponse = ApiResponse<{
  data: RequestOTP;
}>;
