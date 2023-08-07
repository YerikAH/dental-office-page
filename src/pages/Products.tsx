import CardProduct from "../components/CardProduct/CardProduct";
import Navigation from "../components/Navigation/Navigation";
import logo from "../assets/logo.png";
import NavigationGuide from "../components/NavigationGuide/NavigationGuide";
import NavigationProducts from "../components/NavigationProducts/NavigationProducts";

const INFO = [
  {
    title: "Encuentranos en: ",
    text: "Jr. Ica N° 113 - 2do Piso - Of. 09",
  },
  {
    title: "Horario: ",
    text: "Lunes a Sabados - 8:00am a 8:00pm",
  },
];

const ITEMS = [
  {
    path: "/",
    label: "Inicio",
    active: true,
  },
  {
    path: "/",
    label: "Servicios",
    active: false,
  },
  {
    path: "/",
    label: "Productos",
    active: false,
  },
  {
    path: "/",
    label: "Contactanos",
    active: false,
  },
];
function Products() {
  return (
    <>
      <Navigation items={ITEMS} logo={logo} info={INFO} Component={<NavigationProducts />}/>
      {/*<CardProduct
        name="Prada"
        price={2000}
        description="Prada re edition 2005 saffiano Bar jacket With Stripes"
        image="https://www.printhuellas.com/tshirtecommerce//uploaded/Prendas%20PrintHuellas/larga-hombre/A/dg-designer-34766559155741780534723175610763732.png"
        descount={10}
        like={false}
        tag={{ color: "#FFF", bg: "#FF5151", text: "Nuevo" }}
      />*/}
    </>
  );
}
export default Products;
