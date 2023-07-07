import { IconCheck } from "@tabler/icons-react";
import { CardInfoProps } from "../../interface/props";
import s from "./CardInfo.module.css";

function CardInfo({
  label,
  title,
  slogan,
  text,
  items,
  button,
}: CardInfoProps) {
  return (
    <div className={s.card}>
      <div className={s.card__title}>
        <span>{label}</span>
        <h2>{title}</h2>
      </div>
      <div className={s.card__contain}>
        <div>
          <b className={s.card__text}>{slogan}</b>
          <p className={`${s.card__text} ${s["card__text--light"]}`}>{text}</p>
        </div>
        <div>
          {items.map((item, idx) => (
            <div key={idx} className={s.card__contain__item}>
              <span>
                <IconCheck color="white" size={12} strokeWidth={3} />
              </span>
              <p className={`${s.card__text} ${s["card__text--light"]}`}>
                {item}
              </p>
            </div>
          ))}
        </div>
        <button className={s.card__button}>{button}</button>
      </div>
    </div>
  );
}
export default CardInfo;
