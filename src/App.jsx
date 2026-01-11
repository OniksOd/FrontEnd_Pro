import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const App = () => {
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
