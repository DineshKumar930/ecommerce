import { createSlice } from "@reduxjs/toolkit";

// Load existing orders from localStorage
const initialOrders = JSON.parse(localStorage.getItem("orderHistory")) || [];

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orderHistory: initialOrders
  },
  reducers: {
    addOrder: (state, action) => {
      // action.payload should include userId, items, total, etc.
      state.orderHistory.push(action.payload);
      localStorage.setItem("orderHistory", JSON.stringify(state.orderHistory));
    },
    cancelOrder: (state, action) => {
      const orderId = action.payload;
      state.orderHistory = state.orderHistory.map(order =>
        order.id === orderId ? { ...order, status: "Canceled" } : order
      );
      localStorage.setItem("orderHistory", JSON.stringify(state.orderHistory));
    },
    clearOrders: (state) => {
      state.orderHistory = [];
      localStorage.removeItem("orderHistory");
    }
  }
});

export const { addOrder, cancelOrder, clearOrders } = orderSlice.actions;
export default orderSlice.reducer;
