import { ScrollRestoration } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import NotFound from "../components/NotFound/NotFound";
import Footer from "../components/Footer/Footer";
import { FOOTER } from "../db/Footer";
import { NAVIGATION } from "../db/Navigation";
import { NOT_FOUND } from "../db/NotFound";

function Error() {
  return (
    <>
      <ScrollRestoration />
      <Navigation
        items={NAVIGATION.items}
        logo={NAVIGATION.logo}
        info={NAVIGATION.info}
      />
      <NotFound
        button={NOT_FOUND.button}
        input={NOT_FOUND.input}
        text={NOT_FOUND.text}
        title={NOT_FOUND.title}
      />
      <Footer footer={FOOTER} />
    </>
  );
}
export default Error;
