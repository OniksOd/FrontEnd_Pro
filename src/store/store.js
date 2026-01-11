import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { todoReducer } from "../slices";
import { rootSaga } from "../sagas/saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);
