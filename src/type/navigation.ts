import { Event } from './models/event';

// Root stack
export type RootStackParamList = {
  Auth: undefined;
  Hotel: undefined;
  Worker: undefined;
};

// ======================
// Auth Navigation
// ======================
export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  OtpConfirmation: { phone: string };
  SuccessOtp: undefined;
};

// ======================
// Hotel Navigation
// ======================
export type HotelStackParamList = {
  HotelTabs: undefined;
  HotelCreateEvent: undefined;
  HotelSuccessCreateEvent: undefined;
  HotelEventDetail: { event: Event };
  HotelBillDetail: undefined;
  EditProfile: undefined;
};

export type HotelTabParamList = {
  HotelEvent: undefined;
  HotelBill: undefined;
  HotelProfile: undefined;
};

// ======================
// Worker Navigation
// ======================
export type WorkerStackParamList = {
  WorkerTabs: undefined;
  WorkerEventDetail: { event: Event };
  EditProfile: undefined;
  WorkerEditBank: undefined;
  WorkerWallet: undefined;
  WorkerWithdraw: undefined;
  WorkerSuccessWithdraw: undefined;
  WorkerQRScanner: undefined;
};

export type WorkerTabParamList = {
  WorkerExplore: undefined;
  WorkerEvent: undefined;
  WorkerProfile: undefined;
};
