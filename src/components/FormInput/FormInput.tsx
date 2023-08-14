import CustomInput from "../CustomInput/CustomInput";
import { FormInputProps } from "../../interface/props";
import s from "./FormInput.module.css";

function FormInput({ inputs, textarea }: FormInputProps) {
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
        />
      </div>
    </>
  );
}
export default FormInput;
