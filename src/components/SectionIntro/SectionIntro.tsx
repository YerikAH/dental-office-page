import Carousel from '../Carousel/Carousel'
import CardIntro from '../CardIntro/CardIntro'
import {SectionIntroProps} from '../../interface/props'
import s from './SectionIntro.module.css'

function SectionIntro({images, speed, items}: SectionIntroProps){
  return (
    <section className={s.section}>
      <Carousel images={images} speed={speed}/>
      <div className={s.cards}>
        {items.map((item, idx) => (
          <CardIntro key={idx} button={item.button} image={item.image} text={item.text} title={item.title}/>
        ))}
      </div>
    </section>
  )
}

export default SectionIntro