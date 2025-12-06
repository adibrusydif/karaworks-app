import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { EventApi } from '@api/endpoints/event';
import { handleAxiosError } from '@api/errorHandler';
import { Event } from '@type/models/event';
import { BaseStateProps } from '@type/models/state';

export const getEvents = createAsyncThunk(
  'event/fetch-list-event',
  async (_, { rejectWithValue }) => {
    try {
      const response = await EventApi.getEvents();
      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);

const initialState: BaseStateProps<Event[]> = {
  data: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const eventListSlice = createSlice({
  name: 'eventList',
  initialState,
  reducers: {
    resetEventList: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEvents.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload?.data ?? [];
      })
      .addCase(getEvents.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload as Error;
      });
  },
});

export const { resetEventList } = eventListSlice.actions;
export default eventListSlice.reducer;
