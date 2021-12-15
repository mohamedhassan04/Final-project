import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import eventSlice from "./userSlice/eventSlice";
import imageSlice from "./userSlice/ImageSlice";
import postSlice from "./userSlice/postSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    event: eventSlice,
    image: imageSlice,
    post: postSlice,
  },
});
