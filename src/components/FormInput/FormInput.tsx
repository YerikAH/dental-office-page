import {
  IconBuildingHospital,
  IconCalendar,
  IconClock,
  IconMail,
  IconPhone,
  IconUser,
} from "@tabler/icons-react";
import CustomInput from "../CustomInput/CustomInput";
import { InputTypes } from "../../interface/enum";
import s from "./FormInput.module.css";

function FormInput() {
  return (
    <>
      <div className={s.form}>
        <CustomInput
          label="Nombre"
          icon={<IconUser />}
          placeholder="Escribe tu nombre"
          type={InputTypes.TEXT}
          withIcon={true}
        />
        <CustomInput
          label="Email"
          icon={<IconMail />}
          placeholder="Escribe tu correo electronico"
          type={InputTypes.EMAIL}
          withIcon={true}
        />
        <CustomInput
          label="Numero de celular"
          icon={<IconPhone />}
          placeholder="Escribe tu numero de celular"
          type={InputTypes.NUMBER}
          withIcon={true}
        />
        <CustomInput
          label="Fecha"
          icon={<IconCalendar />}
          placeholder="Selecciona la fecha"
          type={InputTypes.DATE}
          withIcon={true}
        />
        <CustomInput
          label="Hora"
          icon={<IconClock />}
          placeholder="Selecciona la hora"
          type={InputTypes.HOUR}
          withIcon={true}
        />
        <CustomInput
          label="Odontologo"
          icon={<IconBuildingHospital />}
          placeholder="Selecciona el odontologo"
          type={InputTypes.SELECT}
          withIcon={true}
        />
      </div>
      <div className={s.form__aditional}>
        <CustomInput
          label="Mensaje adicional"
          placeholder="Escribe algún mensaje adicional por la consulta"
          type={InputTypes.TEXT}
          withIcon={false}
          multiline={true}
        />
      </div>
    </>
  );
}
export default FormInput;
