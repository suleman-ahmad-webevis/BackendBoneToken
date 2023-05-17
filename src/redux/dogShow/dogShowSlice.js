import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import DogShowService from "./dogShowService";

const initialState = {
  videoInfo: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const getTheVideos = createAsyncThunk(
  "product/getTheProducts",
  async (obj, thunkAPI) => {
    try {
      console.log(obj);
      return await DogShowService.getTheVideosService();
    } catch (error) {
      const message = error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const dogShowSlice = createSlice({
  name: "dogShow",
  initialState,
  reducers: {
    reset: (state) => {
      state.videoInfo = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTheVideos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTheVideos.fulfilled, (state, action) => {
        state.videoInfo = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getTheVideos.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { reset } = dogShowSlice.actions;
export default dogShowSlice.reducer;
