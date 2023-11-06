import email from "../assets/email.png";
import location from "../assets/location.png";
import phone from "../assets/phone.png";
import facebook from "../assets/facebook.png";
import logo from "../assets/logo.png";
import icon from "../assets/iconAppointment.png";
import { InputTypes, RoutesEnum } from "../interface/enum";
import { CustomInputProps } from "../interface/props";
import userIcon from '../assets/user-doctor.png'
import {
  IconBuildingHospital,
  IconCalendar,
  IconClock,
  IconMail,
  IconPhone,
  IconUser,
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
const ITEMS_FOOTER = [
  {
    path: "/",
    label: "Productos",
    active: true,
  },
  {
    path: "/",
    label: "Nosotros",
    active: false,
  },
  {
    path: "/",
    label: "Servicios",
    active: false,
  },
  {
    path: "/",
    label: "Porque elegirnos",
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
export const FOOTER = {
  question: "¿Quieres agendar una cita facilmente?",
  button: "Agenda aquí",
  logo: logo,
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tellus ipsum, pellentesque quis dapibus etLorem ipsum dolor sit amet, consectetur adipiscing elit etiam tellus ipsum, pellentesque quis dapibus et.",
  media: MEDIA,
  contacts: CONTACTS,
  navigation: ITEMS_FOOTER,
  labelOne: "Datos de contacto",
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
    img:  userIcon,
  },
  {
    title: "500",
    text: "Pacientes",
    img:  userIcon,
  },
  {
    title: "100",
    text: "Pacientes",
    img:  userIcon,
  },  {
    title: "700",
    text: "Pacientes",
    img:  userIcon,
  }
]