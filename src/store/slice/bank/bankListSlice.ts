import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BankApi } from '@api/endpoints/bank';
import { handleAxiosError } from '@api/errorHandler';
import { Bank } from '@type/models/bank';
import { BaseSliceProps } from '@type/models/state';

export const getBankList = createAsyncThunk(
  'bank/fetch-list-bank',
  async (_, { rejectWithValue }) => {
    try {
      const response = await BankApi.getBanks();
      return response.data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);

interface BankListState extends BaseSliceProps {
  data: Bank[];
}

const initialState: BankListState = {
  data: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const bankListSlice = createSlice({
  name: 'bankList',
  initialState,
  reducers: {
    resetBankList: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBankList.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getBankList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload?.data ?? [];
      })
      .addCase(getBankList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload as Error;
      });
  },
});

export const { resetBankList } = bankListSlice.actions;
export default bankListSlice.reducer;
