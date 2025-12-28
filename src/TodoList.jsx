import { Stack, Typography } from "@mui/material";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ items, onDeleteItem, onMarkChecked }) => {
  return (
    <Stack>
      {items.map((item) => (
        <TodoListItem
          key={item.id}
          item={item}
          onDeleteItem={onDeleteItem}
          onMarkChecked={onMarkChecked}
        />
      ))}
    </Stack>
  );
};
