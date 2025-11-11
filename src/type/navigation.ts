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
};

// ======================
// Hotel Navigation
// ======================
export type HotelStackParamList = {
  HotelTabs: undefined;
  HotelCreateEvent: undefined;
  HotelEventDetail: undefined;
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
};

export type WorkerTabParamList = {
  WorkerExplore: undefined;
  WorkerEvent: undefined;
  WorkerProfile: undefined;
};
