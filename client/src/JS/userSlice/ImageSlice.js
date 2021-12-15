import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const imageAdd = createAsyncThunk("image/add", async (image) => {
  try {
    let im = axios.post("http://localhost:5000/image/", image);
    return im;
  } catch (error) {
    console.log(error);
  }
});

export const imageGet = createAsyncThunk("image/get", async () => {
  try {
    let im = axios.get("http://localhost:5000/image/");
    return im;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  images: null,
  status: null,
};

export const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {},
  extraReducers: {
    [imageAdd.pending]: (state) => {
      state.status = "pending";
    },
    [imageAdd.fulfilled]: (state) => {
      state.status = "success";
    },
    [imageAdd.rejected]: (state) => {
      state.status = "fail";
    },
    [imageGet.pending]: (state) => {
      state.status = "pending";
    },
    [imageGet.fulfilled]: (state, action) => {
      state.status = "success";
      state.images = action.payload.data.events;
    },
    [imageGet.rejected]: (state) => {
      state.status = "fail";
    },
  },
});
export default imageSlice.reducer;
