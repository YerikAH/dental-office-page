import s from "./SectionContact.module.css";
import { SectionContactProps } from "../../interface/props";
import FormContact from "../FormContact/FormContact";

function SectionContact({ title, text, inputs }: SectionContactProps) {
  return (
    <section className={s.section}>
      <div className={s.section__form}>
        <h2>{title}</h2>
        <p>{text}</p>
        <FormContact inputs={inputs} />
      </div>
      <div className={s.section__map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.625744812098!2d-75.205731!3d-12.0692513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e97d258502765%3A0x4743bd553b5f8b66!2sConsultorio%20odontol%C3%B3gico%20%22La%20preventiva%22!5e0!3m2!1ses!2spe!4v1691246335459!5m2!1ses!2spe"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
export default SectionContact;
