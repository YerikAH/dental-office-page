import s from "./NotFound.module.css";
import illustration from "../../assets/illustration.svg";
import CustomInput from "../CustomInput/CustomInput";
import { NotFoundProps } from "../../interface/props";

function NotFound({ title, text, button, input }: NotFoundProps) {
  return (
    <div className={s.error}>
      <img src={illustration} alt="illustration" />
      <h1>{title}</h1>
      <p>{text}</p>
      <div className={s.error__actions}>
        <button>{button}</button>
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
}
export default NotFound;
