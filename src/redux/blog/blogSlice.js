import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogService from "./blogService";
import { toast } from "react-toastify";

const initialState = {
  blogs: [],
  allBlogs: [],
  mayLikeBlogs: [],
  total: 0,
  page: 1,
  blog: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const getTheBlogs = createAsyncThunk(
  "blog/getTheBlogs",
  async (obj, thunkAPI) => {
    try {
      return await blogService.getTheBlogsService(obj);
    } catch (error) {
      const message = error.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const blogsById = createAsyncThunk(
  "blog/blogsById",
  async (obj, thunkAPI) => {
    try {
      return await blogService.getTheBlogByIdService(obj);
    } catch (error) {
      const message = error.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const blogMayLike = createAsyncThunk(
  "blog/mayLike",
  async (obj, thunkAPI) => {
    try {
      return await blogService.getTheMayLikeBlogs(obj);
    } catch (error) {
      const message = error.message;
      // toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    reset: (state) => {
      state.blogs = [];
      state.allBlogs = [];
      state.mayLikeBlogs = [];
      state.total = 0;
      state.page = 1;
      state.blog = {};
      // state.isLoading = false;
      // state.isSuccess = false;
      // state.isError = false;
    },
    setAllBlogs: (state) => {
      //forInfiniteScroll
      state.allBlogs = [
        ...state.allBlogs,
        ...(state.blogs?.length ? state.blogs : []),
      ];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTheBlogs.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getTheBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blogs = action.payload.data;
        state.total = action.payload.count;
      })
      .addCase(getTheBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(blogsById.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(blogsById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blog = action.payload;
      })
      .addCase(blogsById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        // state.blog = {};
      })
      .addCase(blogMayLike.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(blogMayLike.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.mayLikeBlogs = action.payload;
      })
      .addCase(blogMayLike.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { reset, setAllBlogs } = blogSlice.actions;
export default blogSlice.reducer;
