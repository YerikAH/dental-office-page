import s from "./index.module.css";
import Image, { StaticImageData } from "next/image";
import { CardValue } from "./card-value";

interface Props {
  items: {
    title: string;
    text: string;
  }[];
  image: StaticImageData;
}

export const ValuesSection = ({ image, items }: Props) => {
  return (
    <section className={s.section}>
      <div className={s.section__grid}>
        <div className={s.container}>
          {items.map((item, idx) => (
            <CardValue key={idx} title={item.title} text={item.text} />
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
          <Image src={image} alt="image" />
        </div>
      </div>
    </section>
  );
};
