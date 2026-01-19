import {
  Checkbox,
  Button,
  FormControlLabel,
  Stack,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

export const TodoListItem = ({ item, onDeleteItem, onMarkChecked, onEdit }) => {
  const { description, id, checked } = item;
  const onDelete = () => {
    onDeleteItem(id);
  };
  const onEditItem = () => {
    onEdit(item);
  };
  const handleChecked = (event) => {
    onMarkChecked(id, event.target.checked);
  };
  return (
    <Stack direction="row" data-testid={`todo-item-${id}`}>
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleChecked} />}
        label={description}
      />
      <Button onClick={onDelete}>Delete</Button>
      <IconButton onClick={onEditItem}>
        <EditIcon />
      </IconButton>
    </Stack>
  );
};
