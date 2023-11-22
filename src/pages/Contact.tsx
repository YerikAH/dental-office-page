import { ScrollRestoration } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import MainContact from "../components/MainContact/MainContact";
import Footer from "../components/Footer/Footer";
import { NAVIGATION } from "../db/Navigation";
import { FOOTER } from "../db/Footer";

function Contact() {
  return (
    <>
      <ScrollRestoration />
      <Navigation
        items={NAVIGATION.items}
        logo={NAVIGATION.logo}
        info={NAVIGATION.info}
      />
      <MainContact />
      <Footer footer={FOOTER} />
    </>
  );
}
export default Contact;
