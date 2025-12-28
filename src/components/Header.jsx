import { Typography, Stack, ListItem, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Header = () => {
  return (
    <header className="header">
      <Typography variant="h3">My Blog</Typography>
      <Stack
        component="ul"
        direction="row"
        justifyContent="center"
        sx={{
          display: "flex",
          flex: "1",
        }}
      >
        <ListItem sx={{ width: "auto" }}>
          <Link component={RouterLink} to="/main">
            Main
          </Link>
        </ListItem>
        <ListItem sx={{ width: "auto" }}>
          <Link component={RouterLink} to="/contacts">
            Contacts
          </Link>
        </ListItem>
        <ListItem sx={{ width: "auto" }}>
          <Link component={RouterLink} to="/about-me">
            About Me
          </Link>
        </ListItem>
      </Stack>
      <Typography className="themeSwitcher" component="div">
        Change Theme: <ThemeSwitcher />
      </Typography>
    </header>
  );
};
