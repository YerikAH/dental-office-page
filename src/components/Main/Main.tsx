import banner from '../../assets/banner.png'
import banner_2 from '../../assets/banner_2.jpg'
import banner_3 from '../../assets/banner_3.jpeg'
import SectionIntro from '../SectionIntro/SectionIntro'
import icon from '../../assets/iconIntro.png'
import SectionWhyChoice from '../SectionWhyChoice/SectionWhyChoice'
import doctor from "../../assets/doctor.png";
import SectionOurDoctors from '../SectionOurDoctors/SectionOurDoctors'

const IMAGES_INTRO = [
  banner,
  banner_2,
  banner_3
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
const ITEMS_INFO = {
  label: "_SALUD DENTAL_",
  title: "¿Porque elegirnos?",
  slogan: "La preventiva, donde preveemos tus dientes",
  text: "Somos líderes en tratamientos estéticos láser, sin importar tu objetivo de belleza. Nuestros profesionales experimentados, te ayudarán a lograr los resultados que esperas, ofreciéndote tratamientos estéticos accesibles y personalizados.",
  items: [
    "Contamos con masde 10 años de experiencia.",
    "Garantiade 20 días con muchas ofertas",
    "Contamos lo ultimo en teconologia",
  ],
  button: "reserva tu cita",
};

function Main(){
  return (
    <main>
      <SectionIntro images={IMAGES_INTRO} items={ITEMS_INTRO} speed={10000}/>
      <SectionWhyChoice image={doctor} info={ITEMS_INFO}/>
      <SectionOurDoctors/>
    </main>
  )
}

export default Main