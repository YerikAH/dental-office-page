import s from "./SectionContactInfo.module.css";
import FormContact from "../FormContact/FormContact";
import { SectionContactInfoProps } from "../../interface/props";

function SectionContactInfo({
  title,
  text,
  inputs,
  contacts,
  address,
}: SectionContactInfoProps) {
  return (
    <section className={s.section} id="Contactanos">
      <div className={s.section__info}>
        <div className={s.info}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <span dangerouslySetInnerHTML={{ __html: address }} />
        <div>
          {contacts.map((item, idx) => (
            <div key={idx} className={s.contact}>
              <img src={item.icon} alt="icon" />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={s.section__form}>
        <FormContact inputs={inputs} />
      </div>
    </section>
  );
}
export default SectionContactInfo;
