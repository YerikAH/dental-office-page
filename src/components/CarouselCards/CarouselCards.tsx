import s from "./CarouselCards.module.css";
import { CarouselCardsProps } from "../../interface/props";
import CardDentist from "../CardDentist/CardDentist";

function CarouselCards({ cards }: CarouselCardsProps) {
  return (
    <div className={s.cards}>
      {cards.map((item, idx) => (
        <CardDentist
          key={idx}
          email={item.email}
          name={item.name}
          special={item.special}
          fb={item.fb}
          text={item.text}
          image={item.image}
          url={item.url}
          phone={item.phone}
        />
      ))}
    </div>
  );
}
export default CarouselCards;
