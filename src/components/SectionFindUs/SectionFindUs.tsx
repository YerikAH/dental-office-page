import s from "./SectionFindUs.module.css";
import { SectionFindUsProps } from "../../interface/props";
import CardFindUs from "../CardFindUs/CardFindUs";

function SectionFindUs({ items, title, text, tag }: SectionFindUsProps) {
  return (
    <section className={s.section}>
      <span className={s.section__tag}>{tag}</span>
      <div className={s.section__intro}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={s.section__cards}>
        {items.map((item) => (
          <CardFindUs
            title={item.title}
            description={item.description}
            contact={item.contact}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}
export default SectionFindUs;
