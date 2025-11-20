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
  OtpConfirmation: undefined;
  SuccessOtp: undefined;
};

// ======================
// Hotel Navigation
// ======================
export type HotelStackParamList = {
  HotelTabs: undefined;
  HotelCreateEvent: undefined;
  HotelSuccessCreateEvent: undefined;
  HotelEventDetail: undefined;
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
  WorkerEventDetail: undefined;
  EditProfile: undefined;
  WorkerEditBank: undefined;
  WorkerWallet: undefined;
};

export type WorkerTabParamList = {
  WorkerExplore: undefined;
  WorkerEvent: undefined;
  WorkerProfile: undefined;
};
