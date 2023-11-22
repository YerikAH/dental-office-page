import icon from "../assets/iconAppointment.png";

import userIcon from "../assets/user-doctor.png";
import bannerPromotion from "../assets/banner_promotion.jpg";

// WHY CHOICE

// SERVICE INTRO

// BEST RESULTS

// ENUM - INTERFACES
import { InputTypes, RoutesEnum } from "../interface/enum";

// ICONS
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
import { CONTACTS } from "./shared";

// LOCAL

// FOOTER

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

const APPOINTMENT_FORM = [
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
