import api from '@api/client';
import { API_URL } from '@constants/Endpoints';

export const EventApi = {
  getEvents: () => api.get(API_URL.events),
};
