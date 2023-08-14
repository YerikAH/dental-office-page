
import logo from "../assets/logo.png";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import email from "../assets/email.png";
import location from "../assets/location.png";
import phone from "../assets/phone.png";
import facebook from "../assets/facebook.png";
import { Routes } from "../interface/enum";
import NotFound from "../components/NotFound/NotFound";

const ITEMS = [
  {
    path: "/",
    label: "Inicio",
    active: false,
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

const ITEMS_FOOTER = [
  {
    path: "/",
    label: "Productos",
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
    label: "Porque elegirnos",
    active: false,
  },
  {
    path: "/",
    label: "Agendar cita",
    active: true,
  },
  {
    path: "/",
    label: "Preguntas frecuentes",
    active: false,
  },
  {
    path: "/",
    label: "Opiniones",
    active: false,
  },
  {
    path: "/",
    label: "Los mejores resultados",
    active: false,
  },
  {
    path: "/",
    label: "Productos",
    active: false,
  },
  {
    path: "/",
    label: "Politicas de privacidad",
    active: false,
  },
];
const MEDIA = [
  {
    media: facebook,
    url: "",
  },
  {
    media: facebook,
    url: "",
  },
];
const CONTACTS = [
  {
    icon: phone,
    label: "(+51) 967 523 180",
  },
  {
    icon: email,
    label: "lapreventiva@gmail.com",
  },
  {
    icon: location,
    label: "Jr. Ica 113 2 Do Piso Of. 09",
  },
];
const FOOTER = {
  logo: logo,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus ipsum, pellentesque quis dapibus etLorem ipsum dolor sit amet, consectetur adipiscing elit etiam tellus ipsum, pellentesque quis dapibus et.",
  media: MEDIA,
  contacts: CONTACTS,
  labelContact: "Nuestros Contactos",
  labelNavigation: "Sitio de Navegación",
  navigation: ITEMS_FOOTER,
  copyright: 'Copyright © 2023 Consultorio odontológico "La Preventiva"',
  question: "¿Quieres agendar una cita facilmente?",
  button: "Agenda aquí",
};

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

function Error() {
  return (
    <>
      <Navigation
        items={ITEMS}
        logo={logo}
        info={INFO}
      />
      <NotFound />
      <Footer footer={FOOTER} />
    </>
  );
}
export default Error;
