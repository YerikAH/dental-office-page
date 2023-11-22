import Navigation from "../components/Navigation/Navigation";
import NavigationProducts from "../components/NavigationProducts/NavigationProducts";
import MainProducts from "../components/MainProducts/MainProducts";
import { ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { NAVIGATION } from "../db/Navigation";
import { FOOTER } from "../db/Footer";

function Products() {
  return (
    <>
      <ScrollRestoration />
      <Navigation
        items={NAVIGATION.items}
        logo={NAVIGATION.logo}
        info={NAVIGATION.info}
        Component={<NavigationProducts />}
      />
      <MainProducts />
      <Footer footer={FOOTER} />
    </>
  );
}
export default Products;
