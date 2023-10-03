import { useState } from "react";
import s from "./InfoProduct.module.css";
import { InfoProductProps } from "../../interface/props";
import { IconHeart } from "@tabler/icons-react";

function InfoProduct({ product }: InfoProductProps) {
  const [count, setCount] = useState(0);
  const onIncrement = () => {
    setCount(count + 1);
  };
  const onDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div className={s.product__info}>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <div className={s.buy}>
        <div className={s.buy__count}>
          <button onClick={onIncrement}>+</button>
          <p>{count}</p>
          <button onClick={onDecrement}>-</button>
        </div>
        <button className={s.buy__bag}>Añadir a la bolsa</button>
      </div>

      <button>
        <IconHeart />
        Añadir a deseos
      </button>
    </div>
  );
}
export default InfoProduct;
