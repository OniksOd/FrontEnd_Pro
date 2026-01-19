import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import { use, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack } from "@mui/material";
import * as z from "zod";

const schema = z.object({
  description: z
    .string()
    .min(5, "Description must be at least 5 characters long"),
});

export const Form = ({ item, containerProps, onSuccess }) => {
  const formContext = useForm({
    defaultValues: { description: "" },
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(schema),
  });

  const handleSuccess = (data) => {
    onSuccess(data);
    formContext.reset();
  };

  useEffect(() => {
    if (item) {
      formContext.reset(item);
      return;
    }
    formContext.reset();
  }, [item]);

  return (
    <FormContainer formContext={formContext} onSuccess={handleSuccess}>
      <Stack
        sx={{
          width: "30%",
        }}
        {...containerProps}
      >
        <TextFieldElement
          name="description"
          label="Name"
          required
          slotProps={{
            htmlInput: {
              "data-testid": "name-input",
            },
            formHelperText: {
              "data-testid": "name-error-text",
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2 }}
          data-testid="submit-btn"
        >
          Submit
        </Button>
      </Stack>
    </FormContainer>
  );
};
