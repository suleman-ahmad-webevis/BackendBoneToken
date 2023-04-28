import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import paymentService from "./paymentService";
import { toast } from "react-toastify";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const createCheckoutSession = createAsyncThunk(
  "payment/createCheckoutSession",
  async (obj, thunkAPI) => {
    try {
      return await paymentService.createCheckoutSession(obj);
    } catch (error) {
      const message = error.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    reset: (state) => {
      // state.user = null;
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCheckoutSession.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(createCheckoutSession.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createCheckoutSession.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default paymentSlice.reducer;
