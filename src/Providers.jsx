import { ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { theme } from "./theme";
import { router } from "./routes";
import { ErrorBoundary } from "./ErrorBoundary";

export const Providers = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme} defaultMode="system">
        <RouterProvider router={router} />
      </ThemeProvider>
    </ErrorBoundary>
  );
};
