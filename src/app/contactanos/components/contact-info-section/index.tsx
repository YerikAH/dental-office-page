import s from "./index.module.css";
import Image, { StaticImageData } from "next/image";
import { FormContact } from "@/components/shared";
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
  address: string;
  contacts: { icon: StaticImageData; label: string }[];
}
export const ContactInfoSection = ({
  title,
  text,
  inputs,
  contacts,
  address,
}: Props) => {
  return (
    <section className={s.section} id="Contactanos">
      <div className={s.section__info}>
        <div className={s.info}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <span dangerouslySetInnerHTML={{ __html: address }} />
        <div>
          {contacts.map((item, idx) => (
            <div key={idx} className={s.contact}>
              <Image src={item.icon} alt="icon" />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={s.section__form}>
        <FormContact inputs={inputs} />
      </div>
    </section>
  );
};
