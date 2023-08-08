import { CarouselProps } from "../../interface/props";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "../Banner/Banner";

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
            <Banner image={item.image} text={item.text} title={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default Carousel;
