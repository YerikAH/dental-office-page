import { NAVIGATION } from "../db/Navigation";
import { FOOTER } from "../db/Footer";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import { ScrollRestoration } from "react-router-dom";
import MainServices from "../components/MainServices/MainServices";

function Services() {
  return (
    <>
      <ScrollRestoration />
      <Navigation
        items={NAVIGATION.items}
        logo={NAVIGATION.logo}
        info={NAVIGATION.info}
      />
      <MainServices />
      <Footer footer={FOOTER} />
    </>
  );
}
export default Services;
