import s from './CardVision.module.css'
import {CardMisionProps} from "../../interface/props";


function CardMision({title, text}: CardMisionProps) {
  return (
    <div className={s.box}>
      <h3>{title}</h3>
      <p>
        {text}
      </p>
    </div>
  );
}
export default CardMision;
