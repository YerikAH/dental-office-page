import { InputTypes } from "@/types";
import { IconSearch } from "@tabler/icons-react";

export const NOT_FOUND_SECTION = {
  title: "We can't find the page you're looking for.",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid modi neque porro quaerat. Ea, inventore",
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
