"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ButtonCarousel } from "../button-carousel";
import { CardDentist } from "../card-dentist";
import { StaticImageData } from "next/image";

export interface Props {
  cards: {
    image: StaticImageData;
    name: string;
    special: string;
    text: string;
    fb: string;
    email: string;
    phone: string;
    url: string;
  }[];
}
export const CarouselCards = ({ cards }: Props) => {
  return (
    <div>
      <div>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          rewind={true}
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
          }}
        >
          {cards.map((item, idx) => (
            <SwiperSlide key={idx}>
              <CardDentist
                email={item.email}
                name={item.name}
                special={item.special}
                fb={item.fb}
                text={item.text}
                image={item.image}
                url={item.url}
                phone={item.phone}
              />
            </SwiperSlide>
          ))}
          <ButtonCarousel />
        </Swiper>
      </div>
    </div>
  );
};
