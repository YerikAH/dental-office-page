import s from "./index.module.css";
import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  text: string;
  image: StaticImageData;
  points: { icon: JSX.Element; title: string }[];
}
export const AboutSection = ({ title, text, image, points }: Props) => {
  return (
    <section className={s.section}>
      <Image className={s.banner} src={image} alt="banner" />
      <div className={s.banner__container}>
        <div className={s.banner__text}>
          <h1>{title}</h1>
          <span />
          <p>{text}</p>
        </div>
        <div className={s.banner__icons}>
          {points.map((item, idx) => (
            <div
              key={idx}
              className={`${s.icons} ${idx == 2 ? `${s.icons__center}` : ``}`}
            >
              <div>{item.icon}</div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
