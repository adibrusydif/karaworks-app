import api from '@api/client';
import { API_URL } from '@constants/Endpoints';
import { EventListResponse } from '@type/api/event';
import { EventStatus } from '@type/models/event';

export const EventApi = {
  getEvents: (): Promise<EventListResponse> => api.get(API_URL.events),
  getEventsByStatus: (status: EventStatus): Promise<EventListResponse> =>
    api.get(`${API_URL.events}/status/${status}`),
};
