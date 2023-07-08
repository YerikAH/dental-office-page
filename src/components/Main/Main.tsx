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

const ITEMS_DOCTORS = [
  {
    name: 'Harvey Yerik',
    special: 'Ingeniero de software',
    image: 'https://images.pexels.com/photos/6502026/pexels-photo-6502026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text:'Lorem ipsum dolor sit ametaew, ddaasf so the conaconsectetur adipiscing elit. Etiam tellus aefc ipsum, pellentesque quisdq dapibus et, faucibus a nibh. Lorem ipsum dolor sit, but is increible',
    email: '',
    fb: '',
    phone: '',
    url: ''
  },
  {
    name: 'Harvey Yerik',
    special: 'Ingeniero de software',
    image: 'https://images.pexels.com/photos/6502026/pexels-photo-6502026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text:'Lorem ipsum dolor sit ametaew, ddaasf so the conaconsectetur adipiscing elit. Etiam tellus aefc ipsum, pellentesque quisdq dapibus et, faucibus a nibh. Lorem ipsum dolor sit, but is increible',
    email: '',
    fb: '',
    phone: '',
    url: ''
  },
  {
    name: 'Harvey Yerik',
    special: 'Ingeniero de software',
    image: 'https://images.pexels.com/photos/6502026/pexels-photo-6502026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text:'Lorem ipsum dolor sit ametaew, ddaasf so the conaconsectetur adipiscing elit. Etiam tellus aefc ipsum, pellentesque quisdq dapibus et, faucibus a nibh. Lorem ipsum dolor sit, but is increible',
    email: '',
    fb: '',
    phone: '',
    url: ''
  },
  {
    name: 'Harvey Yerik',
    special: 'Ingeniero de software',
    image: 'https://images.pexels.com/photos/6502026/pexels-photo-6502026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text:'Lorem ipsum dolor sit ametaew, ddaasf so the conaconsectetur adipiscing elit. Etiam tellus aefc ipsum, pellentesque quisdq dapibus et, faucibus a nibh. Lorem ipsum dolor sit, but is increible',
    email: '',
    fb: '',
    phone: '',
    url: ''
  },
  {
    name: 'Harvey Yerik',
    special: 'Ingeniero de software',
    image: 'https://images.pexels.com/photos/6502026/pexels-photo-6502026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    text:'Lorem ipsum dolor sit ametaew, ddaasf so the conaconsectetur adipiscing elit. Etiam tellus aefc ipsum, pellentesque quisdq dapibus et, faucibus a nibh. Lorem ipsum dolor sit, but is increible',
    email: '',
    fb: '',
    phone: '',
    url: ''
  }
]

function Main(){
  return (
    <main>
      <SectionIntro images={IMAGES_INTRO} items={ITEMS_INTRO} speed={10000}/>
      <SectionWhyChoice image={doctor} info={ITEMS_INFO}/>
      <SectionOurDoctors doctors={ITEMS_DOCTORS} title='Conoce a nuestros dentistas'/>
    </main>
  )
}

export default Main