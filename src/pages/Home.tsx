import Navigation from "../components/Navigation/Navigation";
import Carousel from '../components/Carousel/Carousel'
import logo from '../assets/logo.png'

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
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8c6OZZGGHYe2HiUqRgAhW2g2cR5e32sDR-oRcmy2Pg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSScrq_9Q1B0oGTKf1zpDM9NFO5qmCGDr7pP0mAu4k&s',
  'https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg',
  'https://img.freepik.com/free-photo/ultra-detailed-nebula-abstract-wallpaper-9_1562-754.jpg',
  'https://img.freepik.com/photos-premium/galaxie-coloree-fond-noir-nebuleuse-au-centre_902049-3401.jpg'
]

function Home(){
  return (
    <>
      <Navigation items={ITEMS} logo={logo}/>
      <Carousel images={IMAGES} speed={1000}/>
    </>
  )
}

export default Home
