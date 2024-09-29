"use client";
import s from "./index.module.css";
import { CardService } from "./card-service";
import { useState } from "react";

export interface Props {
  title: string;
  text: string;
  items: {
    title: string;
    icon: string;
    color: string;
    text: string;
  }[];
}
export const ServiceSection = ({ title, text, items }: Props) => {
  const [cards, setCards] = useState(4);
  const onLoadCard = () => {
    if (cards > 4) setCards(4);
    else setCards(items.length);
  };
  return (
    <section className={s.section} id="Servicios">
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
};
