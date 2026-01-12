import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { todoReducer } from "./todosSlice";
import { rootSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    ...middleware,
  ],
});

sagaMiddleware.run(rootSaga);
