///////////////////
// ver.2

import { createSlice } from "@reduxjs/toolkit";

export const flightSlice = createSlice({
  name: "flight",

  initialState: {
    beforeFlight: [],
    afterFlight: [],
  },

  reducers: {
    getBefore: {
      reducer: (state, action) => {
        state.beforeFlight = action.payload;
      },
      prepare: (data, load = true) => ({
        payload: {
          data: data,
          isLoading: load,
        },
      }),
    },

    getAfter: {
      reducer: (state, action) => {
        state.afterFlight = action.payload;
      },
      prepare: (data, load = true) => ({
        payload: {
          data: data,
          isLoading: load,
        },
      }),
    },
  },
});

export const { getBefore, getAfter } = flightSlice.actions;
export default flightSlice.reducer;
