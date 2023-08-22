import Navigation from "../components/Navigation/Navigation";
import Main from "../components/Main/Main";
import BtnWhatsApp from "../components/BtnWhatsApp/BtnWhatsApp";
import Footer from "../components/Footer/Footer";
import { ScrollRestoration } from "react-router-dom";
import {NAV, FOOTER} from '../db/db' 



function Home() {
  return (
    <>
      <ScrollRestoration />
      <Navigation items={NAV.items} logo={NAV.logo} info={NAV.info} />
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
