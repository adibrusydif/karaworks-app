import api from '@api/client';
import { API_URL } from '@constants/Endpoints';
import { EventDetailResponse, EventListResponse } from '@type/api/event';
import { EventStatus } from '@type/models/event';

export const EventApi = {
  getEvents: (): Promise<EventListResponse> => api.get(API_URL.EVENTS),
  getEventsByStatus: (status: EventStatus): Promise<EventListResponse> =>
    api.get(`${API_URL.EVENTS_STATUS}/${status}`),
  getEventDetail: (id: string): Promise<EventDetailResponse> =>
    api.get(`${API_URL.EVENTS}/${id}`),
};
