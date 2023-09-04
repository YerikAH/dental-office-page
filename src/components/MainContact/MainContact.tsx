import { InputTypes } from "../../interface/enum";
import SectionContact from "../SectionContact/SectionContact";
import SectionFindUs from "../SectionFindUs/SectionFindUs";
import icon from "../../assets/iconAppointment.png";
import SectionNumbers from "../SectionNumbers/SectionNumbers";
import userIcon from '../../assets/user-doctor.png'
import s from './MainContact.module.css'

const CONTACT = {
  title: "Contactanos",
  text: "Lorem ipsum dolor sit amet, qui minim labore adipisicing.",
  inputs: [
    {
      name: "name",
      label: "Nombre",
      placeholder: "Escribe tu nombre",
      type: InputTypes.TEXT,
      withIcon: false,
    },
    {
      label: "Apellido",
      name: "last_name",
      placeholder: "Escribe tu apellido",
      type: InputTypes.TEXT,
      withIcon: false,
    },
    {
      name: "email",
      label: "Correo electronico",
      placeholder: "Escribe tu correo electronico",
      type: InputTypes.EMAIL,
      withIcon: false,
    },
    {
      name: "phone",
      label: "Numero de celular",
      placeholder: "Escribe tu numero de celular",
      type: InputTypes.NUMBER,
      withIcon: false,
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

const NUMBERS = [
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
function MainContact() {
  return (
    <main className={s.main}>
      <SectionContact inputs={CONTACT.inputs} text={CONTACT.text} title={CONTACT.title}/>
      <SectionFindUs
        items={FIND_US.items}
        title={FIND_US.title}
        text={FIND_US.text}
        tag={FIND_US.tag}
      />
      <SectionNumbers ITEMS={NUMBERS}/>
    </main>
  )
}
export default MainContact;