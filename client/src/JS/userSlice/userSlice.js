import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userRegister = createAsyncThunk("user/register", async (user) => {
  try {
    let response = await axios.post(
      "http://localhost:5000/user/register",
      user
    );
    return await response;
  } catch (error) {
    console.log(error);
  }
});

export const userLogin = createAsyncThunk("user/login", async (user) => {
  try {
    let response = await axios.post("http://localhost:5000/user/login", user);
    return await response;
  } catch (error) {
    console.log(error);
  }
});

export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let response = await axios.get("http://localhost:5000/user/current", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return await response;
  } catch (error) {
    console.log(error);
  }
});

export const userUpdt = createAsyncThunk(
  "user/update",
  async ({ id, updated }) => {
    try {
      let result = axios.put(`http://localhost:5000/user/${id}`, updated);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const usersget = createAsyncThunk("user/update", async () => {
  try {
    let result = axios.get("http://localhost:5000/user/getuser");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const userDel = createAsyncThunk("user/delete", async (id) => {
  try {
    let eve = axios.delete(`http://localhost:5000/user/${id}`);
    return eve;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  user: null,
  users: null,
  status: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [userRegister.pending]: (state) => {
      state.status = "pending";
    },
    [userRegister.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload.data.newUser;
      localStorage.setItem("token", action.payload?.data.token);
    },
    [userRegister.rejected]: (state) => {
      state.status = "fail";
    },
    [userLogin.pending]: (state) => {
      state.status = "pending";
    },
    [userLogin.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload.data.user;
      localStorage.setItem("token", action.payload.data.token);
    },
    [userLogin.rejected]: (state) => {
      state.status = "fail";
    },
    [userCurrent.pending]: (state) => {
      state.status = "pending";
    },
    [userCurrent.fulfilled]: (state, action) => {
      state.status = "success";
      state.user = action.payload.data.user;
    },
    [userCurrent.rejected]: (state) => {
      state.status = "fail";
    },
    [userUpdt.pending]: (state) => {
      state.status = "pending";
    },
    [userUpdt.fulfilled]: (state) => {
      state.status = "success";
    },
    [userUpdt.rejected]: (state) => {
      state.status = "fail";
    },
    [usersget.pending]: (state) => {
      state.status = "pending";
    },
    [usersget.fulfilled]: (state, action) => {
      state.status = "success";
      state.users = action.payload.data.users;
    },
    [usersget.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions;

export default userSlice.reducer;
