import Navigation from "../components/Navigation/Navigation";
import NavigationProducts from "../components/NavigationProducts/NavigationProducts";
import MainProducts from "../components/MainProducts/MainProducts";
import { ScrollRestoration } from "react-router-dom";
import {NAV, FOOTER} from '../db/db' 
import Footer from "../components/Footer/Footer";

function Products() {
  return (
    <>
      <ScrollRestoration />
      <Navigation
        items={NAV.items}
        logo={NAV.logo}
        info={NAV.info}
        Component={<NavigationProducts />}
      />
      <MainProducts />
      <Footer footer={FOOTER} />
    </>
  );
}
export default Products;
