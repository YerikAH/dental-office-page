import { StaticImageData } from "next/image";
import { CardFind } from "./card-find";
import s from "./index.module.css";

interface Props {
  items: {
    image: StaticImageData;
    title: string;
    description: string;
    contact: string;
  }[];
  title: string;
  text: string;
  tag: string;
}

export const FindSection = ({ items, title, text, tag }: Props) => {
  return (
    <section className={s.section}>
      <span className={s.section__tag}>{tag}</span>
      <div className={s.section__intro}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={s.section__cards}>
        {items.map((item, idx) => (
          <CardFind
            key={idx}
            title={item.title}
            description={item.description}
            contact={item.contact}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};
