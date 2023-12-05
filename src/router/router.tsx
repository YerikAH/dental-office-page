import Home from "../pages/Home.tsx";
import Appointment from "../pages/Appointment.tsx";
import Error from "../pages/Error.tsx";
import Products from "../pages/Products.tsx";
import Contact from "../pages/Contact.tsx";
import Our from "../pages/Our.tsx";
import { createBrowserRouter } from "react-router-dom";
import { RoutesEnum } from "../interface/enum.ts";
import Product from "../pages/Product.tsx";
import Services from "../pages/Services.tsx";

export const router = createBrowserRouter([
  {
    path: RoutesEnum.HOME,
    element: <Home />,
  },
  {
    path: RoutesEnum.OUR,
    element: <Our />,
  },
  {
    path: RoutesEnum.CONTACT,
    element: <Contact />,
  },
  {
    path: RoutesEnum.SERVICES,
    element: <Services />,
  },
  {
    path: RoutesEnum.APPOINTMENT,
    element: <Appointment />,
  },
  {
    path: RoutesEnum.PRODUCTS,
    element: <Products />,
  },
  {
    path: RoutesEnum.PRODUCT,
    element: <Product />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);