import s from "./SectionPrincipalServices.module.css";
import { SectionPrincipalServicesProps } from "../../interface/props.ts";
import SimpleCard from "../SimpleCard/SimpleCard";

function SectionPrincipalServices({
  title,
  text,
  cards,
}: SectionPrincipalServicesProps) {
  return (
    <section className={s.section}>
      <div className={s.info}>
        <h2>{title}</h2>
        <p>{text}</p>
        <button className={s.section__button}>Contact us</button>
      </div>
      <div className={s.cards}>
        {cards.map((item, idx) => (
          <SimpleCard
            title={item.title}
            text={item.text}
            image={item.image}
            button={item.button}
            key={idx}
          />
        ))}
      </div>
    </section>
  );
}
export default SectionPrincipalServices;
