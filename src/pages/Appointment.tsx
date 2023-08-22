import Footer from "../components/Footer/Footer";
import MainAppointment from "../components/MainAppointment/MainAppointment";
import Navigation from "../components/Navigation/Navigation";
import { ScrollRestoration } from "react-router-dom";
import {NAV, FOOTER} from '../db/db' 


function Appointment() {
  return (
    <>
      <ScrollRestoration />
      <Navigation items={NAV.items} logo={NAV.logo} info={NAV.info} />
      <MainAppointment />
      <Footer footer={FOOTER} />
    </>
  );
}
export default Appointment;
