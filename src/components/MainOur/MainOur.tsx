import SectionOurDoctors from "../SectionOurDoctors/SectionOurDoctors";
import SectionVisionMision from "../SectionVisionMision/SectionVisionMision";
import poster from '../../assets/doctor_poster_two.png'
import s from "./Main.module.css";


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
function MainOur() {
  return (
    <main className={s.main}>
      <SectionOurDoctors
        doctors={ITEMS_DOCTORS}
        title="Conoce a nuestros dentistas"
      />
      <SectionVisionMision items={ITEMS} image={poster}/>
    </main>
  );
}
export default MainOur;
