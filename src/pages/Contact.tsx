import { ScrollRestoration } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import { FOOTER, NAV } from "../db/db";
import MainContact from "../components/MainContact/MainContact";
function Contact() {
  return (
    <>
      <ScrollRestoration />
      <Navigation items={NAV.items} logo={NAV.logo} info={NAV.info} />
      <MainContact/>
      <Footer footer={FOOTER} />
    </>
  );
}
export default Contact;
