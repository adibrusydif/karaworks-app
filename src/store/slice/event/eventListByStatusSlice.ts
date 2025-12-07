import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { EventApi } from '@api/endpoints/event';
import { handleAxiosError } from '@api/errorHandler';
import { Event, EventStatus } from '@type/models/event';
import { BaseStateProps } from '@type/models/state';

type EventByStatusState = Record<EventStatus, BaseStateProps<Event[]>>;
type EventByStatusError = { status: EventStatus; error: any };

export const getEventsByStatus = createAsyncThunk(
  'event/fetch-list-event-by-status',
  async (status: EventStatus, { rejectWithValue }) => {
    try {
      const response = await EventApi.getEventsByStatus(status);
      return { status, data: response.data };
    } catch (error) {
      return rejectWithValue({ status, error: handleAxiosError(error) });
    }
  },
);

const initialListState: BaseStateProps<Event[]> = {
  data: [],
  isLoading: false,
  isError: false,
  error: null,
};

const initialState: EventByStatusState = {
  posted: { ...initialListState },
  ongoing: { ...initialListState },
  finished: { ...initialListState },
};

export const eventListByStatusSlice = createSlice({
  name: 'eventListByStatus',
  initialState,
  reducers: {
    resetEventListByStatus: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEventsByStatus.pending, (state, action) => {
        const status = action.meta.arg;
        state[status].isLoading = true;
        state[status].isError = false;
      })
      .addCase(getEventsByStatus.fulfilled, (state, action) => {
        const { status, data } = action.payload;
        state[status].isLoading = false;
        state[status].data = data?.data ?? [];
      })
      .addCase(getEventsByStatus.rejected, (state, action) => {
        const { status, error } = action.payload as EventByStatusError;

        state[status].isLoading = false;
        state[status].isError = true;
        state[status].error = error;
      });
  },
});

export const { resetEventListByStatus } = eventListByStatusSlice.actions;
export default eventListByStatusSlice.reducer;
