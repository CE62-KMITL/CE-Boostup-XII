import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserModelResponse } from "../../types/response.type";

export interface AuthAppState {
  accessToken: string | null;
  user: UserModelResponse | null;
  avatar: string | null;
}

const initialState: AuthAppState = {
  accessToken: null,
  user: null,
  avatar: null,
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
    setAvatar: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload;
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
  setAvatar,
} = authSlice.actions;