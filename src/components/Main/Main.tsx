import banner from "../../assets/banner.png";
import banner_2 from "../../assets/banner_2.jpg";
import banner_3 from "../../assets/banner_3.jpeg";
import SectionIntro from "../SectionIntro/SectionIntro";
import icon from "../../assets/iconIntro.png";
import SectionWhyChoice from "../SectionWhyChoice/SectionWhyChoice";
import doctor from "../../assets/doctor.png";
import SectionOurDoctors from "../SectionOurDoctors/SectionOurDoctors";
import SectionService from "../SectionService/SectionService";
import iconTest from "../../assets/IconTestII.svg";
import SectionQA from "../SectionQA/SectionQA";
import SectionOurClient from "../SectionOurClient/SectionOurClient";

const IMAGES_INTRO = [banner, banner_2, banner_3];
const ITEMS_INTRO = [
  {
    image: icon,
    title: "Dolor de diente",
    text: "En Sonreír le brindamos algunos consejos útiles para que mantenga una buena salud bucal. ",
    button: "ver mas",
  },
  {
    image: icon,
    title: "Dolor de diente",
    text: "En Sonreír le brindamos algunos consejos útiles para que mantenga una buena salud bucal. ",
    button: "ver mas",
  },
  {
    image: icon,
    title: "Dolor de diente",
    text: "En Sonreír le brindamos algunos consejos útiles para que mantenga una buena salud bucal. ",
    button: "ver mas",
  },
];
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

const SERVICE = {
  title: "UNA AMPLIA GAMA DE SERVICIOS",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus ipsum, pellentesque quis dapibus et, faucibus a nibh. Sed sit amet vulputate nulla, vitae blandit enim. ",
  items: [
    {
      title: "Tratamiento Medico",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus ipsum, pellentesque quis dapibus et, faucibus a nibh. ",
      icon: iconTest,
      color: "#3498E1",
    },
    {
      title: "Tratamiento Medico",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus ipsum, pellentesque quis dapibus et, faucibus a nibh. ",
      icon: iconTest,
      color: "#3498E1",
    },
    {
      title: "Tratamiento Medico",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus ipsum, pellentesque quis dapibus et, faucibus a nibh. ",
      icon: iconTest,
      color: "#3498E1",
    },
    {
      title: "Tratamiento Medico",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus ipsum, pellentesque quis dapibus et, faucibus a nibh. ",
      icon: iconTest,
      color: "#3498E1",
    },
    {
      title: "Tratamiento Medico",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus ipsum, pellentesque quis dapibus et, faucibus a nibh. ",
      icon: iconTest,
      color: "#3498E1",
    },
    {
      title: "Tratamiento Medico",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus ipsum, pellentesque quis dapibus et, faucibus a nibh. ",
      icon: iconTest,
      color: "#3498E1",
    },
    {
      title: "Tratamiento Medico",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus ipsum, pellentesque quis dapibus et, faucibus a nibh. ",
      icon: iconTest,
      color: "#3498E1",
    },
    {
      title: "Tratamiento Medico",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus ipsum, pellentesque quis dapibus et, faucibus a nibh. ",
      icon: iconTest,
      color: "#3498E1",
    },
    {
      title: "Tratamiento Medico",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus ipsum, pellentesque quis dapibus et, faucibus a nibh. ",
      icon: iconTest,
      color: "#3498E1",
    },
    {
      title: "Tratamiento Medico",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus ipsum, pellentesque quis dapibus et, faucibus a nibh. ",
      icon: iconTest,
      color: "#3498E1",
    },
    {
      title: "Tratamiento Medico",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus ipsum, pellentesque quis dapibus et, faucibus a nibh. ",
      icon: iconTest,
      color: "#3498E1",
    },
    {
      title: "Tratamiento Medico",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus ipsum, pellentesque quis dapibus et, faucibus a nibh. ",
      icon: iconTest,
      color: "#3498E1",
    },
    {
      title: "Tratamiento Medico",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus ipsum, pellentesque quis dapibus et, faucibus a nibh. ",
      icon: iconTest,
      color: "#3498E1",
    },
    {
      title: "Tratamiento Medico",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus ipsum, pellentesque quis dapibus et, faucibus a nibh. ",
      icon: iconTest,
      color: "#3498E1",
    },
  ],
};

const QA = {
  title: "PREGUNTAS FRECUENTES",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus ipsum, pellentesque quis dapibus et, faucibus a nibh. Sed sit amet vulputate nulla, vitae blandit enim. ",
  items: [
    {
      title: "¿Quien es el creador o CEO de La Preventiva?",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa repudiandae perspiciatis aliquid maiores, delectus quos inventore quae eius accusantium nulla eos aspernatur illo totam, sunt voluptates, sint quas minima earum architecto asperiores consequatur hic amet. ",
    },
    {
      title: "¿Quien es el creador o CEO de La Preventiva?",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa repudiandae perspiciatis aliquid maiores, delectus quos inventore quae eius accusantium nulla eos aspernatur illo totam, sunt voluptates, sint quas minima earum architecto asperiores consequatur hic amet. ",
    },
    {
      title: "¿Quien es el creador o CEO de La Preventiva?",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa repudiandae perspiciatis aliquid maiores, delectus quos inventore quae eius accusantium nulla eos aspernatur illo totam, sunt voluptates, sint quas minima earum architecto asperiores consequatur hic amet. ",
    },
    {
      title: "¿Quien es el creador o CEO de La Preventiva?",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa repudiandae perspiciatis aliquid maiores, delectus quos inventore quae eius accusantium nulla eos aspernatur illo totam, sunt voluptates, sint quas minima earum architecto asperiores consequatur hic amet. ",
    },
    {
      title: "¿Quien es el creador o CEO de La Preventiva?",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa repudiandae perspiciatis aliquid maiores, delectus quos inventore quae eius accusantium nulla eos aspernatur illo totam, sunt voluptates, sint quas minima earum architecto asperiores consequatur hic amet. ",
    },
    {
      title: "¿Quien es el creador o CEO de La Preventiva?",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa repudiandae perspiciatis aliquid maiores, delectus quos inventore quae eius accusantium nulla eos aspernatur illo totam, sunt voluptates, sint quas minima earum architecto asperiores consequatur hic amet. ",
    },
    {
      title: "¿Quien es el creador o CEO de La Preventiva?",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa repudiandae perspiciatis aliquid maiores, delectus quos inventore quae eius accusantium nulla eos aspernatur illo totam, sunt voluptates, sint quas minima earum architecto asperiores consequatur hic amet. ",
    },
    {
      title: "¿Quien es el creador o CEO de La Preventiva?",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa repudiandae perspiciatis aliquid maiores, delectus quos inventore quae eius accusantium nulla eos aspernatur illo totam, sunt voluptates, sint quas minima earum architecto asperiores consequatur hic amet. ",
    },
  ],
};
const OPINIONS = {
  title: "Nuestro clientes",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus ipsum, pellentesque quis dapibus et, faucibus a nibh. Sed sit amet vulputate nulla, vitae blandit enim. ",
  items: [
    {
      avatar:
        "https://images.pexels.com/photos/16999877/pexels-photo-16999877/free-photo-of-gente-mujer-relajacion-conexion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Sara Bosu",
      opinion:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.",
      tag: "Happy client",
    },
    {
      avatar:
        "https://images.pexels.com/photos/16999877/pexels-photo-16999877/free-photo-of-gente-mujer-relajacion-conexion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Sara Bosu",
      opinion:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.",
      tag: "Happy client",
    },
    {
      avatar:
        "https://images.pexels.com/photos/16999877/pexels-photo-16999877/free-photo-of-gente-mujer-relajacion-conexion.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Sara Bosu",
      opinion:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words.",
      tag: "Happy client",
    },
  ],
};

function Main() {
  return (
    <main>
      <SectionIntro images={IMAGES_INTRO} items={ITEMS_INTRO} speed={10000} />
      <SectionWhyChoice image={doctor} info={ITEMS_INFO} />
      <SectionOurDoctors
        doctors={ITEMS_DOCTORS}
        title="Conoce a nuestros dentistas"
      />
      <SectionService
        title={SERVICE.title}
        text={SERVICE.text}
        items={SERVICE.items}
      />
      <SectionQA title={QA.title} text={QA.text} items={QA.items} />
      <SectionOurClient title={OPINIONS.title} text={OPINIONS.text} items={OPINIONS.items} />
    </main>
  );
}

export default Main;
