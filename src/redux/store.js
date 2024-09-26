import { configureStore } from "@reduxjs/toolkit";
import { camperReducer } from "./camper/slice";

export const store = configureStore({
  reducer: {
    campers: camperReducer,
  },
});
