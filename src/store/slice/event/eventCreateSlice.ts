import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { EventApi } from '@api/endpoints/event';
import { handleAxiosError } from '@api/errorHandler';
import { EventPayload } from '@type/api/event';
import { Event } from '@type/models/event';
import { BaseStateProps } from '@type/models/state';

export const createEvent = createAsyncThunk(
  'event/create-event',
  async (payload: EventPayload, { rejectWithValue }) => {
    try {
      const response = await EventApi.createEvent(payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);

const initialState: BaseStateProps<Event | null> = {
  data: null,
  isLoading: false,
  isError: false,
  error: null,
};

export const eventCreateSlice = createSlice({
  name: 'eventCreate',
  initialState,
  reducers: {
    resetCreateEvent: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createEvent.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(createEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = null;
        state.data = action.payload.data;
      })
      .addCase(createEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const { resetCreateEvent } = eventCreateSlice.actions;
export default eventCreateSlice.reducer;
