import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export const Input = ({ name, control, label }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: "Required field" }}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          label={label}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          fullWidth
        />
      )}
    />
  );
};
