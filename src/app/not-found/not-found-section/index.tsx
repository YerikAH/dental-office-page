import { CustomInput } from "@/components/shared";
import s from "./index.module.css";
import illustration from "@/assets/illustration.svg";
import Image from "next/image";
import { InputTypes } from "@/types";
import Link from "next/link";
import { RoutesEnum } from "@/routes";

interface Props {
  title: string;
  text: string;
  button: string;
  input: {
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
  };
}

export const NotFoundSection = ({ title, text, button, input }: Props) => {
  return (
    <div className={s.error}>
      <Image src={illustration} alt="illustration" />
      <h1>{title}</h1>
      <p>{text}</p>
      <div className={s.error__actions}>
        <Link href={RoutesEnum.HOME}>{button}</Link>
        <CustomInput
          name={input.name}
          placeholder={input.placeholder}
          type={input.type}
          icon={input.icon}
          label={input.label}
          isLabel={input.isLabel}
          isRequired={input.isRequired}
          withIcon={input.withIcon}
        />
      </div>
    </div>
  );
};
