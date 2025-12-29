import { configureStore } from '@reduxjs/toolkit';
import applicationEventReducer from './slice/application/applicationEventSlice';
import authReducer from './slice/auth/authSlice';
import requestOTPReducer from './slice/auth/requestOTPSlice';
import bankListReducer from './slice/bank/bankListSlice';
import counterReducer from './slice/counter/counterSlice';
import eventCreateReducer from './slice/event/eventCreateSlice';
import eventListByStatusReducer from './slice/event/eventListByStatusSlice';
import eventListReducer from './slice/event/eventListSlice';
import eventPhotoReducer from './slice/event/eventPhotoSlice';
import eventQRReducer from './slice/event/eventQRSlice';

export const store = configureStore({
  reducer: {
    applicationEvent: applicationEventReducer,
    auth: authReducer,
    bankList: bankListReducer,
    counter: counterReducer,
    eventCreate: eventCreateReducer,
    eventPhoto: eventPhotoReducer,
    eventQR: eventQRReducer,
    events: eventListReducer,
    eventsByStatus: eventListByStatusReducer,
    requestOTP: requestOTPReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
