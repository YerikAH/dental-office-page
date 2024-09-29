import { StaticImageData } from "next/image";
import { SimpleCard } from "./card-principal-service";
import s from "./index.module.css";

export interface Props {
  title: string;
  text: string;
  cards: {
    image: StaticImageData;
    text: string;
    button: string;
    title: string;
  }[];
}
export const PrincipalServicesSection = ({ title, text, cards }: Props) => {
  return (
    <section className={s.section}>
      <div className={s.info}>
        <h2>{title}</h2>
        <p>{text}</p>
        <button className={s.section__button}>Contact us</button>
      </div>
      <div className={s.cards}>
        {cards.map((item, idx) => (
          <SimpleCard
            title={item.title}
            text={item.text}
            image={item.image}
            button={item.button}
            key={idx}
          />
        ))}
      </div>
    </section>
  );
};
