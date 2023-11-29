/* eslint-disable react-refresh/only-export-components */
import email from "../../assets/email.png";
import location from "../../assets/location.png";
import phone from "../../assets/phone.png";
import { InputTypes } from "../../interface/enum";

export const CONTACTS = [
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

export const INPUT_CONTACTS = [
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
];
