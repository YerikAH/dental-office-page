import s from "./Carousel.module.css";
import { CarouselProps } from "../../interface/props";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Carousel({ images, speed }: CarouselProps) {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: speed, disableOnInteraction: false }}
      >
        {images.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img className={s.image} src={item} alt="image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default Carousel;
