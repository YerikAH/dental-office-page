import s from "./SectionContact.module.css";
import { SectionContactProps } from "../../interface/props";
import FormContact from "../FormContact/FormContact";
import Map from "../Map/Map.tsx";

function SectionContact({ title, text, inputs }: SectionContactProps) {
  return (
    <section className={s.section} id="Contactanos">
      <div className={s.section__form}>
        <h2>{title}</h2>
        <p>{text}</p>
        <FormContact inputs={inputs} />
      </div>
      <div className={s.section__map}>
        <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.6258213656797!2d-75.20830592382937!3d-12.06924604232202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e97d258502765%3A0x4743bd553b5f8b66!2sConsultorio%20odontol%C3%B3gico%20%22La%20preventiva%22!5e0!3m2!1ses!2spe!4v1692556294875!5m2!1ses!2spe" />
      </div>
    </section>
  );
}
export default SectionContact;
