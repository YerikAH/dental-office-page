import SectionAppointment from "../SectionAppointment/SectionAppointment";
import icon from "../../assets/iconAppointment.png";
import s from "./MainAppointment.module.css";
import { InputTypes } from "../../interface/enum";
import {
  IconBuildingHospital,
  IconCalendar,
  IconClock,
  IconMail,
  IconPhone,
  IconUser,
} from "@tabler/icons-react";
import SectionFindUs from "../SectionFindUs/SectionFindUs";
import SectionMap from "../SectionMap/SectionMap.tsx";
import { CustomInputProps } from "../../interface/props.ts";

const APPOINTMENT = {
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
const FORM:CustomInputProps[] = [
  {
    label: "Nombre",
    name: "name",
    placeholder: "Escribe tu nombre",
    type: InputTypes.TEXT,
    withIcon: true,
    icon: <IconUser />,
    options: doctors,
    isRequired: true,

  },
  {
    label: "Email",
    placeholder: "Escribe tu correo electronico",
    icon: <IconMail />,
    type: InputTypes.EMAIL,
    withIcon: true,
    options: doctors,
    isRequired: true,
    name: "email",
  },
  {
    label: "Numero de celular",
    placeholder: "Escribe tu numero de celular",
    icon: <IconPhone />,
    type: InputTypes.NUMBER,
    withIcon: true,
    options: doctors,
    isRequired: true,
    name: "phone_number",
  },
  {
    label: "Fecha",
    placeholder: "Selecciona la fecha",
    icon: <IconCalendar />,
    type: InputTypes.DATE,
    withIcon: true,
    options: doctors,
    isRequired: true,
    name: "date",
  },
  {
    label: "Hora",
    placeholder: "Selecciona la hora",
    icon: <IconClock />,
    type: InputTypes.HOUR,
    withIcon: true,
    options: doctors,
    isRequired: true,
    name: "hour",
  },
  {
    label: "Odontologo",
    placeholder: "Selecciona el odontologo",
    icon: <IconBuildingHospital />,
    type: InputTypes.SELECT,
    withIcon: true,
    options: doctors,
    isRequired: true,
    name: "doctor",
  },
];
const FORM_ALL = {
  inputs: FORM,
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
const FIND_US = {
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

function MainAppointment() {
  return (
    <main className={s.main}>
      <SectionAppointment
        services={APPOINTMENT.services}
        title={APPOINTMENT.title}
        text={APPOINTMENT.text}
        form={FORM_ALL}
      />
      <SectionFindUs
        items={FIND_US.items}
        title={FIND_US.title}
        text={FIND_US.text}
        tag={FIND_US.tag}
      />
      <SectionMap />
    </main>
  );
}
export default MainAppointment;
