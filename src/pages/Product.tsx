import Footer from "../components/Footer/Footer";
import MainProduct from "../components/MainProduct/MainProduct";
import Navigation from "../components/Navigation/Navigation";
import NavigationProducts from "../components/NavigationProducts/NavigationProducts";
import { FOOTER } from "../db/Footer";
import { NAVIGATION } from "../db/Navigation";

function Product() {
  return (
    <>
      <Navigation
        items={NAVIGATION.items}
        logo={NAVIGATION.logo}
        info={NAVIGATION.info}
        Component={<NavigationProducts />}
      />
      <MainProduct />
      <Footer footer={FOOTER} />
    </>
  );
}
export default Product;
