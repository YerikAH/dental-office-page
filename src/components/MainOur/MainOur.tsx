import SectionOurDoctors from "../SectionOurDoctors/SectionOurDoctors";
import SectionVisionMision from "../SectionVisionMision/SectionVisionMision";
import poster from "../../assets/doctor_poster_two.png";
import s from "./Main.module.css";
import Welcome from "../Welcome/Welcome";
import welcome from "../../assets/welcome.png";
import SectionNumbers from "../SectionNumbers/SectionNumbers";
import userIcon from "../../assets/user-doctor.png";
import SectionParallax from "../SectionParallax/SectionParallax";
import posterII from "../../assets/good_poster_III.jpg";
import SectionPromotion from "../SectionPromotion/SectionPromotion";
import { section_promotion } from "../../db/db";

const ITEMS_DOCTORS = [
  {
    name: "Harvey Yerik",
    special: "Ingeniero de software",
    image:
      "https://images.pexels.com/photos/6502026/pexels-photo-6502026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Lorem ipsum dolor sit ametaew, ddaasf so the conaconsectetur adipiscing elit. Etiam tellus aefc ipsum, pellentesque quisdq dapibus et, faucibus a nibh. Lorem ipsum dolor sit, but is increible",
    email: "",
    fb: "",
    phone: "",
    url: "",
  },
  {
    name: "Harvey Yerik",
    special: "Ingeniero de software",
    image:
      "https://images.pexels.com/photos/6502026/pexels-photo-6502026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Lorem ipsum dolor sit ametaew, ddaasf so the conaconsectetur adipiscing elit. Etiam tellus aefc ipsum, pellentesque quisdq dapibus et, faucibus a nibh. Lorem ipsum dolor sit, but is increible",
    email: "",
    fb: "",
    phone: "",
    url: "",
  },
  {
    name: "Harvey Yerik",
    special: "Ingeniero de software",
    image:
      "https://images.pexels.com/photos/6502026/pexels-photo-6502026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Lorem ipsum dolor sit ametaew, ddaasf so the conaconsectetur adipiscing elit. Etiam tellus aefc ipsum, pellentesque quisdq dapibus et, faucibus a nibh. Lorem ipsum dolor sit, but is increible",
    email: "",
    fb: "",
    phone: "",
    url: "",
  },
  {
    name: "Harvey Yerik",
    special: "Ingeniero de software",
    image:
      "https://images.pexels.com/photos/6502026/pexels-photo-6502026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Lorem ipsum dolor sit ametaew, ddaasf so the conaconsectetur adipiscing elit. Etiam tellus aefc ipsum, pellentesque quisdq dapibus et, faucibus a nibh. Lorem ipsum dolor sit, but is increible",
    email: "",
    fb: "",
    phone: "",
    url: "",
  },
  {
    name: "Harvey Yerik",
    special: "Ingeniero de software",
    image:
      "https://images.pexels.com/photos/6502026/pexels-photo-6502026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Lorem ipsum dolor sit ametaew, ddaasf so the conaconsectetur adipiscing elit. Etiam tellus aefc ipsum, pellentesque quisdq dapibus et, faucibus a nibh. Lorem ipsum dolor sit, but is increible",
    email: "",
    fb: "",
    phone: "",
    url: "",
  },
];
const WELCOME = {
  title: 'Bienvenido a "La Preventiva"',
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus aefc ipsum, pellentesque quisdq dapibus et, faucibus a nibh. Lorem ipsum dolor sit, but is increible dolor sit amet, consectetur adipiscing elit. Etiam tellus aefc ipsum, pellentesque quisdq dapibus et, faucibus a nibh. Lorem ipsum dolor sit, but is increible dolor sit amet, consectetur adipiscing elit. Etiam tellus aefc ipsum, pellentesque quisdq dapibus et, faucibus a nibh. Lorem ipsum dolor sit, but is increible",
  img: welcome,
  button: "Reserva tu cita aquí",
};

const ITEMS = [
  {
    title: "Misión",
    text: "Somos líderes en tratamientos estéticos láser, sin importar tu objetivo de belleza. Nuestros profesionales experimentados, te ayudarán a lograr los resultados que esperas, ofreciéndote tratamientos estéticos accesibles y personalizados",
  },
  {
    title: "Visión",
    text: "Somos líderes en tratamientos estéticos láser, sin importar tu objetivo de belleza. Nuestros profesionales experimentados, te ayudarán a lograr los resultados que esperas, ofreciéndote tratamientos estéticos accesibles y personalizados",
  },
];
const NUMBERS = [
  {
    title: "2000",
    text: "Pacientes",
    img: userIcon,
  },
  {
    title: "500",
    text: "Pacientes",
    img: userIcon,
  },
  {
    title: "100",
    text: "Pacientes",
    img: userIcon,
  },
  {
    title: "700",
    text: "Pacientes",
    img: userIcon,
  },
];
function MainOur() {
  return (
    <main className={s.main}>
      <SectionPromotion
        image={section_promotion.image}
        points={section_promotion.points}
        text={section_promotion.text}
        title={section_promotion.title}
      />
      <Welcome
        img={WELCOME.img}
        title={WELCOME.title}
        text={WELCOME.text}
        button={WELCOME.button}
      />
      <SectionVisionMision items={ITEMS} image={poster} />
      <SectionOurDoctors
        doctors={ITEMS_DOCTORS}
        title="Conoce a nuestros dentistas"
      />
      <SectionNumbers ITEMS={NUMBERS} />
      <SectionParallax
        text="Lorem ipsum dolor sit ametaew, ddaasf so the conaconsectetur adipiscing elit. Etiam tellus aefc ipsum, pellentesque quisdq dapibus et, faucibus a nibh. Lorem ipsum dolor sit, but is increible. Lorem ipsum dolor sit ametaew, ddaasf so the conaconsectetur adipiscing elit. Etiam tellus aefc ipsum."
        logo='"La preventiva"'
        slogan="Nos preocupamos por tu salud"
        title="La mejora atención en"
        image={posterII}
      />
    </main>
  );
}
export default MainOur;
