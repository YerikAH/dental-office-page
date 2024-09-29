import { IconCheck } from "@tabler/icons-react";
import s from "./index.module.css";

interface Props {
  label: string;
  title: string;
  slogan: string;
  text: string;
  items: string[];
  button: string;
}
export const CardInfo = ({
  label,
  title,
  slogan,
  text,
  items,
  button,
}: Props) => {
  return (
    <>
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
    </>
  );
};
