"use client";
import { CustomInput } from "@/components/shared";
import s from "./index.module.css";
import { InputTypes } from "@/types";

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

export interface Props {
  inputs: CustomInput[];
  textarea: CustomInput;
  setFormState?: (value: string, name: string, error: boolean) => void;
  isSubmit?: boolean;
}

export const FormInput = ({
  inputs,
  textarea,
  setFormState,
  isSubmit,
}: Props) => {
  return (
    <>
      <div className={s.form}>
        {inputs.map((item, idx) => (
          <CustomInput
            key={idx}
            label={item.label}
            placeholder={item.placeholder}
            type={item.type}
            icon={item.icon}
            withIcon={item.withIcon}
            options={item.options}
            isRequired={item.isRequired}
            name={item.name}
            setFormState={setFormState}
            isSubmit={isSubmit}
          />
        ))}
      </div>
      <div className={s.form__aditional}>
        <CustomInput
          label={textarea.label}
          placeholder={textarea.placeholder}
          type={textarea.type}
          withIcon={textarea.withIcon}
          multiline={textarea.multiline}
          isRequired={textarea.isRequired}
          name={textarea.name}
          setFormState={setFormState}
          isSubmit={isSubmit}
        />
      </div>
    </>
  );
};
