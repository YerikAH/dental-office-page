import s from "./CardProduct.module.css";
import { CardProductProps } from "../../interface/props";
import {
  IconHeart,
  IconHeartFilled,
  IconShoppingBag,
} from "@tabler/icons-react";
import { descountPrice, numberToPrice } from "../../helpers/helpers";
import { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";

function CardProduct({
  name,
  description,
  price,
  image,
  descount,
  like,
  tag,
}: CardProductProps) {
  const [priceConvert, setPriceConvert] = useState("");
  const [priceDescount, setPriceDescount] = useState<string>("");
  const [tagInterface, setTagInterface] = useState<null | {
    color: string;
    bg: string;
    text: string;
  }>(null);

  function convertPrice(price: number) {
    const newPriceRound = Math.round(price);
    const priceToString = numberToPrice(newPriceRound);
    return `S/${priceToString}`;
  }

  useEffect(() => {
    const convertPriceVar = convertPrice(price);
    setPriceConvert(convertPriceVar);

    if (descount !== undefined) {
      const calcDescont = descountPrice(price, descount);
      const convertDescount = convertPrice(calcDescont);
      setPriceDescount(convertDescount);
    }

    if (tag !== undefined && descount === undefined) {
      setTagInterface(tag);
    } else if (descount !== undefined) {
      const newTag = {
        bg: "#FF104C",
        color: "white",
        text: `${descount}% Off`,
      };
      setTagInterface(newTag);
    }
  }, [descount, price, tag]);
  return (
    <button className={s.product}>
      <div className={s.product__image}>
        {tagInterface !== null && (
          <span
            className={s.product__tag}
            style={{
              backgroundColor: `${tagInterface.bg}`,
              color: `${tagInterface.color}`,
            }}
          >
            {tagInterface.text}
          </span>
        )}
        <button className={`${s.button} ${s["button--like"]}`}>
          {like ? <IconHeartFilled /> : <IconHeart />}
        </button>
        <Tooltip title="Add to Bag" placement="bottom" arrow>
          <button className={`${s.button} ${s["button--car"]}`}>
            <IconShoppingBag />
          </button>
        </Tooltip>
        <img src={image} alt="product" />
      </div>
      <div className={s.product__info}>
        <h2>{name}</h2>
        <p>{description}</p>
        <div className={`${descount !== undefined && `${s["--descount"]}`}`}>
          <span
            className={`${
              descount !== undefined && `${s["--descount__price"]}`
            }`}
          >
            {priceConvert}
          </span>
          {descount !== undefined && <span>{priceDescount}</span>}
        </div>
      </div>
    </button>
  );
}
export default CardProduct;
