import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { EventApi } from '@api/endpoints/event';
import { handleAxiosError } from '@api/errorHandler';
import { QR } from '@type/models/event';

export const generateQRClockIn = createAsyncThunk(
  'event/generate-qr-clock-in',
  async (eventId: string, { rejectWithValue }) => {
    try {
      const response = await EventApi.generateQRClockIn(eventId);
      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);

export const generateQRClockOut = createAsyncThunk(
  'event/generate-qr-clock-out',
  async (eventId: string, { rejectWithValue }) => {
    try {
      const response = await EventApi.generateQRClockOut(eventId);
      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);

interface EventQRState {
  data: QR;
  isClockInLoading: boolean;
  isClockOutLoading: boolean;
  isError: boolean;
  error: Error | null;
}

const initialState: EventQRState = {
  data: {
    payload: {
      event_id: '',
      creator_id: '',
      generated_at: '',
      type: 'clock_in',
    },
    qr: '',
  },
  isClockInLoading: false,
  isClockOutLoading: false,
  isError: false,
  error: null,
};

export const eventQRSlice = createSlice({
  name: 'eventQR',
  initialState,
  reducers: {
    resetEventQR: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // CLOCK IN
      .addCase(generateQRClockIn.pending, (state) => {
        state.isClockInLoading = true;
        state.isError = false;
      })
      .addCase(generateQRClockIn.fulfilled, (state, action) => {
        state.isClockInLoading = false;
        state.data = action.payload;
      })
      .addCase(generateQRClockIn.rejected, (state, action) => {
        state.isClockInLoading = false;
        state.isError = true;
        state.error = action.payload as Error;
      })

      // CLOCK OUT
      .addCase(generateQRClockOut.pending, (state) => {
        state.isClockOutLoading = true;
        state.isError = false;
      })
      .addCase(generateQRClockOut.fulfilled, (state, action) => {
        state.isClockOutLoading = false;
        state.data = action.payload;
      })
      .addCase(generateQRClockOut.rejected, (state, action) => {
        state.isClockOutLoading = false;
        state.isError = true;
        state.error = action.payload as Error;
      });
  },
});

export const { resetEventQR } = eventQRSlice.actions;
export default eventQRSlice.reducer;
