import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/auth/authSlice';
import counterReducer from './slice/counter/counterSlice';
import eventListByStatusReducer from './slice/event/eventListByStatusSlice';
import eventListReducer from './slice/event/eventListSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    events: eventListReducer,
    eventsByStatus: eventListByStatusReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
