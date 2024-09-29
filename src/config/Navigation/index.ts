import { RoutesEnum } from "@/routes";
import logo from "@/assets/logo/logo.png";

export const NAVIGATION = {
  items: [
    {
      path: RoutesEnum.HOME,
      label: "Inicio",
      active: true,
    },
    {
      path: RoutesEnum.OUR,
      label: "Nosotros",
      active: false,
    },
    {
      path: RoutesEnum.SERVICES,
      label: "Servicios",
      active: false,
    },
    {
      path: RoutesEnum.CONTACT,
      label: "Contactanos",
      active: false,
    },
    {
      path: RoutesEnum.PRODUCTS,
      label: "Productos",
      active: false,
    },
  ],
  logo: logo,
  info: [
    {
      title: "Encuentranos en: ",
      text: "Jr. Ica N° 113 - 2do Piso - Of. 09",
    },
    {
      title: "Horario: ",
      text: "Lunes a Sabados - 8:00am a 8:00pm",
    },
  ],
};
