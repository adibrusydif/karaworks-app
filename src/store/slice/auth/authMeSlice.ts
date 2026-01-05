import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthApi } from '@api/endpoints/auth';
import { handleAxiosError } from '@api/errorHandler';
import { BaseStateProps } from '@type/models/state';
import { User } from '@type/models/user';

export const getAuthMe = createAsyncThunk(
  'auth/fetch-me',
  async (_, { rejectWithValue }) => {
    try {
      const response = await AuthApi.authMe();
      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);

const initialState: BaseStateProps<User | null> = {
  data: null,
  isLoading: false,
  isError: false,
  error: null,
};

export const authMeSlice = createSlice({
  name: 'authMe',
  initialState,
  reducers: {
    resetAuthMe: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAuthMe.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getAuthMe.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.user;
      })
      .addCase(getAuthMe.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload as Error;
      });
  },
});

export const { resetAuthMe } = authMeSlice.actions;
export default authMeSlice.reducer;
