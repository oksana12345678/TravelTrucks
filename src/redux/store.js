import { configureStore } from "@reduxjs/toolkit";
import { camperReducer } from "./camper/slice";
import { filterReducer } from "./filter/slice";

export const store = configureStore({
  reducer: {
    campers: camperReducer,
    filter: filterReducer,
  },
});
