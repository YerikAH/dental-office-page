import s from "./SimpleCard.module.css";
import { SimpleCardProps } from "../../interface/props.ts";
import { IconArrowNarrowRight } from "@tabler/icons-react";

function SimpleCard({ image, text, button, title }: SimpleCardProps) {
  return (
    <div className={s.card}>
      <img src={image} alt="image" />
      <h2>{title}</h2>
      <p>{text}</p>

      <button>
        <IconArrowNarrowRight />
        {button}
      </button>
    </div>
  );
}
export default SimpleCard;
