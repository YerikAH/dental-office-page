import Navigation from "../components/Navigation/Navigation";
import logo from "../assets/logo.png";
import Main from "../components/Main/Main";
import BtnWhatsApp from "../components/BtnWhatsApp/BtnWhatsApp";

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

function Home() {
  return (
    <>
      <Navigation items={ITEMS} logo={logo} />
      <Main />
      <BtnWhatsApp text="Chatea con nosotros en WhatsApp" logo="WhatsApp" textTwo="¡Hola! Haga clic en uno de nuestros miembros a continuación para chatear en " title="Abrir Charla"/>  
    </>
  );
}

export default Home;
