import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],           // Cart items
  filterCategory: "all" // Current category filter
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const exist = state.items.find((i) => i.id === item.id);
      if (exist) {
        exist.qty += 1;
      } else {
        state.items.push({ ...item, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    increaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.qty += 1;
    },
    decreaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
    },
    clearCart: (state) => {
      state.items = [];
    },
    // ✅ New reducer to filter by category
    setCategoryFilter: (state, action) => {
      state.filterCategory = action.payload; // e.g., "electronics", "fashion", "all"
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
  setCategoryFilter
} = cartSlice.actions;

export default cartSlice.reducer;
