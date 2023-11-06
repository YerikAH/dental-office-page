import { SectionNumbersProps } from "../../interface/props";
import CardIcon from "../CardIcon/CardIcon";
import s from "./SectionNumbers.module.css";

function SectionNumbers({ ITEMS }: SectionNumbersProps) {
  return (
    <section className={s.section}>
      <div className={s.container}>
        {ITEMS.map((item, idx) => (
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
}
export default SectionNumbers;
