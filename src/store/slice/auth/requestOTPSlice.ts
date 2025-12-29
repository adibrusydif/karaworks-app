import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthApi } from '@api/endpoints/auth';
import { handleAxiosError } from '@api/errorHandler';
import { RequestOTPPayload } from '@type/api/auth';
import { RequestOTP } from '@type/models/auth';
import { BaseStateProps } from '@type/models/state';

export const requestOTP = createAsyncThunk(
  'auth/requst-otp',
  async (payload: RequestOTPPayload, thunkAPI) => {
    try {
      const response = await AuthApi.requestOTP(payload);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(handleAxiosError(error));
    }
  },
);

const initialState: BaseStateProps<RequestOTP | null> = {
  data: null,
  isLoading: false,
  isError: false,
  error: null,
};

export const requestOTPSlice = createSlice({
  name: 'requestOTP',
  initialState,
  reducers: {
    resetRequestOTP: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestOTP.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(requestOTP.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(requestOTP.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload as Error;
      });
  },
});

export const { resetRequestOTP } = requestOTPSlice.actions;
export default requestOTPSlice.reducer;
