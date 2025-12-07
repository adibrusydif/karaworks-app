import { Event } from '@type/models/event';
import { ApiResponse } from './common';

export type EventListResponse = {
  data: ApiResponse<Event[]>;
};

export type EventDetailResponse = {
  data: ApiResponse<Event>;
};
