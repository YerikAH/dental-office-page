import Carousel from "../Carousel/Carousel";
import CardIntro from "../CardIntro/CardIntro";
import { SectionIntroProps } from "../../interface/props";
import s from "./SectionIntro.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function SectionIntro({ images, speed, items }: SectionIntroProps) {
  return (
    <section className={s.section}>
      <Carousel images={images} speed={speed} />
      <div className={s.container}>
        <div className={s.cards}>
          {items.map((item, idx) => (
            <CardIntro
              key={idx}
              button={item.button}
              image={item.image}
              text={item.text}
              title={item.title}
            />
          ))}
        </div>

        <Swiper
          effect="slide"
          grabCursor={true}
          loop={true}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          id={`${s["cards--mobile"]}`}
        >
          {items.map((item, idx) => (
            <SwiperSlide key={idx}>
              <CardIntro
                key={idx}
                button={item.button}
                image={item.image}
                text={item.text}
                title={item.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default SectionIntro;
