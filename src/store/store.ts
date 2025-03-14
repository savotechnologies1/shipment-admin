import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export const baseUrl = "/api/admin";
export const userUrl = "/api/user";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
