import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

export const theme = createTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: purple,
      },
    },
    light: {
      palette: {
        primary: green,
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: "data",
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.vars.palette.common.black,
          ...theme.applyStyles("dark", {
            color: theme.vars.palette.common.white,
          }),
        }),
      },
    },
  },
});
