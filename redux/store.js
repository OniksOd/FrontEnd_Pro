import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import swapiReducer from "./swapiSlice";

export const store = configureStore({
  reducer: {
    swapi: swapiReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
