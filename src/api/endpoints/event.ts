import api from '@api/client';
import { API_URL } from '@constants/Endpoints';
import {
  EventDetailResponse,
  EventListResponse,
  QRResponse,
} from '@type/api/event';
import { EventStatus } from '@type/models/event';

export const EventApi = {
  getEvents: (): Promise<EventListResponse> => api.get(API_URL.EVENTS),
  getEventsByStatus: (status: EventStatus): Promise<EventListResponse> =>
    api.get(`${API_URL.EVENTS_STATUS}/${status}`),
  getEventDetail: (id: string): Promise<EventDetailResponse> =>
    api.get(`${API_URL.EVENTS}/${id}`),
  generateQRClockIn: (eventId: string): Promise<QRResponse> =>
    api.post(`${API_URL.EVENTS}/${eventId}/generate-clock-in-qr`),
  generateQRClockOut: (eventId: string): Promise<QRResponse> =>
    api.post(`${API_URL.EVENTS}/${eventId}/generate-clock-out-qr`),
};
