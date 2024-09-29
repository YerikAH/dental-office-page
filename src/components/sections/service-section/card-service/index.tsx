import Image from "next/image";
import s from "./index.module.css";

interface Props {
  title: string;
  icon: string;
  color: string;
  text: string;
}

export const CardService = ({ title, text, icon, color }: Props) => {
  return (
    <button className={s.card} style={{ backgroundColor: `${color}` }}>
      <div className={s.card__container}>
        <Image src={icon} alt="icon" />
        <h2>{title}</h2>
        <p>{text.slice(0, 120)}...</p>
      </div>
    </button>
  );
};
