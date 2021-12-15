import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postAdd = createAsyncThunk("post/add", async (post) => {
  try {
    let eve = axios.post("http://localhost:5000/post/addpost", post);
    return eve;
  } catch (error) {
    console.log(error);
  }
});

export const postGet = createAsyncThunk("post/get", async () => {
  try {
    let eve = axios.get("http://localhost:5000/post/getpost");
    return eve;
  } catch (error) {
    console.log(error);
  }
});

export const postDel = createAsyncThunk("post/delete", async (id) => {
  try {
    let eve = axios.delete(`http://localhost:5000/post/${id}`);
    return eve;
  } catch (error) {
    console.log(error);
  }
});

export const postUpdt = createAsyncThunk(
  "post/updatedpost",
  async ({ id, updatedpost }) => {
    try {
      let result = axios.put(`http://localhost:5000/post/${id}`, updatedpost);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const commentAdd = createAsyncThunk(
  "post/comment/add",
  async ({ postId, userid, post }) => {
    try {
      let result = axios.post(
        `http://localhost:5000/post/comment/${postId}/${userid}`,
        post
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);
export const commentDelete = createAsyncThunk(
  "post/comment/delete",
  async ({ postId, commentId, userid }) => {
    try {
      let result = axios.delete(
        `http://localhost:5000/post/comment/${postId}/${commentId}/${userid}`
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  post: null,
  status: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [postAdd.pending]: (state) => {
      state.status = "pending";
    },
    [postAdd.fulfilled]: (state) => {
      state.status = "success";
    },
    [postAdd.rejected]: (state) => {
      state.status = "fail";
    },
    [postGet.pending]: (state) => {
      state.status = "pending";
    },
    [postGet.fulfilled]: (state, action) => {
      state.status = "success";
      state.post = action.payload.data.posts;
    },
    [postGet.rejected]: (state) => {
      state.status = "fail";
    },
    [postDel.pending]: (state) => {
      state.status = "pending";
    },
    [postDel.fulfilled]: (state) => {
      state.status = "success";
    },
    [postDel.rejected]: (state) => {
      state.status = "fail";
    },
    [postUpdt.pending]: (state) => {
      state.status = "pending";
    },
    [postUpdt.fulfilled]: (state) => {
      state.status = "success";
    },
    [postUpdt.rejected]: (state) => {
      state.status = "fail";
    },
  },
});
export default postSlice.reducer;
