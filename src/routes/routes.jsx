import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Main } from "../main";
import { NotFound } from "../components/NotFound";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { Swapi } from "../components/Swapi";
import { AboutMe } from "../components/AboutMe";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        Component: Main,
      },
      {
        path: "main",
        Component: Main,
      },
      {
        path: "swapi",
        Component: Swapi,
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
