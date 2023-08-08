import CustomInput from "../CustomInput/CustomInput";
import s from "./FormContact.module.css";
import { FormContactProps } from "../../interface/props";

function FormContact({ inputs }: FormContactProps) {
  return (
    <form className={s.form}>
      {inputs.map((item, idx) => (
        <>
          {idx > 1 ? (
            <div className={s.input__full}>
              <CustomInput
                key={idx}
                label={item.label}
                placeholder={item.placeholder}
                withIcon={false}
                type={item.type}
                multiline={item.multiline}
                doctors={[]}
              />
            </div>
          ) : (
            <CustomInput
              key={idx}
              label={item.label}
              placeholder={item.placeholder}
              withIcon={false}
              type={item.type}
              doctors={[]}
            />
          )}
        </>
      ))}

      <input type="submit" value="Manda mensaje" name="submit" />
    </form>
  );
}
export default FormContact;
