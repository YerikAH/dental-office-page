import Navigation from "../components/Navigation/Navigation";
import logo from "../assets/logo.png";
import Main from "../components/Main/Main";

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

{/* 
      <BtnWhatsApp />  */}
    </>
  );
}

export default Home;
