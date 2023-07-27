import s from "./ServiceOptions.module.css";
import { ServiceOptionsProps } from "../../interface/props";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

function ServiceOptions({ services }: ServiceOptionsProps) {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
        slidesPerView={4}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          400: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 4,
          },
        }}
      >
        {services.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className={s.service}>
              <button
                className={`${s.service__button} ${
                  item.active && s["--active"]
                }`}
              >
                <img src={item.image} alt="image" />
              </button>
              <p>{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default ServiceOptions;
