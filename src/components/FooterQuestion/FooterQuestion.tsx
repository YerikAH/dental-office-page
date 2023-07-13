import s from "./FooterQuestion.module.css";
import { FooterQuestionProps } from "../../interface/props";

function FooterQuestion({ text, button }: FooterQuestionProps) {
  return (
    <div className={s.question}>
      <p>{text}</p>
      <button>{button}</button>
    </div>
  );
}
export default FooterQuestion;
