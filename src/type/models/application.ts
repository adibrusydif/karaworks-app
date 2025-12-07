import { Event } from './event';
import { User } from './user';

export type Application = {
  application_id: string;
  event_id: string;
  user_id: string;
  application_status: string;
  clock_in_qr_data: string;
  clock_out_qr_data: string;
  clock_in_prove: string;
  clock_out_prove: string;
  created_at: string;
  updated_at: string;
  event: Event;
  user: User;
};
