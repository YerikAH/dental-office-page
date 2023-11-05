import { useState } from "react";
import s from "./InfoProduct.module.css";
import { InfoProductProps } from "../../interface/props";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandPinterest,
  IconBrandTwitter,
  IconBrandWhatsapp,
  IconChevronLeft,
  IconChevronRight,
  IconColorPicker,
  IconGridDots,
  IconHeart,
  IconMinus,
  IconPlus,
  IconShare,
} from "@tabler/icons-react";
import { numberToPrice } from "../../helpers/helpers";

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
      <div className={s.product__info__actions}>
        <div className={s.actions__next}>
          <button>
            <IconChevronLeft />
          </button>
          <span>
            <IconGridDots />
          </span>
          <button>
            <IconChevronRight />
          </button>
        </div>
      </div>

      <h1>{product.name}</h1>
      <div className={s.product__info__price}>
        <span>S/ {numberToPrice(product.price)}</span>
      </div>
      <p className={s.product__info__description}>{product.description}</p>
      <div className={s.product__info__specific}>
        <div className={s.specific}>
          <div>
            <IconColorPicker />
            <b>Color</b>
          </div>
          <p>Azul</p>
        </div>
        <div className={s.specific}>
          <div>
            <IconColorPicker />
            <b>Color</b>
          </div>
          <p>Azul</p>
        </div>
        <div className={s.specific}>
          <div>
            <IconColorPicker />
            <b>Color</b>
          </div>
          <p>Azul</p>
        </div>
        <div className={s.specific}>
          <div>
            <IconColorPicker />
            <b>Color</b>
          </div>
          <p>Azul</p>
        </div>
      </div>

      <div className={s.buy}>
        <div className={s.buy__count}>
          <button tabIndex={1} onClick={onIncrement}>
            <IconPlus />
          </button>
          <p>{count}</p>
          <button tabIndex={1} onClick={onDecrement}>
            <IconMinus />
          </button>
        </div>
        <button tabIndex={1} className={s.buy__bag}>
          Añadir a la bolsa
        </button>
      </div>
      <button className={s.wish} tabIndex={1}>
        <IconHeart size={18} />
        Añadir a deseos
      </button>
      <div className={s.extra}>
        <b>Compartir:</b>
        <div className={s.extra__details}>
          <IconBrandFacebook />
          <IconBrandInstagram />
          <IconBrandTwitter />
          <IconBrandPinterest />
        </div>
      </div>

      <div className={s.extra}>
        <b>Categorias:</b>
        <div className={s.extra__details}>
          Dental, Menta, Sabores
        </div>
      </div>

      
    </div>
  );
}
export default InfoProduct;
