import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};
export const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});
