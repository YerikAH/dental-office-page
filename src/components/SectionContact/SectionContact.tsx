import s from "./SectionContact.module.css";
import { SectionContactProps } from "../../interface/props";
import FormContact from "../FormContact/FormContact";
import Map from "../Map/Map";

function SectionContact({ title, text, inputs }: SectionContactProps) {
  return (
    <section className={s.section} id="Contactanos">
      <div className={s.section__map}>
        <Map src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2759.0277871993453!2d-75.2376479827137!3d-12.053529301432896!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2spe!4v1699273072048!5m2!1ses!2spe" />
      </div>
      <div className={s.section__form}>
        <h2>{title}</h2>
        <p>{text}</p>
        <FormContact inputs={inputs} />
      </div>
    </section>
  );
}
export default SectionContact;
