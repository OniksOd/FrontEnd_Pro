import { useState, useEffect } from "react";
import { Form } from "./Form";
import { TodoList } from "./TodoList";
import { EditDialog } from "./EditDialog";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchTodoList,
  addTodoItem,
  todoDelete,
  todoChecked,
  todoEdited,
} from "./slices/todosSlice";

export const Main = () => {
  const [editItem, setEdit] = useState(null);
  const { todoList } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const getTodoList = () => {
    dispatch(fetchTodoList());
  };
  const addNewTodo = (item) => {
    dispatch(addTodoItem(item));
  };
  const onDeleteItem = (id) => {
    dispatch(todoDelete(id));
  };
  useEffect(() => {
    getTodoList();
  }, []);
  const onSuccess = (item) => {
    const newItem = {
      ...item,
      //   id: window.crypto.randomUUID(),
      checked: false,
    };
    addNewTodo(newItem);
  };
  const onEditConfirm = (item) => {
    dispatch(todoEdited(item));
  };
  const onEdit = (item) => {
    setEdit(item);
  };
  const onHandleCloseDialog = () => {
    setEdit(null);
  };
  const onMarkChecked = (id, checked) => {
    dispatch(todoChecked({ id, checked }));
  };

  return (
    <>
      <Form onSuccess={onSuccess} />
      <TodoList
        items={todoList}
        onDeleteItem={onDeleteItem}
        onMarkChecked={onMarkChecked}
        onEdit={onEdit}
      />
      <EditDialog
        item={editItem}
        onSuccess={onEditConfirm}
        onClose={onHandleCloseDialog}
      />
    </>
  );
};
