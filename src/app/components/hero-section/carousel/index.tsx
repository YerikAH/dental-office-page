"use client";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Banner } from "./banner";
import { StaticImageData } from "next/image";

export interface Props {
  images: {
    image: StaticImageData;
    title?: string;
    text?: string;
  }[];
  speed: number;
}
export const Carousel = ({ images, speed }: Props) => {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: speed, disableOnInteraction: false }}
      >
        {images.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Banner image={item.image} text={item.text} title={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
