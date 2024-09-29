import Image, { StaticImageData } from "next/image";
import s from "./index.module.css";

interface Props {
  title: string;
  text: string;
  img: StaticImageData;
  button: string;
}

export const WelcomeSection = ({ title, text, img, button }: Props) => {
  return (
    <section className={s.section}>
      <div className={s.section__info}>
        <h1>{title}</h1>
        <p>{text}</p>
        <button>{button}</button>
      </div>
      <div className={s.section__img}>
        <Image src={img} alt="img" />
      </div>
    </section>
  );
};
