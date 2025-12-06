import { Statuses } from '@constants';

export type Status = (typeof Statuses)[keyof typeof Statuses];

export type TabItem = {
  key: string;
  label: string;
};
