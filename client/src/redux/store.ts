import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productSlices";
import userReducer from "./slices/profileSlices";
import searchProductReducer from "./slices/productSearchSlice"

export const store = configureStore({
  reducer: { 
    products: productsReducer, 
    user: userReducer,
    searchProduct: searchProductReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
