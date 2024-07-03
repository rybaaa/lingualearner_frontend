import React from "react";
import { PATH } from "./routes";
import { ErrorPage } from "../pages/ErrorPage";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/MainPage";

export const router = createBrowserRouter([
  {
    path: PATH.MAIN,
    element: <App />,
  },
  {
    path: PATH.APP,
    element: <MainPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
