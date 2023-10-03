import { IconX } from "@tabler/icons-react";
import { InputTypes } from "../../interface/enum";
import s from './Login.module.css'
import logo from "../../assets/logo.png";
import google from "../../assets/google.svg";
import CustomInput from "../CustomInput/CustomInput";
import {LoginProps} from '../../interface/props'

const FORM = [
  {
    label: "Email",
    placeholder: "Escribe tu correo electronico",
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
    name: "password",
  },
];

function Login({state, setState}: LoginProps) {
  const onCloseModal = () => {
    setState(false)
  }
  return (
    <div className={`${s.modal} ${state && s.active}`}>
      <div className={s.modal__center}>
        <button className={s.close} onClick={onCloseModal}>
          <IconX />
        </button>
        <img src={logo} alt="logo" className={s.modal__center__logo} />
        <h2>Accede a tu cuenta</h2>
        <form>
          {FORM.map((item,idx) => (
            <CustomInput
              key={idx}
              label={item.label}
              name={item.name}
              placeholder={item.placeholder}
              type={item.type}
              withIcon={item.withIcon}
              isRequired={item.isRequired}
            />
          ))}
          <a href="" className={s.link__color}>¿Olvidaste tu contraseña?</a>
          <input type="submit" value="Ingresar"/>
        </form>
        <div className={s.separator}>
          <div></div>
          <p>o</p>
          <div></div>
        </div>
        <button className={s.option}>
          <img src={google} alt="google" />
          Continuar con Google
        </button>
        <div className={s.links}>
          <a href="" className={s.link}>
            <span>¿No tengo una cuenta?</span>
            <span> Registrarte</span>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Login