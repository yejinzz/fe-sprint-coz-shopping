import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    setProductData(state, action) {
      return action.payload;
    },
  },
});

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
