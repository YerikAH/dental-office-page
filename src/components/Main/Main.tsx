import banner from '../../assets/banner.png'
import banner_2 from '../../assets/banner_2.jpg'
import SectionIntro from '../SectionIntro/SectionIntro'
import icon from '../../assets/iconIntro.png'

const IMAGES_INTRO = [
  banner,
  banner_2
]
const ITEMS_INTRO = [
  {
    image: icon,
    title: 'Dolor de diente',
    text: 'En Sonreír le brindamos algunos consejos útiles para que mantenga una buena salud bucal. ',
    button: 'ver mas'
  },
  {
    image: icon,
    title: 'Dolor de diente',
    text: 'En Sonreír le brindamos algunos consejos útiles para que mantenga una buena salud bucal. ',
    button: 'ver mas'
  },
  {
    image: icon,
    title: 'Dolor de diente',
    text: 'En Sonreír le brindamos algunos consejos útiles para que mantenga una buena salud bucal. ',
    button: 'ver mas'
  },
]

function Main(){
  return (
    <main>
      <SectionIntro images={IMAGES_INTRO} items={ITEMS_INTRO} speed={10000}/>
    </main>
  )
}

export default Main