import FormInput from "../FormInput/FormInput";
import ServiceOptions from "../ServiceOptions/ServiceOptions";
import { FormAppointmentProps } from "../../interface/props";
import s from "./FormAppointment.module.css";

function FormAppointment({ form, services }: FormAppointmentProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)} method="GET">
      <ServiceOptions services={services} />
      <FormInput inputs={form.inputs} textarea={form.textarea} />
      <input type="submit" value="Reserva cita" className={s.form__submit} />
    </form>
  );
}
export default FormAppointment;
