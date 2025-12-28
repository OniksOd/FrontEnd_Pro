import { Box, Button, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const App = () => {
  const theme = useTheme();
  return (
    <Box
      className="content"
      sx={{
        bgcolor: "background.paper",
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};
