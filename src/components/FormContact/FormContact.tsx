import CustomInput from "../CustomInput/CustomInput";
import s from "./FormContact.module.css";
import { FormContactProps } from "../../interface/props";

function FormContact({ inputs }: FormContactProps) {
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
}
export default FormContact;
