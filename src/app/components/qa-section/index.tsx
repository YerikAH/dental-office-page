import s from "./index.module.css";
import { IconExternalLink } from "@tabler/icons-react";
import { QuestionAnswer } from "./question-answer";

interface Props {
  title: string;
  text: string;
  items: {
    title: string;
    text: string;
  }[];
}

export const QaSection = ({ title, text, items }: Props) => {
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
};
