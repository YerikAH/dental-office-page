import { IconMail, IconX } from "@tabler/icons-react";
import { InputTypes } from "../../interface/enum";
import s from "./Register.module.css";
import CustomInput from "../CustomInput/CustomInput";
import logo from "../../assets/logo.png";

const FORM = [
  {
    label: "Nombre",
    name: "name",
    placeholder: "Escribe tu nombre",
    type: InputTypes.TEXT,
    withIcon: false,
    isRequired: true,
  },
  {
    label: "Email",
    placeholder: "Escribe tu correo electronico",
    icon: <IconMail />,
    type: InputTypes.EMAIL,
    withIcon: false,
    isRequired: true,
    name: "email",
  },
  {
    label: "Contraseña",
    placeholder: "Contraseña",
    type: InputTypes.PASSWORD,
    withIcon: false,
    isRequired: true,
    name: "phone_number",
  },
];

function Register() {
  return (
    <div className={s.modal}>
      <div className={s.modal__center}>
        <button className={s.close}>
          <IconX/>
        </button>
        <img src={logo} alt="logo" className={s.modal__center__logo} />
        <h2>Crea una nueva cuenta</h2>
        <form>
          {FORM.map((item) => (
            <CustomInput
              label={item.label}
              name={item.name}
              placeholder={item.placeholder}
              type={item.type}
              withIcon={item.withIcon}
              isRequired={item.isRequired}
            />
          ))}

          <input type="submit" />
        </form>
        <div className={s.separator}>
          <div></div>
          <p>o</p>
          <div></div>
        </div>
        <button className={s.option}>
          <img src="./google.svg" alt="google" />
          Continuar con Google
        </button>

        <div className={s.links}>
          <a href="" className={s.link}>
            <span>¿Ya tienes una cuenta?</span>
            <span> Inicia sesión</span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Register;
