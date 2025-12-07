import { Statuses } from '@constants';

export type EventStatus = (typeof Statuses)[keyof typeof Statuses];

export type TabItem = {
  key: string;
  label: string;
};
