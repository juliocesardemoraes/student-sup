import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.scss";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//aqui definimos as rotas
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
