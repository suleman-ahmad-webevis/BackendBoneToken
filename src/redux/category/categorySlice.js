import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import categoryService from "./categoryService";
import { toast } from "react-toastify";

const initialState = {
  categories: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const getAllCategory = createAsyncThunk(
  "category/getAllCategory",
  async (obj, thunkAPI) => {
    try {
      return await categoryService.getAllCategory();
    } catch (err) {
      const message = err.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    reset: (state) => {
      state.categories = [];
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.categories = action.payload.data;
      })
      .addCase(getAllCategory.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { reset } = categorySlice.actions;
export default categorySlice.reducer;
