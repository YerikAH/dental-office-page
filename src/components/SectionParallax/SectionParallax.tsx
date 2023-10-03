import s from "./SectionParallax.module.css";
import { SectionParallaxProps } from "../../interface/props";

function SectionParallax({
  slogan,
  title,
  logo,
  text,
  image,
}: SectionParallaxProps) {
  return (
    <section className={s.section}>
      <div
        className={`${s.parallax}`}
        style={{ backgroundImage: `url("${image}")` }}
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
}
export default SectionParallax;
