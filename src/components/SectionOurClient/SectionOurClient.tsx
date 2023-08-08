import s from "./SectionOurClient.module.css";
import { SectionOurClientProps } from "../../interface/props";
import CardOpinion from "../CardOpinion/CardOpinion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

function SectionOurClient({ title, text, items }: SectionOurClientProps) {
  const pagination = {
    clickable: true,
    renderBullet: function (idx: number, className: string) {
      return `<span class="${className}" id="${s.pagination}"></span>`;
    },
  };

  return (
    <section className={s.section}>
      <div className={s.section__intro}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className={s.section__contain}>
        <Swiper
          className={s.section__contain__swiper}
          spaceBetween={10}
          rewind={true}
          pagination={pagination}
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            720: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
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
