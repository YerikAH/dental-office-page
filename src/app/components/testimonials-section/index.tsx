"use client";
import s from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { CardTestimonial } from "./card-testimonial";
import "swiper/css/pagination";
import "swiper/css";
import { StaticImageData } from "next/image";

interface Props {
  title: string;
  text: string;
  items: {
    avatar: StaticImageData;
    opinion: string;
    name: string;
    tag: string;
  }[];
}

export const TestimonialsSection = ({ title, text, items }: Props) => {
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
              <CardTestimonial
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
};
