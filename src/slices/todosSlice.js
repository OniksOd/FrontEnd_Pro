import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    loading: false,
    todoList: [],
  },
  reducers: {
    fetchTodoList(state) {
      return state;
    },
    fetchTodoListSuccess(state, action) {
      state.todoList = action.todoList;
    },
    addTodoItem(state) {
      return state;
    },
    todoAdded(state, payload) {
      state.todoList.push(payload.todoItem);
    },

    todoDeleteSuccess(state, action) {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    },
    todoDelete(state) {
      return state;
    },
    todoChecked(state) {
      state.loading = true;
    },
    todoCheckedSuccess(state, action) {
      state.loading = false;
      const todo = state.todoList.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.checked = !todo.checked;
      }
    },
    todoEdited(state) {
      return state;
    },
    todoEditedSuccess(state, action) {
      const index = state.todoList.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todoList[index] = action.payload;
      }
    },
  },
});

export const {
  todoAdded,
  todoToggled,
  addTodoItem,
  fetchTodoList,
  fetchTodoListSuccess,
  todoDelete,
  todoDeleteSuccess,
  todoChecked,
  todoCheckedSuccess,
  todoEdited,
  todoEditedSuccess,
} = todosSlice.actions;

export const todoReducer = todosSlice.reducer;
