import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import data from "../../data.json";

export const loadCountries = createAsyncThunk(
  "@@countries/load-countries",
  () => {
    return { data };
  }
);

// export const loadCountries = createAsyncThunk(
//   "@@countries/load-countries",
//   (_, { extra: { client, api } }) => {
//     return client.get(api.ALL_COUNTRIES);
//   }
// );

const initialState = {
  status: "idle",
  error: null,
  list: [],
};

const countrySlice = createSlice({
  name: "@@countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadCountries.fulfilled, (state, action) => {
      state.status = "received";
      state.list = action.payload.data;
    });
    // .addCase(loadCountries.pending, (state) => {
    //   state.status = "loading";
    //   state.error = null;
    // })
    // .addCase(loadCountries.rejected, (state, action) => {
    //   state.status = "rejected";
    //   state.error = action.payload || action.meta.error;
    // })
    // .addCase(loadCountries.fulfilled, (state, action) => {
    //   state.status = "received";
    //   state.list = action.payload.data;
    // });
  },
});

export const countryReducer = countrySlice.reducer;

export const selectCountriesInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  qty: state.countries.list.length,
});
export const selectAllCountries = (state) => state.countries.list;

// export const selectVisibleCountries = (state, { search = "", region = "" }) => {
//   return state.countries.list.filter(
//     (country) =>
//       country.name.toLowerCase().includes(search.toLowerCase()) &&
//       country.region.includes(region)
//   );
// };

export const selectVisibleCountries = (
  state,
  { search = "", region = "", filterStatus = "" }
) => {
  return state.countries.list.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesRegion = region ? item.description.includes(region) : true;
    let matchesStatus = true;

    if (filterStatus === "true") {
      matchesStatus = item.isActive === true;
    } else if (filterStatus === "false") {
      matchesStatus = item.isActive === false;
    }
    // Если filterStatus пустая строка, фильтр по статусу не применяется
    return matchesSearch && matchesRegion && matchesStatus;
  });
};
