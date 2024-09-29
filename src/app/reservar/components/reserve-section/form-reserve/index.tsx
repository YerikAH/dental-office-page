"use client";

import s from "./index.module.css";
import { useEffect, useState } from "react";
import { InputTypes } from "@/types";
import { ServiceOptions } from "./service-options";
import { FormInput } from "./form-input";
import { StaticImageData } from "next/image";

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
  form: {
    inputs: CustomInput[];
    textarea: CustomInput;
    setFormState?: (value: string, name: string, error: boolean) => void;
    isSubmit?: boolean;
  };
  services: {
    image: StaticImageData;
    name: string;
    active: boolean;
  }[];
}

export const FormReserve = ({ form, services }: Props) => {
  const [formState, setFormState] = useState<
    { value: string; name: string; error: boolean }[]
  >([]);
  const [onSubmit, setOnSubmit] = useState(false);

  function onSetFormState(value: string, name: string, error: boolean) {
    const findName = formState.find((item) => item.name === name);

    if (findName === undefined) {
      setFormState([...formState, { value, name, error }]);
    } else {
      findName.value = value;
      findName.error = error;
    }
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setOnSubmit(true);
    setOnSubmit(!onSubmit);
    console.log(formState);
  }
  useEffect(() => {
    const inputs = [...form.inputs];
    inputs.push(form.textarea);
    const formInputs = inputs.map((item) => {
      return {
        name: item.name,
        value: "",
        error: false,
      };
    });
    setFormState(formInputs);
  }, [form.inputs, form.textarea]);

  return (
    <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
      <ServiceOptions services={services} setFormState={onSetFormState} />
      <FormInput
        inputs={form.inputs}
        textarea={form.textarea}
        setFormState={onSetFormState}
        isSubmit={onSubmit}
      />
      <input type="submit" value="Reserva cita" className={s.form__submit} />
    </form>
  );
};
