import s from "./SimpleCard.module.css";
import { SimpleCardProps } from "../../interface/props.ts";

function SimpleCard({ image, text, button, title }: SimpleCardProps) {
  return (
    <div className={s.card}>
      <img src={image} alt="image" />
      <h2>{title}</h2>
      <p>{text}</p>
      <button>{button}</button>
    </div>
  );
}
export default SimpleCard;
