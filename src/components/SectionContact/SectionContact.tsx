import s from "./SectionContact.module.css";
import { SectionContactProps } from "../../interface/props";
import FormContact from "../FormContact/FormContact";

function SectionContact({ title, text, inputs }: SectionContactProps) {
  return (
    <section className={s.section} id="Contactanos">
      <div className={s.section__info}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={s.section__form}>
        <FormContact inputs={inputs} />
      </div>
    </section>
  );
}
export default SectionContact;
