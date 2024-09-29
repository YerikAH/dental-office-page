import { StaticImageData } from "next/image";
import { CardIcon } from "./card-icon";
import s from "./index.module.css";

interface Props {
  items: {
    img: StaticImageData;
    title: string;
    text: string;
  }[];
}

export const StatsSection = ({ items }: Props) => {
  return (
    <section className={s.section}>
      <div className={s.container}>
        {items.map((item, idx) => (
          <CardIcon
            title={item.title}
            text={item.text}
            img={item.img}
            key={idx}
          />
        ))}
      </div>
    </section>
  );
};
