import Footer from "../components/Footer/Footer";
import MainProduct from "../components/MainProduct/MainProduct";
import Navigation from "../components/Navigation/Navigation";
import NavigationProducts from "../components/NavigationProducts/NavigationProducts";
import { FOOTER, NAV } from "../db/db";

function Product() {
  return (
    <>
      <Navigation
        items={NAV.items}
        logo={NAV.logo}
        info={NAV.info}
        Component={<NavigationProducts />}
      />
      <MainProduct/>
      <Footer footer={FOOTER} />
    </>
  );
}
export default Product;
