import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { authSlice } from "./slices/auth.slice";
import { problemSlice } from "./slices/problems.slice";
import { attachmentSlice } from "./slices/attachments.slice";
import { problemTagSlice } from "./slices/problemTags.slice";
import storage from "./storage";

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  problem: problemSlice.reducer,
  attachment: attachmentSlice.reducer,
  problemTags: problemTagSlice.reducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth", "problem", "attachment", "problemTags"],
};

const persistedReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { persistor, store };

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;