import { ScrollRestoration } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import NotFound from "../components/NotFound/NotFound";
import Footer from "../components/Footer/Footer";
import { FOOTER } from "../db/Footer";
import { NAVIGATION } from "../db/Navigation";

function Error() {
  return (
    <>
      <ScrollRestoration />
      <Navigation
        items={NAVIGATION.items}
        logo={NAVIGATION.logo}
        info={NAVIGATION.info}
      />
      <NotFound />
      <Footer footer={FOOTER} />
    </>
  );
}
export default Error;
