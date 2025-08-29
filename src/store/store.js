import cartReducer from "../features/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    cart: cartReducer,   // you can add more reducers later (auth, products, etc.)
  },
});
