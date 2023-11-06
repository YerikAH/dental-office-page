import s from "./SectionPromotion.module.css";
import { SectionPromotionProps } from "../../interface/props";

function SectionPromotion({
  title,
  text,
  image,
  points,
}: SectionPromotionProps) {
  return (
    <section className={s.section}>
      <img className={s.banner} src={image} alt="banner" />
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
}
export default SectionPromotion;
