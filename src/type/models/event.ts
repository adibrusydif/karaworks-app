import { QRType } from './common';
import { Hotel } from './hotel';

export type EventStatus = 'posted' | 'ongoing' | 'finished';

export type Event = {
  event_id: string;
  event_creator_id: string;
  event_name: string;
  event_photo: string;
  event_description: string;
  event_date: string;
  event_salary: number;
  event_person_count: number;
  event_status: EventStatus;
  created_at: string;
  updated_at: string;
  event_creator: EventCreator;
};

export type EventCreator = {
  hotel: Hotel;
  bank_id: string;
  user_id: string;
  hotel_id: string;
  user_name: string;
  user_role: string;
  created_at: string;
  updated_at: string;
  user_phone: string;
  user_photo: string;
  bank_account_id: string;
  bank_account_name: string;
};

export type QR = {
  payload: Payload;
  qr: string;
};

export type Payload = {
  event_id: string;
  creator_id: string;
  generated_at: string;
  type: QRType;
};

export type ScanResult = {
  event_id: string;
  creator_id: string;
  generated_at: string;
  type: QRType;
};

export type EventPhoto = {
  data: {
    event_id: string;
    event_photo: string;
  };
  photoUrl: string;
};
