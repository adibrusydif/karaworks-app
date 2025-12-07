import { Application } from '@type/models/application';
import { ApiResponse } from './common';

export type ApplicationListResponse = {
  data: ApiResponse<Application[]>;
};
