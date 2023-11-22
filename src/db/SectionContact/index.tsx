import { InputTypes } from "../../interface/enum";

export const SECTION_CONTACT = {
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
