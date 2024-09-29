"use client";
import s from "./index.module.css";
import image from "@/assets/poster/doctor_poster.png";
import Image, { StaticImageData } from "next/image";
import { InputTypes } from "@/types";
import { FormReserve } from "./form-reserve";

interface CustomInput {
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
}

interface Props {
  services: {
    image: StaticImageData;
    name: string;
    active: boolean;
  }[];
  title: string;
  text: string;
  form: {
    inputs: CustomInput[];
    textarea: CustomInput;
    setFormState?: (value: string, name: string, error: boolean) => void;
    isSubmit?: boolean;
  };
}

export const ReserveSection = ({ services, form, title, text }: Props) => {
  return (
    <section className={s.section}>
      <div className={s.section__banner}>
        <Image src={image} alt="image" />
      </div>
      <div className={s.section__content}>
        <h1 className={s.title}>{title}</h1>
        <p className={s.text}>{text}</p>
        <FormReserve form={form} services={services} />
      </div>
    </section>
  );
};
