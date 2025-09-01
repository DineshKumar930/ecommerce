import productsData from "../../data/products.json";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: productsData,
  filteredProducts: productsData,
  // extract unique categories from products.json
  categories: ["All", ...new Set(productsData.map((p) => p.category))],
  selectedCategory: "All",
  searchQuery: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredProducts = state.products.filter((p) => {
        const matchCategory =
          action.payload === "All"
            ? true
            : p.category.toLowerCase() === action.payload.toLowerCase();
        const matchSearch = p.name
          .toLowerCase()
          .includes(state.searchQuery.toLowerCase());
        return matchCategory && matchSearch;
      });
    },
    filterBySearch: (state, action) => {
      state.searchQuery = action.payload;
      state.filteredProducts = state.products.filter((p) => {
        const matchCategory =
          state.selectedCategory === "All"
            ? true
            : p.category.toLowerCase() === state.selectedCategory.toLowerCase();
        const matchSearch = p.name
          .toLowerCase()
          .includes(action.payload.toLowerCase());
        return matchCategory && matchSearch;
      });
    },
  },
});

export const { filterByCategory, filterBySearch } = productSlice.actions;
export default productSlice.reducer;
