import api from '@api/client';
import { API_URL } from '@constants/Endpoints';
import { BankListResponse } from '@type/api/bank';

export const BankApi = {
  getBanks: (): Promise<BankListResponse> => api.get(API_URL.BANKS),
};
