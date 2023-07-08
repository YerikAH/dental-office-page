import Navigation from "../components/Navigation/Navigation";
import logo from "../assets/logo.png";
import Main from "../components/Main/Main";
import BtnWhatsApp from "../components/BtnWhatsApp/BtnWhatsApp";
import CardService from "../components/CardService/CardService";
import iconNormal from '../assets/IconTestII.svg'

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
      <CardService title="tratamiento medico" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus ipsum, pellentesque quis dapibus et, faucibus a nibh. " icon={iconNormal} color="#3498E1" />
      <BtnWhatsApp text="Chatea con nosotros en WhatsApp" logo="WhatsApp" textTwo="¡Hola! Haga clic en uno de nuestros miembros a continuación para chatear en " title="Abrir Charla"/>  
    </>
  );
}

export default Home;
