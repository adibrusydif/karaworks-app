import { Bank } from '@type/models/bank';
import { ApiResponse } from './common';

export type BankListResponse = {
  data: ApiResponse<Bank[]>;
};
