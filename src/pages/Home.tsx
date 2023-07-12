import Navigation from "../components/Navigation/Navigation";
import logo from "../assets/logo.png";
import logoWhite from "../assets/logo_white.png";
import Main from "../components/Main/Main";
import BtnWhatsApp from "../components/BtnWhatsApp/BtnWhatsApp";
import Footer from "../components/Footer/Footer";


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
  },  {
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
const MEDIA = [
 {
  media: '',
  url: ''
 }
]
const CONTACTS = [
  'Jr. Ica a lado de dodne',
  'Un lugar muy conocido',
  '967523180'
]

function Home() {
  return (
    <>
      <Navigation items={ITEMS} logo={logo} />
      <Main />
      <Footer logo={logo} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus ipsum, pellentesque quis dapibus etLorem ipsum dolor sit amet, consectetur adipiscing elit etiam tellus ipsum, pellentesque quis dapibus et." media={MEDIA} contacts={CONTACTS} labelContact="Nuestros Contactos" labelNavigation="Sitio de Navegación" navigation={ITEMS_FOOTER}/>
      <BtnWhatsApp text="Chatea con nosotros en WhatsApp" logo="WhatsApp" textTwo="¡Hola! Haga clic en uno de nuestros miembros a continuación para chatear en " title="Abrir Charla"/>  
    </>
  );
}

export default Home;
