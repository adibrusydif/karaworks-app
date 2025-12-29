import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthApi } from '@api/endpoints/auth';
import { handleAxiosError } from '@api/errorHandler';
import { VerifyOTPPayload } from '@type/api/auth';
import { VerifyOTP } from '@type/models/auth';
import { BaseStateProps } from '@type/models/state';

export const verifyOTP = createAsyncThunk(
  'auth/verify-otp',
  async (payload: VerifyOTPPayload, { rejectWithValue }) => {
    try {
      const response = await AuthApi.verifyOTP(payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);

const initialState: BaseStateProps<VerifyOTP | null> = {
  data: null,
  isLoading: false,
  isError: false,
  error: null,
};

export const verifyOTPSlice = createSlice({
  name: 'verify-otp',
  initialState,
  reducers: {
    resetVerifyOTP: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyOTP.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload as Error;
      });
  },
});

export const { resetVerifyOTP } = verifyOTPSlice.actions;
export default verifyOTPSlice.reducer;
