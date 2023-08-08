import CardService from "../CardService/CardService";
import s from "./SectionService.module.css";
import { SectionServiceProps } from "../../interface/props";
import { useState } from "react";

function SectionService({ title, text, items }: SectionServiceProps) {
  const [cards, setCards] = useState(4);
  const onLoadCard = () => {
    if (cards > 4) setCards(4);
    else setCards(items.length);
  };
  return (
    <section className={s.section}>
      <div className={s.section__intro}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={s.section__cards}>
        {items.slice(0, cards).map((items, idx) => (
          <CardService
            key={idx}
            title={items.title}
            text={items.text}
            icon={items.icon}
            color={items.color}
          />
        ))}
      </div>
      <button tabIndex={1} className={s.button} onClick={onLoadCard}>
        {cards > 4 ? "ocultar" : "ver mas"}
      </button>
    </section>
  );
}
export default SectionService;
