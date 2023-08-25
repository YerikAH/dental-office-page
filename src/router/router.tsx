import Home from "../pages/Home.tsx";
import Appointment from "../pages/Appointment.tsx";
import Error from "../pages/Error.tsx";
import Products from "../pages/Products.tsx";
import { createBrowserRouter } from "react-router-dom";
import Our from "../pages/Our.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/our",
    element: <Our />,
  },
  {
    path: "/appointment",
    element: <Appointment />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);