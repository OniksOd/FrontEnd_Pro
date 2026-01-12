import { call, put, all, takeLatest, takeEvery } from "redux-saga/effects";
import {
  fetchTodoList,
  fetchTodoListSuccess,
  addTodoItem,
  todoAdded,
  todoDelete,
  todoDeleteSuccess,
  todoChecked,
  todoCheckedSuccess,
  todoEdited,
  todoEditedSuccess,
} from "./todosSlice.js";

import { apiRequester } from "../helpers/api.js";

function* loadTodoList() {
  try {
    const todoList = yield call(apiRequester.fetchTodos);
    yield put({ type: fetchTodoListSuccess.type, todoList });
  } catch (e) {
    console.error("Failed to fetch todo list:", e);
    yield put({ type: fetchTodoListSuccess.type, todoList: [] });
  }
}
function* addTodoItemSaga(action) {
  console.log("Adding todo item:", action);
  try {
    const todoItem = yield call(apiRequester.addTodo, action.payload);
    yield put({ type: todoAdded.type, todoItem });
  } catch (e) {
    yield put({ type: fetchTodoListSuccess.type, todoList: [] });
  }
}
function* deleteTodoItemSaga(action) {
  try {
    yield call(apiRequester.deleteTodo, action.payload);
    yield put({ type: todoDeleteSuccess.type, payload: action.payload });
  } catch (e) {
    console.error("Failed to delete todo item:", e);
  }
}
function* checkTodoSaga(action) {
  console.log("Toggling todo item:", action);
  try {
    const updatedTodo = yield call(apiRequester.toggleTodo, action.payload);
    yield put({ type: todoCheckedSuccess.type, payload: updatedTodo });
  } catch (e) {
    console.error("Failed to toggle todo item:", e);
  }
}
function* editTodoSaga(action) {
  try {
    const updatedTodo = yield call(apiRequester.editTodo, action.payload);
    yield put({ type: todoEditedSuccess.type, payload: updatedTodo });
  } catch (e) {
    console.error("Failed to edit todo item:", e);
  }
}
function* todoSaga() {
  yield takeEvery(fetchTodoList.type, loadTodoList);
}
function* addTodoSaga() {
  yield takeEvery(addTodoItem.type, addTodoItemSaga);
}
function* deleteTodoSaga(action) {
  yield takeEvery(todoDelete.type, deleteTodoItemSaga);
}
function* checkTodoSag() {
  yield takeEvery(todoChecked.type, checkTodoSaga);
}
function* editTodoSag() {
  yield takeEvery(todoEdited.type, editTodoSaga);
}
function* rootSaga() {
  yield all([
    todoSaga(),
    addTodoSaga(),
    deleteTodoSaga(),
    checkTodoSag(),
    editTodoSag(),
  ]);
}

export { rootSaga };
