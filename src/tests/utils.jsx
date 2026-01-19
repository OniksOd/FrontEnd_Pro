import { render } from "@testing-library/react";
import { ThemeProvider } from "@mui/material";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { theme } from "../theme/theme";

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme} defaultMode="system">
      <Provider store={store}>
        <MemoryRouter>{children}</MemoryRouter>
      </Provider>
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
