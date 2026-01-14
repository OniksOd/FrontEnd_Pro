import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchSwapi } from "../../redux/swapiSlice";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import { Button, Box, Stack } from "@mui/material";

export default function SearchForm() {
  const dispatch = useDispatch();
  const methods = useForm();
  const onSubmit = (data) => {
    dispatch(fetchSwapi(data.query));
  };

  return (
    <FormContainer formContext={methods} onSuccess={onSubmit}>
      <Stack
        display={"flex"}
        flexDirection="row"
        alignItems={"center"}
        spacing={2}
        my={2}
      >
        <Box>https://swapi.py4e.com/api</Box>
        <TextFieldElement
          sx={{ flexGrow: 1, padding: 1 }}
          name="query"
          label="Resource path"
          placeholder="/people/1/"
          required
        />
        <Button type="submit">Search</Button>
      </Stack>
    </FormContainer>
  );
}
