import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthAppState {
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: AuthAppState = {
  accessToken: null,
  refreshToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<AuthAppState>) => {
      state.accessToken = action.payload.accessToken;
    },
    setAuthAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setAuthRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
  },
});

export const {
  setAuthState,
  setAuthAccessToken,
  setAuthRefreshToken,
} = authSlice.actions;
