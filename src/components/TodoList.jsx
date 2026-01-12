import { Stack, Typography } from "@mui/material";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ items, onDeleteItem, onMarkChecked, onEdit }) => {
  return (
    <Stack>
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
