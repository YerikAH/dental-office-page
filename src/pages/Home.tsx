import { useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import Main from "../components/Main/Main";
import BtnWhatsApp from "../components/BtnWhatsApp/BtnWhatsApp";
import Footer from "../components/Footer/Footer";
import Login from "../components/Login/Login";

import { NAVIGATION } from "../db/Navigation";
import { FOOTER } from "../db/Footer";

function Home() {
  const [modal, setModal] = useState(true);
  return (
    <>
      <ScrollRestoration />
      <Navigation
        items={NAVIGATION.items}
        logo={NAVIGATION.logo}
        info={NAVIGATION.info}
      />
      <Main />
      <Footer footer={FOOTER} />

      <BtnWhatsApp
        text="Chatea con nosotros en WhatsApp"
        logo="WhatsApp"
        textTwo="¡Hola! Haga clic en uno de nuestros miembros a continuación para chatear en "
        title="Abrir Charla"
      />
      <Login setState={setModal} state={modal} />
    </>
  );
}

export default Home;
