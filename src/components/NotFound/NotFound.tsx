import s from "./NotFound.module.css";
import illustration from "../../assets/illustration.svg";
import { IconSearch } from "@tabler/icons-react";
import CustomInput from "../CustomInput/CustomInput";
import { InputTypes } from "../../interface/enum";

function NotFound() {
  return (
    <div className={s.error}>
      <img src={illustration} alt="illustration" />
      <h1>We can't find the page you're looking for.</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid modi
        neque porro quaerat. Ea, inventore.
      </p>
      <div className={s.error__actions}>
        <button>Ir al inicio</button>
        <CustomInput
          name="router"
          placeholder="¿A donde quieres ir?"
          type={InputTypes.TEXT}
          icon={<IconSearch />}
          label="¿A donde quieres ir?"
          isLabel={false}
          isRequired={false}
          withIcon
        />
      </div>
    </div>
  );
}
export default NotFound;
