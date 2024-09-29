import { InputTypes } from "@/types";
import s from "./index.module.css";
import { CustomInput } from "@/components/shared";

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
}

export const FormContact = ({ inputs }: Props) => {
  return (
    <form className={s.form}>
      {inputs.map((item, idx) => (
        <div key={idx} className={idx > 1 ? `${s.input__full}` : ""}>
          <CustomInput
            name={item.name}
            label={item.label}
            placeholder={item.placeholder}
            withIcon={item.withIcon}
            multiline={item.multiline}
            type={item.type}
            isRequired={item.isRequired}
          />
        </div>
      ))}
      <input type="submit" value="Manda mensaje" name="submit" />
    </form>
  );
};
