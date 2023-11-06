import CardMision from "../CardMision/CardMision";
import s from "./SectionVisionMision.module.css";
import { SectionVisionMisionProps } from "../../interface/props";

function SectionVisionMision({ image, items }: SectionVisionMisionProps) {
  return (
    <section className={s.section}>
      <div className={s.section__grid}>
        <div className={s.container}>
          {items.map((item, idx) => (
            <CardMision key={idx} title={item.title} text={item.text} />
          ))}
          <div className={s.section__grid__item}>
            <h3>Valores</h3>
            <ul>
              <li>Responsabilidad</li>
              <li>Puntualidad</li>
              <li>Mejora continua</li>
              <li>Trabajo en equipo</li>
            </ul>
          </div>
        </div>
        <div className={s.container__image}>
          <img src={image} alt="image" />
        </div>
      </div>
    </section>
  );
}
export default SectionVisionMision;
