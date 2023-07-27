import ServiceOptions from "../ServiceOptions/ServiceOptions";
import { SectionAppointmentProps } from "../../interface/props";
import s from "./SectionAppointment.module.css";
import image from "../../assets/doctor_poster.png";
import CustomInput from "../CustomInput/CustomInput";
import { IconUser } from "@tabler/icons-react";
import { InputTypes } from "../../interface/enum";
import FormInput from "../FormInput/FormInput";

function SectionAppointment({
  services,
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
        <ServiceOptions services={services} />
        <FormInput />
      </div>
    </section>
  );
}
export default SectionAppointment;
