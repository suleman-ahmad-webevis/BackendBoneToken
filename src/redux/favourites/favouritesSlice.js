import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  favouritesItems: [],
  favouritesTotalQuantity: 0,
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addToFavourites(state, action) {
      const tempProduct = { ...action.payload, favouritesQuantity: 1 };
      state.favouritesItems.push(tempProduct);
      toast.success("Added to favourites", { theme: "colored" });
    },
    removeFromFavourites(state, action) {
      const filteredItems = state.favouritesItems.filter(
        (favItem) => favItem._id !== action.payload._id
      );
      toast.success("Removed from favourites", { theme: "colored" });
      state.favouritesItems = filteredItems;
    },
    clearFavourites(state) {
      if (state.favouritesItems.length) {
        state.favouritesItems = [];
        toast.success("Favourites cleared", { theme: "colored" });
      } else toast.info("No product in favourites", { theme: "colored" });
    },
    getTotalsFavourites(state) {
      let quantity = state.favouritesItems.length;
      state.favouritesTotalQuantity = quantity;
    },
  },
});

export const {
  addToFavourites,
  removeFromFavourites,
  clearFavourites,
  getTotalsFavourites,
} = favouritesSlice.actions;

export default favouritesSlice.reducer;
