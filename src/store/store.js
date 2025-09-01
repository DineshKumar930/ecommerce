import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice";
import orderReducer from "../features/order/orderSlice";
import productsReducer from "../features/products/productSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authReducer,        // ✅ user login/register/profile
    cart: cartReducer,        // ✅ shopping cart
    orders: orderReducer,     // ✅ order history
    products: productsReducer, // ✅ product listing + filtering
  },
  devTools: process.env.NODE_ENV !== "production",
});
