import { IconChevronDown } from "@tabler/icons-react";
import { QuestionAnswerProps } from "../../interface/props";
import s from "./QuestionAnswer.module.css";
import { useState } from "react";

function QuestionAnswer({ title, text }: QuestionAnswerProps) {
  const [show, setShow] = useState(false);

  const onShowAnswer = () => {
    setShow(!show);
  };
  return (
    <div className={s.card}>
      <div className={s.card__title}>
        <h6>{title}</h6>
        <button
          onClick={onShowAnswer}
          className={`${s.card__button} ${show && `${s["--active"]}`}`}
        >
          <IconChevronDown />
        </button>
      </div>
      <div>{show && <p>{text}</p>}</div>
    </div>
  );
}
export default QuestionAnswer;
