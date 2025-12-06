import { ApiResponse } from './common';
import { User } from '../models/user';

// Request payloads
export type LoginRequest = {
  phone: string;
};

// Response types
export type LoginResponse = ApiResponse<{
  user: User;
  accessToken: string;
  refreshToken: string;
}>;
