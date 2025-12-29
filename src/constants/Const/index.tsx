export const Statuses = {
  POSTED: 'posted',
  ONGOING: 'ongoing',
  FINISHED: 'finished',
  APPLIED: 'applied',
} as const;

export const QRStatus = {
  CLOCK_IN: 'clock_in',
  CLOCK_OUT: 'clock_out',
} as const;

export const FormatDate = {
  FULL: 'DD MMM YYYY, HH:mm WIB',
} as const;

export const Blurhash = 'L6PZfSi_.AyE_3t7t7R**0o#DgR4';

export const StorageKey = {
  AUTH: 'auth',
  USER: 'user',
  TOKEN: 'token',
  ROLE: 'role',
} as const;
