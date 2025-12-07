import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApplicationApi } from '@api/endpoints/application';
import { handleAxiosError } from '@api/errorHandler';
import { Application } from '@type/models/application';
import { BaseSliceProps } from '@type/models/state';

export const getApplicationsEvent = createAsyncThunk(
  'application/fetch-list-applications-event',
  async (eventId: string, { rejectWithValue }) => {
    try {
      const response = await ApplicationApi.getApplicationsEvent(eventId);
      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);

interface ApplicationEventState extends BaseSliceProps {
  data: Application[];
}

const initialState: ApplicationEventState = {
  data: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const applicationEventSlice = createSlice({
  name: 'applicationEvent',
  initialState,
  reducers: {
    resetApplicationsEvent: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getApplicationsEvent.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getApplicationsEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload?.data ?? [];
      })
      .addCase(getApplicationsEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload as Error;
      });
  },
});

export const { resetApplicationsEvent } = applicationEventSlice.actions;
export default applicationEventSlice.reducer;
