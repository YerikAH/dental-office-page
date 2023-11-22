import { ScrollRestoration } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import MainAppointment from "../components/MainAppointment/MainAppointment";
import Footer from "../components/Footer/Footer";
import { NAVIGATION } from "../db/Navigation";
import { FOOTER } from "../db/Footer";

function Appointment() {
  return (
    <>
      <ScrollRestoration />
      <Navigation
        items={NAVIGATION.items}
        logo={NAVIGATION.logo}
        info={NAVIGATION.info}
      />
      <MainAppointment />
      <Footer footer={FOOTER} />
    </>
  );
}
export default Appointment;
