import s from "./SectionQA.module.css";
import { QuestionQAProps } from "../../interface/props";
import QuestionAnswer from "../QuestionAnswer/QuestinoAnswer";
import { IconExternalLink } from "@tabler/icons-react";

function SectionQA({ title, text, items }: QuestionQAProps) {
  return (
    <section className={s.section}>
      <div className={s.section__intro}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={s.section__contain}>
        {items.map((item, idx) => (
          <QuestionAnswer key={idx} title={item.title} text={item.text} />
        ))}
      </div>
      <button tabIndex={1} className={s.button}>
        <IconExternalLink size={18} color="white" />
        preguntar
      </button>
    </section>
  );
}
export default SectionQA;
