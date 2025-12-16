import { Event, QR } from '@type/models/event';
import { ApiResponse } from './common';

export type EventPayload = {
  event_creator_id: string;
  event_name: string;
  event_description: string;
  event_photo?: string;
  event_date: Date | string;
  event_salary: number;
  event_person_count: number;
  event_status?: string;
};

export type EventListResponse = {
  data: ApiResponse<Event[]>;
};

export type EventDetailResponse = {
  data: ApiResponse<Event>;
};

export type QRResponse = ApiResponse<QR>;
