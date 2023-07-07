import Navigation from "../components/Navigation/Navigation";
import logo from "../assets/logo.png";
import Main from "../components/Main/Main";
import BtnWhatsApp from "../components/BtnWhatsApp/BtnWhatsApp";
import CardInfo from "../components/CardInfo/CardInfo";

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
const TEST = {
  label: "_SALUD DENTAL_",
  title: "¿Porque elegirnos?",
  slogan: "La preventiva, donde preveemos tus dientes",
  text: "Somos líderes en tratamientos estéticos láser, sin importar tu objetivo de belleza. Nuestros profesionales experimentados, te ayudarán a lograr los resultados que esperas, ofreciéndote tratamientos estéticos accesibles y personalizados.",
  items: [
    "Contamos con masde 10 años de experiencia.",
    "Garantiade 20 días con muchas ofertas",
    "Contamos lo ultimo en teconologia",
  ],
  button: "reserva tu cita",
};

function Home() {
  return (
    <>
      <Navigation items={ITEMS} logo={logo} />
      <Main />
      <CardInfo
        label={TEST.label}
        title={TEST.title}
        slogan={TEST.slogan}
        text={TEST.text}
        button={TEST.button}
        items={TEST.items}
      />
      <BtnWhatsApp />
    </>
  );
}

export default Home;
