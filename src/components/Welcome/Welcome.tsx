import s from './Welcome.module.css'
import { WelcomeProps } from '../../interface/props';

function Welcome({title, text, img, button}:WelcomeProps){
  return (
    <section className={s.section}>
      <div className={s.section__info}>
        <h1>{title}</h1>
        <p>{text}</p>
        <button>
          {button}
        </button>
      </div>
      <div className={s.section__img}>
        <img src={img} alt="img" />
      </div>
    </section>
  )
}
export default Welcome;