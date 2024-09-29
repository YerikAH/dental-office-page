import {
  IconBuildingHospital,
  IconCalendar,
  IconClock,
  IconMail,
  IconPhone,
  IconUser,
} from "@tabler/icons-react";
import icon from "@/assets/icon/iconAppointment.png";
import { InputTypes } from "@/types";

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

const APPOINTMENT_INPUTS = [
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

const APPOINTMENT_FORM = {
  inputs: APPOINTMENT_INPUTS,
  textarea: {
    label: "Mensaje adicional",
    placeholder: "Escribe algún mensaje adicional por la consulta",
    type: InputTypes.TEXT,
    withIcon: false,
    multiline: true,
    name: "message",
  },
};
export const RESERVE_SECTION = {
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
  text: "¡Reserva ahora en La Preventiva y descubre la mejor atención para tu sonrisa!",
  form: APPOINTMENT_FORM,
};
