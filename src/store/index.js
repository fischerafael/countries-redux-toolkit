import { configureStore } from "@reduxjs/toolkit";
import countriesReducers from "./slices";

export const store = configureStore({
  reducer: {
    countries: countriesReducers,
  },
});
