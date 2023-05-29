import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product";
import accountReducer from "./features/account";

export const store = configureStore({
  reducer: {
    products: productReducer,
    account: accountReducer,
  },
});
