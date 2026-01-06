import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";

export const ItemsList = () => {
  const items = useSelector((state) => state.todos.items);
  return (
    <Box sx={{ width: "100%", mt: 10, bgcolor: "background.paper" }}>
      <List>
        {items.map((item) => (
          <>
            <Divider />
            <ListItem>
              <ListItemText primary={item} />
            </ListItem>
          </>
        ))}
      </List>
    </Box>
  );
};
