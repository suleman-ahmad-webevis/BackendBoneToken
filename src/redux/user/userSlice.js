import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";
import { toast } from "react-toastify";

const initialState = {
  userInfo: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const registerTheUser = createAsyncThunk(
  "user/registerTheUser",
  async (obj, thunkAPI) => {
    try {
      return await userService.registerTheUserService(obj);
    } catch (error) {
      console.log("The error", error);
      const message = error.response.data.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const loginTheUser = createAsyncThunk(
  "user/loginTheUser",
  async (obj, thunkAPI) => {
    try {
      return await userService.loginTheUserService(obj);
    } catch (error) {
      const message = error.response.data.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const verifyTheOtp = createAsyncThunk(
  "user/verifyTheOtp",
  async (obj, thunkAPI) => {
    try {
      return await userService.verifyTheOtpService(obj);
    } catch (error) {
      const message = error.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.user = null;
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerTheUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(registerTheUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userInfo = action.payload;
      })
      .addCase(registerTheUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.adminInfo = null;
      })
      .addCase(loginTheUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginTheUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userInfo = action.payload;
      })
      .addCase(loginTheUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.adminInfo = null;
      })
      .addCase(verifyTheOtp.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(verifyTheOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(verifyTheOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
