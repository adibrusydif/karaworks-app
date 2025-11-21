import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  role: 'worker' | 'hotel' | null;
}

const initialState: AuthState = {
  token: null,
  role: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setRole: (state, action: PayloadAction<'worker' | 'hotel'>) => {
      state.role = action.payload;
    },
    setAuth: (state, action: PayloadAction<AuthState>) => {
      state.token = action.payload.token;
      state.role = action.payload.role;
    },
    resetAuth: (state) => {
      state.token = null;
      state.role = null;
    },
  },
});

export const { setToken, setRole, setAuth, resetAuth } = authSlice.actions;

export default authSlice.reducer;
