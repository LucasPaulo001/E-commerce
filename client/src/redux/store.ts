import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/postSlices";
import userReducer from "./slices/profileSlices";

export const store = configureStore({
  reducer: { products: productsReducer, user: userReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
