import { Link, Box } from "@mui/material";

export const Footer = () => (
  <Box component="footer" className="footer">
    <h1>My Blog</h1>
    <ul>
      <li>
        Phone Number: <Link href="tel: +380636031826">+380636031826</Link>
      </li>
      <li>
        Email:
        <Link href="mailto: romanovkirill@ukr.net">romanovkirill@ukr.net</Link>
      </li>
      <li>
        Git:
        <Link href="https://github.com/OniksOd">
          https://github.com/OniksOd
        </Link>
      </li>
    </ul>
  </Box>
);
