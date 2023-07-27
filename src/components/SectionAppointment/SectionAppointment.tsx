import { SectionAppointmentProps } from "../../interface/props";
import s from "./SectionAppointment.module.css";
import image from "../../assets/doctor_poster.png";
import FormAppointment from "../FormAppointment/FormAppointment";

function SectionAppointment({
  services,
  form,
  title,
  text,
}: SectionAppointmentProps) {
  return (
    <section className={s.section}>
      <div className={s.section__banner}>
        <img src={image} alt="image" />
      </div>
      <div className={s.section__content}>
        <h1 className={s.title}>{title}</h1>
        <p className={s.text}>{text}</p>
        <FormAppointment form={form} services={services}/>
      </div>
    </section>
  );
}
export default SectionAppointment;
