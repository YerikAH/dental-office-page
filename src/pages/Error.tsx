import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import NotFound from "../components/NotFound/NotFound";
import { ScrollRestoration } from "react-router-dom";
import {NAV, FOOTER} from '../db/db' 

function Error() {
  return (
    <>
      <ScrollRestoration />
      <Navigation items={NAV.items} logo={NAV.logo} info={NAV.info} /> 
      <NotFound />
      <Footer footer={FOOTER} />
    </>
  );
}
export default Error;
