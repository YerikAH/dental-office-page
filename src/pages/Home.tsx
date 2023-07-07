import Navigation from "../components/Navigation/Navigation";
import Carousel from '../components/Carousel/Carousel'
import logo from '../assets/logo.png'
import imageIntro from '../assets/banner.png'
import imageIntroTwo from '../assets/banner_2.jpg'

const ITEMS= [
  {
    path: '/',
    label: 'Inicio',
    active: true
  },
  {
    path: '/',
    label: 'Servicios',
    active: false
  },
  {
    path: '/',
    label: 'Contactanos',
    active: false
  }
]
const IMAGES = [
  imageIntro,
  imageIntroTwo
]

function Home(){
  return (
    <>
      <Navigation items={ITEMS} logo={logo}/>
      <Carousel images={IMAGES} speed={5000}/>
    </>
  )
}

export default Home
