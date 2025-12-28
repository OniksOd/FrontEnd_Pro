import { Checkbox, Button, FormControlLabel, Stack } from "@mui/material";

export const TodoListItem = ({ item, onDeleteItem, onMarkChecked }) => {
  const { description, id, checked } = item;
  const onDelete = () => {
    onDeleteItem(id);
  };
  const handleChecked = (event) => {
    console.log(event.target.checked);
    onMarkChecked(id, event.target.checked);
  };
  return (
    <Stack direction="row">
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleChecked} />}
        label={description}
      />
      <Button onClick={onDelete}>Delete</Button>
    </Stack>
  );
};
