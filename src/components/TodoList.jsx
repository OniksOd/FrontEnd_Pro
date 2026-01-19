import { Stack, Typography } from "@mui/material";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ items, onDeleteItem, onMarkChecked, onEdit }) => {
  return (
    <Stack data-testid="todo-list">
      {items.map((item) => (
        <TodoListItem
          key={item.id}
          item={item}
          onDeleteItem={onDeleteItem}
          onMarkChecked={onMarkChecked}
          onEdit={onEdit}
        />
      ))}
    </Stack>
  );
};
