import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { StyledEngineProvider } from "@mui/material/styles";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Appointment from "./pages/Appointment.tsx";
import Error from "./pages/Error.tsx";
import Products from "./pages/Products.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/appointment",
    element: <Appointment />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/products",
    element: <Products />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router} />
    </StyledEngineProvider>
  </React.StrictMode>,
);
