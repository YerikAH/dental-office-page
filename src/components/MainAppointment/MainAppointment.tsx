import SectionAppointment from "../SectionAppointment/SectionAppointment"
import icon from '../../assets/iconAppointment.png'
import s from './MainAppointment.module.css'
import { InputTypes } from "../../interface/enum";
import {
  IconBuildingHospital,
  IconCalendar,
  IconClock,
  IconMail,
  IconPhone,
  IconUser,
} from "@tabler/icons-react";

const APPOINTMENT = {
  services : [
    {
      image: icon,
      name: "Endodoncia",
      active: true
    },
    {
      image: icon,
      name: "Endodoncia",
      active: false
    },
    {
      image: icon,
      name: "Endodoncia",
      active: false
    },
    {
      image: icon,
      name: "Endodoncia",
      active: false
    },
    {
      image: icon,
      name: "Endodoncia",
      active: false
    },
    {
      image: icon,
      name: "Endodoncia",
      active: false
    }
  ],
  title: 'Reserva tu cita en "La preventiva"',
  text: 'Suspendisse fermentum arcu eget risus auctor, vel pretium eros ultricies.'
} 
const doctors = [
  {
    name: "Harvey Vasquez Huaranga Yerik",
    phone: "967523180",
  },
  {
    name: "Pepe Vargas Sinche Pedro",
    phone: "971234232",
  },
];
const FORM = [
  {
    label: "Nombre",
    placeholder: "Escribe tu nombre",
    icon: <IconUser />,
    type: InputTypes.TEXT,
    withIcon: true,
    doctors: doctors,
  },
  {
    label: "Email",
    placeholder: "Escribe tu correo electronico",
    icon: <IconMail />,
    type: InputTypes.EMAIL,
    withIcon: true,
    doctors: doctors,
  },
  {
    label: "Numero de celular",
    placeholder: "Escribe tu numero de celular",
    icon: <IconPhone />,
    type: InputTypes.NUMBER,
    withIcon: true,
    doctors: doctors,
  },
  {
    label: "Fecha",
    placeholder: "Selecciona la fecha",
    icon: <IconCalendar />,
    type: InputTypes.DATE,
    withIcon: true,
    doctors: doctors,
  },
  {
    label: "Hora",
    placeholder: "Selecciona la hora",
    icon: <IconClock />,
    type: InputTypes.HOUR,
    withIcon: true,
    doctors: doctors,
  },
  {
    label: "Odontologo",
    placeholder: "Selecciona el odontologo",
    icon: <IconBuildingHospital />,
    type: InputTypes.SELECT,
    withIcon: true,
    doctors: doctors,
  },
];
const FORM_ALL = {
  inputs: FORM,
  textarea:   {
    label: "Mensaje adicional",
    placeholder: "Escribe algún mensaje adicional por la consulta",
    type: InputTypes.TEXT,
    withIcon: false,  
    doctors: doctors,
    multiline:true
  },
}


function MainAppointment(){
  return <main className={s.main}>
    <SectionAppointment services={APPOINTMENT.services} title={APPOINTMENT.title} text={APPOINTMENT.text} form={FORM_ALL}/>
  </main>
}
export default MainAppointment