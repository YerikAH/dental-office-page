import s from "./CardOpinion.module.css";
import { CardOpinionProps } from "../../interface/props";

function CardOpinion({ avatar, opinion, name, tag }: CardOpinionProps) {
  return (
    <div className={s.card}>
      <img src={avatar} alt="avatar" className={s.card__avatar} />
      <div className={s.card__container}>
        <p>{opinion}</p>
        <h4>{name}</h4>
        <span>{tag}</span>
      </div>
    </div>
  );
}
export default CardOpinion;
