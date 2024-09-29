import s from "./index.module.css";
export const CardValue = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className={s.box}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};
