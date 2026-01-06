import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { todos } from "../redux/slices/todoSlice";
import { Input } from "./Input";

export const TodoForm = () => {
  const dispatch = useDispatch();
  const { handleSubmit, reset, control } = useForm({
    defaultValues: {
      name: "",
    },
    mode: "onSubmit",
  });
  const onSubmit = (data) => {
    dispatch(todos.actions.addItem(data.name));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name="name" control={control} label="Name" />

      <Button variant="outlined" type="submit" style={{ height: "56px" }}>
        Add
      </Button>
    </form>
  );
};
