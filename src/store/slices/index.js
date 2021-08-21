import { createSlice } from "@reduxjs/toolkit";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
    loading: true,
  },
  reducers: {
    setCountries: (state, { payload }) => {
      state.countries = payload;
      state.loading = false;
    },
    addCountry: (state, { payload }) => {
      state.countries = [...state.countries, payload];
      state.loading = false;
    },
    deleteCountry: (state, { payload }) => {
      state.countries = state.countries.filter(
        (country) => country !== payload
      );
      state.loading = false;
    },
  },
});

export const { setCountries, addCountry, deleteCountry } =
  countriesSlice.actions;

export default countriesSlice.reducer;
