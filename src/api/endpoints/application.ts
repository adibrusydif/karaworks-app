import api from '@api/client';
import { API_URL } from '@constants/Endpoints';
import { ApplicationListResponse } from '@type/api/application';

export const ApplicationApi = {
  getApplications: (): Promise<ApplicationListResponse> =>
    api.get(API_URL.APPLICATIONS),
  getApplicationsEvent: (eventId: string): Promise<ApplicationListResponse> =>
    api.get(`${API_URL.APPLICATIONS_EVENT}/${eventId}`),
};
