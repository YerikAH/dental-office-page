import s from './CardFindUs.module.css'
import {CardFindUsProps} from '../../interface/props'

function CardFindUs({image,title, description, contact}: CardFindUsProps){
  return (
    <div className={s.card}>
      <div className={s.card__icon}>
        <img src={image} alt='icon'/>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <span>{contact}</span>
    </div>
  )
}
export default CardFindUs
