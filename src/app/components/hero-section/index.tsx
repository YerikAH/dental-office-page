"use client";
import s from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Carousel } from "./carousel";
import { CardIntro } from "./card-intro";
import "swiper/css";
import { StaticImageData } from "next/image";

export interface Props {
  images: {
    image: StaticImageData;
    title?: string;
    text?: string;
  }[];
  speed: number;
  items: {
    text: string;
    title: string;
    image: StaticImageData;
    button: string;
  }[];
  sectionRefs?: React.RefObject<HTMLDivElement>[];
}

export const HeroSection = ({ images, speed, items, sectionRefs }: Props) => {
  return (
    <section className={s.section} ref={sectionRefs?.[0]} id="Inicio">
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
};
