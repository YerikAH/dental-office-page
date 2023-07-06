import s from "./CardIntro.module.css";
import { CardIntroProps } from '../../interface/props'

function CardIntro({ image, text, title, button }: CardIntroProps) {
  return (
    <div className={s.card}>
      <div className={s.image}>
        <img src={image} alt={title} />
      </div>
      <hr className={s.separate} />
      <h3 className={`${s['text-bold']}`}>{title}</h3>
      <p className={s.text}>{text}</p>
      <button className={`${s['text-bold']} ${s.button}`}>{button}</button>
    </div>
  );
}
export default CardIntro;
