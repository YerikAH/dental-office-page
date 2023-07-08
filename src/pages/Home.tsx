import Navigation from "../components/Navigation/Navigation";
import logo from "../assets/logo.png";
import Main from "../components/Main/Main";
import BtnWhatsApp from "../components/BtnWhatsApp/BtnWhatsApp";
import CardDentist from "../components/CardDentist/CardDentist";
import CarouselCards from "../components/CarouselCards/CarouselCards";

const ITEMS = [
  {
    path: "/",
    label: "Inicio",
    active: true,
  },
  {
    path: "/",
    label: "Servicios",
    active: false,
  },
  {
    path: "/",
    label: "Productos",
    active: false,
  },
  {
    path: "/",
    label: "Contactanos",
    active: false,
  },
];
const TEST = [
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

function Home() {
  return (
    <>
      <Navigation items={ITEMS} logo={logo} />
      <Main />
      <CarouselCards cards={TEST} />

      <BtnWhatsApp /> 
    </>
  );
}

export default Home;
