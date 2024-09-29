import { StaticImageData } from "next/image";
import s from "./index.module.css";

interface Props {
  title?: string;
  text?: string;
  slogan?: string;
  image: StaticImageData;
  logo?: string;
}

export const CtaSection = ({ slogan, title, logo, text, image }: Props) => {
  return (
    <section className={s.section}>
      <div
        className={`${s.parallax}`}
        style={{ backgroundImage: `url("${image.src}")` }}
      >
        <div className={s.container}>
          <h1>
            {title}
            <br />
            <span>{logo}</span>
          </h1>
          <b>{slogan}</b>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
};
