import { Statuses } from '@constants';

export type ApiResponse<T> = {
  success: boolean;
  message?: string;
  data: T;
};

export type ErrorResponse = {
  success: false;
  message: string;
  statusCode?: number;
};

export type Status = (typeof Statuses)[keyof typeof Statuses];

export type TabItem = {
  key: string;
  label: string;
};
