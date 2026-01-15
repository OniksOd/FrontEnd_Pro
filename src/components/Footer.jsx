import { Link, Box, Typography, List, ListItem } from "@mui/material";

export const Footer = () => (
  <Box component="footer" className="footer">
    <Typography variant="h2">My Blog</Typography>
    <List>
      <ListItem>
        Phone Number: <Link href="tel: +380636031826">+380636031826</Link>
      </ListItem>
      <ListItem>
        Email:
        <Link href="mailto: romanovkirill@ukr.net">romanovkirill@ukr.net</Link>
      </ListItem>
      <ListItem>
        Git:
        <Link href="https://github.com/OniksOd">
          https://github.com/OniksOd
        </Link>
      </ListItem>
    </List>
  </Box>
);
