import CardService from "../CardService/CardService";
import s from "./SectionService.module.css";
import { SectionServiceProps } from "../../interface/props";

function SectionService({ title, text, items }: SectionServiceProps) {
  return (
    <section className={s.section}>
      <div className={s.section__intro}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={s.section__cards}>
        {items.slice(0,4).map((items, idx) => (
          <CardService
            key={idx}
            title={items.title}
            text={items.text}
            icon={items.icon}
            color={items.color}
          />
        ))}
      </div>
      <button tabIndex={1} className={s.button}>ver mas</button>
    </section>
  );
}
export default SectionService;
