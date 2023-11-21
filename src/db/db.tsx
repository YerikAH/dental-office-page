import email from "../assets/email.png";
import location from "../assets/location.png";
import phone from "../assets/phone.png";
import facebook from "../assets/facebook.png";
import logo from "../assets/logo.png";
import icon from "../assets/iconAppointment.png";
import { CustomInputProps, FooterProps } from "../interface/props";
import userIcon from "../assets/user-doctor.png";
import bannerPromotion from "../assets/banner_promotion.jpg";

// SECTION INTRO
import banner from "../assets/banner.png";
import banner_2 from "../assets/banner_2.jpg";
import banner_3 from "../assets/banner_3.jpeg";
import iconIntroOne from "../assets/iconIntro.png";

// WHY CHOICE
import doctorPrincipal from "../assets/doctor.png";

// SERVICE INTRO
import iconTest from "../assets/IconTestII.svg";

// BEST RESULTS
import smile_good from "../assets/smile_perfect.jpg";
import smile_bad from "../assets/smile_bad.jpg";
// ENUM
import { InputTypes, RoutesEnum } from "../interface/enum";

import {
  IconBrandFacebook,
  IconBrandTelegram,
  IconBuildingHospital,
  IconCalendar,
  IconClock,
  IconFileLike,
  IconMail,
  IconMessage,
  IconPhone,
  IconShoppingBag,
  IconUser,
  IconUserExclamation,
} from "@tabler/icons-react";

// LOCAL
const INFO = [
  {
    title: "Encuentranos en: ",
    text: "Jr. Ica N° 113 - 2do Piso - Of. 09",
  },
  {
    title: "Horario: ",
    text: "Lunes a Sabados - 8:00am a 8:00pm",
  },
];
const ITEMS = [
  {
    path: RoutesEnum.HOME,
    label: "Inicio",
    active: true,
  },
  {
    path: RoutesEnum.OUR,
    label: "Nosotros",
    active: false,
  },
  {
    path: "/",
    label: "Servicios",
    active: false,
  },
  {
    path: RoutesEnum.CONTACT,
    label: "Contactanos",
    active: false,
  },
  {
    path: RoutesEnum.PRODUCTS,
    label: "Productos",
    active: false,
  },
];

const MEDIA = [
  {
    media: facebook,
    url: "",
  },
  {
    media: facebook,
    url: "",
  },
];
const CONTACTS = [
  {
    icon: phone,
    label: "(+51) 967 523 180",
  },
  {
    icon: email,
    label: "lapreventiva@gmail.com",
  },
  {
    icon: location,
    label: "Jr. Ica 113 2 Do Piso Of. 09",
  },
];

// export data
export const FOOTER: FooterProps = {
  question: "¿Quieres agendar una cita facilmente?",
  button: "Agenda aquí",
  logo: logo,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus ipsum, pellentesque quis dapibus etLorem ipsum dolor sit amet, consectetur adipiscing elit etiam tellus ipsum, pellentesque quis dapibus et.",
  media: MEDIA,
  contacts: CONTACTS,
  descriptionI:
    "<b>Lunes a viernes:</b><br/>9:00am - 9:00pm <br/> <br/> <b>Sabados:</b><br/>9:00am - 7:00pm",
  descriptionII:
    "Las entregas se realizarán previa coordinación de fecha y horario con el cliente.",
  labelOne: "Datos del contacto",
  labelTwo: "Horario de antención",
  labelThree: "Entrega",
  copyright: 'Copyright © 2023 Consultorio odontológico "La Preventiva"',
};
export const NAV = {
  items: ITEMS,
  logo: logo,
  info: INFO,
};

// CONTACT

export const CONTACT = {
  title: "Contactanos",
  text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing  qui minim labore adipisicing  qui minim labore adipisicing  qui minim labore adipisicing.",
  inputs: [
    {
      name: "name",
      label: "Nombre",
      placeholder: "Escribe tu nombre",
      type: InputTypes.TEXT,
      withIcon: false,
      isRequired: true,
    },
    {
      label: "Apellido",
      name: "last_name",
      placeholder: "Escribe tu apellido",
      type: InputTypes.TEXT,
      withIcon: false,
      isRequired: true,
    },
    {
      name: "email",
      label: "Correo electronico",
      placeholder: "Escribe tu correo electronico",
      type: InputTypes.EMAIL,
      withIcon: false,
      isRequired: true,
    },
    {
      name: "phone",
      label: "Numero de celular",
      placeholder: "Escribe tu numero de celular",
      type: InputTypes.NUMBER,
      withIcon: false,
      isRequired: true,
    },
    {
      name: "message",
      label: "Mensaje",
      placeholder: "Escribe algún mensaje adicional",
      type: InputTypes.TEXT,
      withIcon: false,
      multiline: true,
    },
  ],
};

// APPOINTMENT
export const SERVICES_APPOINTMENT = {
  services: [
    {
      image: icon,
      name: "Pediatria",
      active: true,
    },
    {
      image: icon,
      name: "Endodoncia",
      active: false,
    },
    {
      image: icon,
      name: "Ortondoncia",
      active: false,
    },
    {
      image: icon,
      name: "Blacamiento",
      active: false,
    },
    {
      image: icon,
      name: "Consulta",
      active: false,
    },
    {
      image: icon,
      name: "Otros",
      active: false,
    },
  ],
  title: 'Reserva tu cita en "La preventiva"',
  text: "Suspendisse fermentum arcu eget risus auctor, vel pretium eros ultricies.",
};
const doctors = [
  {
    name: "Harvey Vasquez Huaranga Yerik",
    value: "967523180",
  },
  {
    name: "Pepe Vargas Sinche Pedro",
    value: "971234232",
  },
];
const APPOINTMENT_FORM: CustomInputProps[] = [
  {
    label: "Nombre",
    name: "name",
    placeholder: "Escribe tu nombre",
    type: InputTypes.TEXT,
    withIcon: true,
    icon: <IconUser />,
    isRequired: true,
  },
  {
    label: "Email",
    placeholder: "Escribe tu correo electronico",
    icon: <IconMail />,
    type: InputTypes.EMAIL,
    withIcon: true,
    isRequired: true,
    name: "email",
  },
  {
    label: "Numero de celular",
    placeholder: "Escribe tu numero de celular",
    icon: <IconPhone />,
    type: InputTypes.NUMBER,
    withIcon: true,
    isRequired: true,
    name: "phone_number",
  },
  {
    label: "Fecha",
    placeholder: "Selecciona la fecha",
    icon: <IconCalendar />,
    type: InputTypes.DATE,
    withIcon: true,
    isRequired: true,
    name: "date",
  },
  {
    label: "Hora",
    placeholder: "Selecciona la hora",
    icon: <IconClock />,
    type: InputTypes.HOUR,
    withIcon: true,
    isRequired: true,
    name: "hour",
  },
  {
    name: "doctor",
    label: "Odontologo",
    placeholder: "Selecciona el odontologo",
    icon: <IconBuildingHospital />,
    type: InputTypes.SELECT,
    withIcon: true,
    isRequired: true,
    options: doctors,
  },
];
export const FORM_ALL = {
  inputs: APPOINTMENT_FORM,
  textarea: {
    label: "Mensaje adicional",
    placeholder: "Escribe algún mensaje adicional por la consulta",
    type: InputTypes.TEXT,
    withIcon: false,
    options: doctors,
    multiline: true,
    name: "message",
  },
};

// FIND US

export const FIND_US = {
  items: [
    {
      image: icon,
      title: "Chat to sales",
      description: "Speak to our friendly team.",
      contact: "yerik05vh@gmail.com",
    },
    {
      image: icon,
      title: "Visitamos",
      description: "Speak to our friendly team.",
      contact: "JR. Ica 2do Piso, 100 - Huancayo",
    },
    {
      image: icon,
      title: "Chat to sales",
      description: "Speak to our friendly team.",
      contact: "(+51) 967523180",
    },
  ],
  title: "Nosotros amamos escucharte",
  text: "Conversa con nuestro maravilloso equipo",
  tag: "Contactanos",
};
// NUMBERS
export const NUMBERS = [
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
// SECTION PROMOTION
export const section_promotion = {
  title:
    "Somos líderes en tratamientos estéticos láser, sin importar tu objetivo de belleza.",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer volutpat eleifend urna a fringilla. Etiam vitae libero et magna laoreet pulvinar quis ac quam. Praesent posuere magna in velit tincidunt mattis. Ut porta pretium lacinia. Cras erat leo, aliquet sit amet elit non, maximus interdum neque. Aenean eu consectetur dui",
  image: bannerPromotion,
  points: [
    {
      icon: <IconUserExclamation />,
      title: "Tratamiento de calidad",
    },
    {
      icon: <IconMessage />,
      title: "Mensajeria rapida",
    },
    {
      icon: <IconBrandTelegram />,
      title: "Atención fácil y rapida con nuestra plataforma",
    },
    {
      icon: <IconFileLike />,
      title: "Buenas reseñas desde 5 años ",
    },
    {
      icon: <IconShoppingBag />,
      title: "Productos baratos",
    },
  ],
};
export const SECTION_CONTACTS_INFO = {
  title: "CONTACT US",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sed quisquam sit quos beatae consectetur nostrum dolorum animi, optio cumque maxime minima sapiente? Recusandae nemo odio possimus inventore laborum cupiditate ipsum, animi delectus rem vero et, alias temporibus.",
  address:
    "Col. La preventiva<br />Jiron Ica 113. Segundo piso Of. 09<br />Doveer, DE 12001",
  contacts: CONTACTS,
};
export const CONTACT_SUPPORT = {
  title: "Contact Support",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sed quisquam sit quos beatae consectetur nostrum dolorum animi, optio cumque maxime minima sapiente?",
  email: "yerik05vh@gmail.com",
  phoneNumber: "+51 967 523 180",
};

export const CONTACT_DINAMIC = {
  title: "Solo un click",
  text: "Necesitas ayuda rapida, nosotros hacemos esto mucho mas facil para ti.",
  address:
    "Col. La preventiva<br />Jiron Ica 113. Segundo piso Of. 09<br />Doveer, DE 12001",
  contactsLink: [
    {
      link: "",
      text: "yerik05vh@gmail.com",
      icon: <IconMail />,
      color: "#0BB3BF",
    },
    {
      link: "",
      text: "La preventiva",
      icon: <IconBrandFacebook />,
      color: "#2CC27E",
    },
    {
      link: "",
      text: "+51 967 523 180",
      icon: <IconPhone />,
      color: "#2C6AC2",
    },
  ],
};

export const IMAGES_INTRO = [
  {
    image: banner,
    title: "Tratamientos dentales de calidad en un solo lugar",
    text: "Para ello contamos con una gran variedad de servicios odontológicos, así también tenemos un staff de profesionales.",
  },
  {
    image: banner_2,
  },
  {
    image: banner_3,
  },
];
export const ITEMS_INTRO = [
  {
    image: iconIntroOne,
    title: "Dolor de diente",
    text: "En Sonreír le brindamos algunos consejos útiles para que mantenga una buena salud bucal. ",
    button: "ver mas",
  },
  {
    image: iconIntroOne,
    title: "Dolor de diente",
    text: "En Sonreír le brindamos algunos consejos útiles para que mantenga una buena salud bucal. ",
    button: "ver mas",
  },
  {
    image: iconIntroOne,
    title: "Dolor de diente",
    text: "En Sonreír le brindamos algunos consejos útiles para que mantenga una buena salud bucal. ",
    button: "ver mas",
  },
];
export const ITEMS_INFO = {
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
  image: doctorPrincipal,
};

export const ITEMS_DOCTORS = [
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

export const SERVICES = {
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

export const QA = {
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
export const OPINIONS = {
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

export const BEST = {
  title: "Los mejores resultados",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus ipsum, pellentesque quis dapibus et, faucibus a nibh. Sed sit amet vulputate nulla, vitae blandit enim. ",
  images: {
    smile_good: smile_good,
    smile_bad: smile_bad,
  },
};
