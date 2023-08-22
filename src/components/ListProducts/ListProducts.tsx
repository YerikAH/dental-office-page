import CardProduct from "../CardProduct/CardProduct";
import s from "./ListProducts.module.css";
const PRODUCTS = [
  {
    name: "Prada",
    price: 2000,
    description: "Prada re edition 2005 saffiano Bar jacket With Stripes",
    image:
      "https://www.printhuellas.com/tshirtecommerce//uploaded/Prendas%20PrintHuellas/larga-hombre/A/dg-designer-34766559155741780534723175610763732.png",
    descount: 50,
    like: false,
  },
  {
    name: "Prada",
    price: 2000,
    description: "Prada re edition 2005 saffiano Bar jacket With Stripes",
    image:
      "https://www.printhuellas.com/tshirtecommerce//uploaded/Prendas%20PrintHuellas/larga-hombre/A/dg-designer-34766559155741780534723175610763732.png",
    descount: 50,
    like: false,
  },
  {
    name: "Prada",
    price: 2000,
    description: "Prada re edition 2005 saffiano Bar jacket With Stripes",
    image:
      "https://www.printhuellas.com/tshirtecommerce//uploaded/Prendas%20PrintHuellas/larga-hombre/A/dg-designer-34766559155741780534723175610763732.png",
    descount: 50,
    like: false,
  },
  {
    name: "Prada",
    price: 2000,
    description: "Prada re edition 2005 saffiano Bar jacket With Stripes",
    image:
      "https://www.printhuellas.com/tshirtecommerce//uploaded/Prendas%20PrintHuellas/larga-hombre/A/dg-designer-34766559155741780534723175610763732.png",
    descount: 50,
    like: false,
  },
  {
    name: "Prada",
    price: 2000,
    description: "Prada re edition 2005 saffiano Bar jacket With Stripes",
    image:
      "https://www.printhuellas.com/tshirtecommerce//uploaded/Prendas%20PrintHuellas/larga-hombre/A/dg-designer-34766559155741780534723175610763732.png",
    descount: 50,
    like: false,
  },
  {
    name: "Prada",
    price: 2000,
    description: "Prada re edition 2005 saffiano Bar jacket With Stripes",
    image:
      "https://www.printhuellas.com/tshirtecommerce//uploaded/Prendas%20PrintHuellas/larga-hombre/A/dg-designer-34766559155741780534723175610763732.png",
    descount: 50,
    like: false,
  },
  {
    name: "Prada",
    price: 2000,
    description: "Prada re edition 2005 saffiano Bar jacket With Stripes",
    image:
      "https://www.printhuellas.com/tshirtecommerce//uploaded/Prendas%20PrintHuellas/larga-hombre/A/dg-designer-34766559155741780534723175610763732.png",
    descount: 50,
    like: false,
  },
  {
    name: "Prada",
    price: 2000,
    description: "Prada re edition 2005 saffiano Bar jacket With Stripes",
    image:
      "https://www.printhuellas.com/tshirtecommerce//uploaded/Prendas%20PrintHuellas/larga-hombre/A/dg-designer-34766559155741780534723175610763732.png",
    descount: 50,
    like: false,
  },
  {
    name: "Prada",
    price: 2000,
    description: "Prada re edition 2005 saffiano Bar jacket With Stripes",
    image:
      "https://www.printhuellas.com/tshirtecommerce//uploaded/Prendas%20PrintHuellas/larga-hombre/A/dg-designer-34766559155741780534723175610763732.png",
    descount: 50,
    like: false,
  },
  {
    name: "Prada",
    price: 2000,
    description: "Prada re edition 2005 saffiano Bar jacket With Stripes",
    image:
      "https://www.printhuellas.com/tshirtecommerce//uploaded/Prendas%20PrintHuellas/larga-hombre/A/dg-designer-34766559155741780534723175610763732.png",
    descount: 50,
    like: false,
  },
  {
    name: "Prada",
    price: 2000,
    description: "Prada re edition 2005 saffiano Bar jacket With Stripes",
    image:
      "https://www.printhuellas.com/tshirtecommerce//uploaded/Prendas%20PrintHuellas/larga-hombre/A/dg-designer-34766559155741780534723175610763732.png",
    descount: 50,
    like: false,
  },
  {
    name: "Prada",
    price: 2000,
    description: "Prada re edition 2005 saffiano Bar jacket With Stripes",
    image:
      "https://www.printhuellas.com/tshirtecommerce//uploaded/Prendas%20PrintHuellas/larga-hombre/A/dg-designer-34766559155741780534723175610763732.png",
    descount: 50,
    like: false,
  },
  {
    name: "Prada",
    price: 2000,
    description: "Prada re edition 2005 saffiano Bar jacket With Stripes",
    image:
      "https://www.printhuellas.com/tshirtecommerce//uploaded/Prendas%20PrintHuellas/larga-hombre/A/dg-designer-34766559155741780534723175610763732.png",
    descount: 50,
    like: false,
  },
  {
    name: "Prada",
    price: 2000,
    description: "Prada re edition 2005 saffiano Bar jacket With Stripes",
    image:
      "https://www.printhuellas.com/tshirtecommerce//uploaded/Prendas%20PrintHuellas/larga-hombre/A/dg-designer-34766559155741780534723175610763732.png",
    descount: 50,
    like: false,
  },
  {
    name: "Prada",
    price: 2000,
    description: "Prada re edition 2005 saffiano Bar jacket With Stripes",
    image:
      "https://www.printhuellas.com/tshirtecommerce//uploaded/Prendas%20PrintHuellas/larga-hombre/A/dg-designer-34766559155741780534723175610763732.png",
    descount: 50,
    like: false,
  },
  {
    name: "Prada",
    price: 2000,
    description: "Prada re edition 2005 saffiano Bar jacket With Stripes",
    image:
      "https://www.printhuellas.com/tshirtecommerce//uploaded/Prendas%20PrintHuellas/larga-hombre/A/dg-designer-34766559155741780534723175610763732.png",
    descount: 50,
    like: false,
  },
];
function ListProducts() {
  return (
    <article className={s.products}>
      {PRODUCTS.map((item, idx) => (
        <CardProduct
          key={idx}
          name={item.name}
          price={item.price}
          description={item.description}
          image={item.image}
          descount={item.descount}
          like={item.like}
          tag={{ color: "#FFF", bg: "#FF5151", text: "Nuevo" }}
        />
      ))}
    </article>
  );
}
export default ListProducts;
