import CustomInput from "../CustomInput/CustomInput";
import s from "./FormContact.module.css";
import { FormContactProps } from "../../interface/props";

function FormContact({ inputs }: FormContactProps) {
  return (
    <form className={s.form}>
      {inputs.map((item, idx) => (
        <>
          {idx > 1 ? (
            <div className={s.input__full} key={idx}>
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
          ) : (
            <CustomInput
              key={idx}
              name={item.name}
              label={item.label}
              placeholder={item.placeholder}
              withIcon={item.withIcon}
              type={item.type}
              multiline={item.multiline}
              isRequired={item.isRequired}
            />
          )}
        </>
      ))}

      <input type="submit" value="Manda mensaje" name="submit" />
    </form>
  );
}
export default FormContact;
