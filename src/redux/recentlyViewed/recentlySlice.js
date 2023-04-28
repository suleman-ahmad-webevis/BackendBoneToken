import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recentlyViewedProducts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const recentProductSlice = createSlice({
  name: "recentProduct",
  initialState,
  reducers: {
    recentlyViewPro: (state, action) => {
      const isItem = state.recentlyViewedProducts.find((item) => {
        return item._id === action.payload._id;
      });
      if (isItem !== undefined) {
      } else {
        if (
          state.recentlyViewedProducts.length > 11 &&
          Object.keys(action.payload).length > 0
        ) {
          state.recentlyViewedProducts.pop();
          state.recentlyViewedProducts.unshift(action.payload);
        } else {
          if (Object.keys(action.payload).length > 0)
            state.recentlyViewedProducts.unshift(action.payload);
        }
      }
    },
  },
});

export const { reset, recentlyViewPro } = recentProductSlice.actions;
export default recentProductSlice.reducer;
