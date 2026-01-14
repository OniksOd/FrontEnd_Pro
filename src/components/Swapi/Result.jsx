import { useSelector, useDispatch } from "react-redux";
import { clearData } from "../../redux/swapiSlice";
import { Button, Box, Typography } from "@mui/material";

export default function Result() {
  const { data, loading, error } = useSelector((state) => state.swapi);
  const dispatch = useDispatch();
  const onClickHandler = () => dispatch(clearData());

  if (loading) return <p>Loading...</p>;
  if (error) return <p> {error}</p>;
  if (!data)
    return (
      <Box sx={{ minHeight: "400px", border: "1px solid #ddd" }}>
        Enter request and press Search
      </Box>
    );

  return (
    <>
      <Typography
        component="pre"
        sx={{ overflow: "auto", maxHeight: "400px", border: "1px solid #ddd" }}
      >
        {JSON.stringify(data, null, 4)}
      </Typography>
      <Button onClick={onClickHandler} sx={{ mt: 2 }} variant="outlined">
        Clear
      </Button>
    </>
  );
}
