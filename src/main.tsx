import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { StyledEngineProvider } from "@mui/material/styles";

import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router} />
    </StyledEngineProvider>
  </React.StrictMode>,
);
