import s from "./index.module.css";
interface Props {
  text: string;
  button: string;
}
export const FooterQuestion = ({ text, button }: Props) => {
  return (
    <div className={s.question}>
      <p>{text}</p>
      <button>{button}</button>
    </div>
  );
};
