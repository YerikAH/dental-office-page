import Navigation from "../components/Navigation/Navigation";
import logo from "../assets/logo.png";
import NavigationProducts from "../components/NavigationProducts/NavigationProducts";
import MainProducts from "../components/MainProducts/MainProducts";
import { ScrollRestoration } from "react-router-dom";

const INFO = [
  {
    title: "Encuentranos en: ",
    text: "Jr. Ica N° 113 - 2do Piso - Of. 09",
  },
  {
    title: "Horario: ",
    text: "Lunes a Sabados - 8:00am a 8:00pm",
  },
];

const ITEMS = [
  {
    path: "/",
    label: "Inicio",
    active: true,
  },
  {
    path: "/",
    label: "Nosotros",
    active: false,
  },
  {
    path: "/",
    label: "Servicios",
    active: false,
  },
  {
    path: "/",
    label: "Contactanos",
    active: false,
  },
  {
    path: "/",
    label: "Productos",
    active: false,
  },
];

function Products() {
  return (
    <>
      <ScrollRestoration />
      <Navigation
        items={ITEMS}
        logo={logo}
        info={INFO}
        Component={<NavigationProducts />}
      />
      <MainProducts />
    </>
  );
}
export default Products;
