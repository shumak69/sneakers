import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import card from "./slices/card";
import cart from "./slices/cart";
import favorite from "./slices/favorite";
export const store = configureStore({
  reducer: { card, cart, favorite },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
