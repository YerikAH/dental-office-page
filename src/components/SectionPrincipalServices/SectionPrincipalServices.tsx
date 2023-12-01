import s from "./SectionPrincipalServicesProps.module.css";
import { SectionPrincipalServicesProps } from "../../interface/props.ts";
import SimpleCard from "../SimpleCard/SimpleCard";

function SectionPrincipalServices({
  title,
  text,
  cards,
}: SectionPrincipalServicesProps) {
  return (
    <section>
      <div className={s.info}>
        <h2>{title}</h2>
        <p>{text}</p>
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
