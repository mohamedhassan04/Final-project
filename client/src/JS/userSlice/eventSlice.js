import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const eventAdd = createAsyncThunk("event/add", async (event) => {
  try {
    let eve = axios.post("http://localhost:5000/event/addevent", event);
    return eve;
  } catch (error) {
    console.log(error);
  }
});

export const eventGet = createAsyncThunk("event/get", async () => {
  try {
    let eve = axios.get("http://localhost:5000/event/getevent");
    return eve;
  } catch (error) {
    console.log(error);
  }
});

export const eventDel = createAsyncThunk("event/delete", async (id) => {
  try {
    let eve = axios.delete(`http://localhost:5000/event/${id}`);
    return eve;
  } catch (error) {
    console.log(error);
  }
});

export const eventapprouved = createAsyncThunk(
  "event/edit",
  async ({ id, evupdated }) => {
    try {
      let result = axios.put(`http://localhost:5000/event/${id}`, evupdated);
      console.log(evupdated);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);
export const eventUpdt = createAsyncThunk(
  "event/edit",
  async ({ id, edit }) => {
    try {
      let result = axios.put(`http://localhost:5000/event/${id}`, edit);
      console.log(edit);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);
export const eventUpdtpart = createAsyncThunk(
  "event/eventUpdtpart",
  async ({ id, participant }) => {
    try {
      let result = axios.put(
        `http://localhost:5000/event/part/${id}`,
        participant
      );
      console.log(participant);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const eventLike = createAsyncThunk(
  "event/eventLike",
  async ({ id, userid }) => {
    try {
      let result = axios.put(
        `http://localhost:5000/event/like/${id}/${userid}`
      );
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const eventunLike = createAsyncThunk(
  "event/eventLike",
  async ({ id, userid }) => {
    try {
      let result = axios.put(
        `http://localhost:5000/event/unlike/${id}/${userid}`
      );
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  event: null,
  status: null,
};

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
  extraReducers: {
    [eventAdd.pending]: (state) => {
      state.status = "pending";
    },
    [eventAdd.fulfilled]: (state) => {
      state.status = "success";
    },
    [eventAdd.rejected]: (state) => {
      state.status = "fail";
    },
    [eventGet.pending]: (state) => {
      state.status = "pending";
    },
    [eventGet.fulfilled]: (state, action) => {
      state.status = "success";
      state.event = action.payload.data.events;
    },
    [eventGet.rejected]: (state) => {
      state.status = "fail";
    },
    [eventDel.pending]: (state) => {
      state.status = "pending";
    },
    [eventDel.fulfilled]: (state) => {
      state.status = "success";
    },
    [eventDel.rejected]: (state) => {
      state.status = "fail";
    },
    [eventUpdt.pending]: (state) => {
      state.status = "pending";
    },
    [eventUpdt.fulfilled]: (state) => {
      state.status = "success";
    },
    [eventUpdt.rejected]: (state) => {
      state.status = "fail";
    },
    [eventUpdtpart.pending]: (state) => {
      state.status = "pending";
    },
    [eventUpdtpart.fulfilled]: (state) => {
      state.status = "success";
    },
    [eventUpdtpart.rejected]: (state) => {
      state.status = "fail";
    },
    [eventapprouved.pending]: (state) => {
      state.status = "pending";
    },
    [eventapprouved.fulfilled]: (state) => {
      state.status = "success";
    },
    [eventapprouved.rejected]: (state) => {
      state.status = "fail";
    },
  },
});
export default eventSlice.reducer;
