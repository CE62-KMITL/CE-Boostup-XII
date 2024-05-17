import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModelResponse } from "../../types/response.type";

export interface AuthAppState {
  accessToken: string | null;
  user: UserModelResponse | null;
}

const initialState: AuthAppState = {
  accessToken: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<AuthAppState>) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    setAuthAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setAuthUser: (state, action: PayloadAction<UserModelResponse>) => {
      state.user = action.payload;
    },
    deleteAuthState: (state) => {
      state.user = null;
      state.accessToken = null;
    },
  },
});

export const {
  setAuthState,
  setAuthAccessToken,
  setAuthUser,
  deleteAuthState,
} = authSlice.actions;