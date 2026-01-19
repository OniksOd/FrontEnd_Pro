import { ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { theme } from "../theme/theme";
import { router } from "../routes/routes";
import { ErrorBoundary } from "./ErrorBoundary";
import { store } from "../redux/store";

export const Providers = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme} defaultMode="system">
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};
