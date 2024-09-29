import s from "./index.module.css";
import { FormContact, Map } from "@/components/shared";
import { InputTypes } from "@/types";

export interface Props {
  inputs: {
    label: string;
    name: string;
    placeholder: string;
    type: InputTypes;
    withIcon: boolean;
    icon?: JSX.Element;
    multiline?: boolean;
    options?: { name: string; value: string }[];
    isRequired?: boolean;
    isLabel?: boolean;
    regex?: RegExp;
    max?: number;
    min?: number;
    setFormState?: (value: string, name: string, error: boolean) => void;
    isSubmit?: boolean;
  }[];
  title: string;
  text: string;
}

export const ContactSection = ({ title, text, inputs }: Props) => {
  return (
    <section className={s.section} id="Contactanos">
      <div className={s.section__map}>
        <Map src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2759.0277871993453!2d-75.2376479827137!3d-12.053529301432896!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2spe!4v1699273072048!5m2!1ses!2spe" />
      </div>
      <div className={s.section__form}>
        <h2>{title}</h2>
        <p>{text}</p>
        <FormContact inputs={inputs} />
      </div>
    </section>
  );
};
