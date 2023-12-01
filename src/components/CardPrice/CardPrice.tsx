import s from "./cardPrice.module.css";
import { CardPriceProps } from "../../interface/props.ts";

function CardPrice({ price, descount, title }: CardPriceProps) {
  return (
    <button className={s.price}>
      <div className={s.price__content}>
        <div className={s.price__select}></div>
        <div className={s.price__info}>
          <p>{title}</p>
          <span>{descount}</span>
        </div>
      </div>
      <div className={s.price__price}>
        <h5>{price}</h5>
        <span>/Month</span>
      </div>
    </button>
  );
}
export default CardPrice;
