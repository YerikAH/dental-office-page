"use client";
import s from "./index.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";

export interface Props {
  services: {
    image: StaticImageData;
    name: string;
    active: boolean;
  }[];
  setFormState?: (value: string, name: string, error: boolean) => void;
}

export const ServiceOptions = ({ services, setFormState }: Props) => {
  const [servicesOp, setServicesOp] = useState(services);
  function selectService(idx: number) {
    const newServices = servicesOp.map((item) => {
      item.active = false;
      services[idx].active = true;
      return item;
    });
    const serviceSelect = newServices.find((item) => item.active === true);
    if (serviceSelect !== undefined) {
      console.log("Exists");
      setFormState?.(serviceSelect.name, "service", false);
    }
    setServicesOp(newServices);
  }
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
        {servicesOp.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className={s.service}>
              <button
                type="button"
                onClick={() => selectService(idx)}
                className={`${s.service__button} ${
                  item.active && s["--active"]
                }`}
              >
                <Image src={item.image} alt="image" />
              </button>
              <p>{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
