import Navigation from "../components/Navigation/Navigation";
import logo from "../assets/logo.png";
import Main from "../components/Main/Main";
import BtnWhatsApp from "../components/BtnWhatsApp/BtnWhatsApp";
import Footer from "../components/Footer/Footer";
import email from "../assets/email.png";
import location from "../assets/location.png";
import phone from "../assets/phone.png";
import facebook from "../assets/facebook.png";

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
    label: "Servicios",
    active: false,
  },
  {
    path: "/",
    label: "Productos",
    active: false,
  },
  {
    path: "/",
    label: "Contactanos",
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
function Home() {
  return (
    <>
      <Navigation items={ITEMS} logo={logo} info={INFO} />
      <Main />
      <Footer footer={FOOTER} />
      <BtnWhatsApp
        text="Chatea con nosotros en WhatsApp"
        logo="WhatsApp"
        textTwo="¡Hola! Haga clic en uno de nuestros miembros a continuación para chatear en "
        title="Abrir Charla"
      />
    </>
  );
}

export default Home;
