"use client";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useSwiper } from "swiper/react";
import s from "./index.module.css";

export const ButtonCarousel = () => {
  const swiper = useSwiper();
  return (
    <div className={s.cards__controls}>
      <button tabIndex={1} onClick={() => swiper.slidePrev()}>
        <IconChevronLeft />
      </button>
      <button tabIndex={1} onClick={() => swiper.slideNext()}>
        <IconChevronRight />
      </button>
    </div>
  );
};
