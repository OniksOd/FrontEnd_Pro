import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://swapi.py4e.com/api/";

export const fetchSwapi = createAsyncThunk(
  "swapi/fetchSwapi",
  async (query, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}${query}`);
      if (!response.ok) throw new Error("Bad request");
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const swapiSlice = createSlice({
  name: "swapi",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },

  reducers: {
    clearData(state) {
      state.data = null;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchSwapi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSwapi.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSwapi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Request failed";
      });
  },
});

export const { clearData } = swapiSlice.actions;

export const swapiReducer = swapiSlice.reducer;
