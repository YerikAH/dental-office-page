import s from './CardService.module.css'
import {CardServiceProps} from '../../interface/props'

function CardService({title, text,icon, color}: CardServiceProps){
  return <div className={s.card} style={{backgroundColor: `${color}`}}>
    <div className={s.card__container}>
      <img src={icon} alt="icon" />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  </div>
}
export default CardService