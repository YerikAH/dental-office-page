import FormInput from "../FormInput/FormInput";
import ServiceOptions from "../ServiceOptions/ServiceOptions";
import { FormAppointmentProps } from "../../interface/props";
import s from "./FormAppointment.module.css";
import { useEffect, useState } from "react";

function FormAppointment({ form, services }: FormAppointmentProps) {
  const [formState, setFormState] = useState<
    { value: string; name: string; error: boolean }[]
  >([]);
  const [onSubmit, setOnSubmit] = useState(false);

  function onSetFormState(value: string, name: string, error: boolean) {
    const findName = formState.find((item) => item.name === name);

    if(findName === undefined){
      setFormState([...formState, { value, name, error }]);
    }else{
      findName.value = value
      findName.error = error
    }
  }
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setOnSubmit(true)
    setOnSubmit(!onSubmit)
    console.log(formState);
  }
  useEffect(() => {
    const inputs = [...form.inputs]
    inputs.push(form.textarea)
    const formInputs = inputs.map(item => {
      return {
        name: item.name,
        value: "",
        error: false
      }
    })
    setFormState(formInputs)
  },[form.inputs, form.textarea])

  return (
    <form onSubmit={(e) => handleSubmit(e)} autoComplete="off">
      <ServiceOptions services={services} setFormState={onSetFormState}/>
      <FormInput inputs={form.inputs} textarea={form.textarea} setFormState={onSetFormState} isSubmit={onSubmit}/>
      <input type="submit" value="Reserva cita" className={s.form__submit} />
    </form>
  );
}
export default FormAppointment;
