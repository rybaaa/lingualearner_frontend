import React from "react";
import { PATH } from "./routes";
import { ErrorPage } from "../pages/ErrorPage";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: PATH.MAIN,
    element: <App />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
