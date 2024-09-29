import { InputTypes } from "@/types";
import { IconSearch } from "@tabler/icons-react";

export const NOT_FOUND_SECTION = {
  title: "No podemos encontrar la página que buscas.",
  text: "Lo sentimos, parece que esta página no existe o ha sido movida. ¡No te preocupes! Estamos aquí para ayudarte a encontrar lo que necesitas.",
  button: "Ir al inicio",
  input: {
    name: "",
    placeholder: "¿A donde quieren ir?",
    type: InputTypes.TEXT,
    icon: <IconSearch />,
    label: "¿A donde quieren ir?",
    isRequired: false,
    isLabel: false,
    withIcon: true,
  },
};
