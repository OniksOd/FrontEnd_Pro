import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Main } from "../Main";
import { NotFound } from "../components/NotFound";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { Contacts } from "../components/Contacts";
import { AboutMe } from "../components/AboutMe";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "main",
        Component: Main,
      },
      {
        path: "contacts",
        Component: Contacts,
      },
      {
        path: "about-me",
        Component: AboutMe,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
