import { IconX } from "@tabler/icons-react";
import s from "./ProductBag.module.css";
import { ProductBagProps } from "../../interface/props";
import { numberToPrice } from "../../helpers/helpers";

function ProductBag({ products }: ProductBagProps) {

  function convertPrice(price: number) {
    const newPriceRound = Math.round(price);
    const priceToString = numberToPrice(newPriceRound);
    return `S/${priceToString}`
  }
  return (
    <>
      {products.map((item, idx) => (
        <div className={s.product} key={idx}>
          <img src={item.image} alt={item.name} />
          <div className={s.product__info}>
            <h3>{item.name}</h3>
            <p>{convertPrice(item.price)}</p>
          </div>
          <button className={s.product__remove}>
            <IconX />
          </button>
        </div>
      ))}
    </>
  );
}
export default ProductBag;
