import s from "./SectionOurClient.module.css";
import { SectionOurClientProps } from "../../interface/props";
import CardOpinion from "../CardOpinion/CardOpinion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function SectionOurClient({ title, text, items }: SectionOurClientProps) {
  return (
    <section className={s.section}>
      <div className={s.section__intro}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={s.section__contain}>
        <Swiper spaceBetween={10} slidesPerView={3} rewind={true}>
          {items.map((item, idx) => (
            <SwiperSlide key={idx}>
              <CardOpinion
                key={idx}
                avatar={item.avatar}
                name={item.name}
                opinion={item.opinion}
                tag={item.tag}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
export default SectionOurClient;
