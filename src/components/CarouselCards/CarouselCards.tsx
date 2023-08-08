import s from "./CarouselCards.module.css";
import { CarouselCardsProps } from "../../interface/props";
import CardDentist from "../CardDentist/CardDentist";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonCarousel from "../ButtonCarousel/ButtonCarousel";
import "swiper/css";
function CarouselCards({ cards }: CarouselCardsProps) {
  return (
    <div className={s.carousel}>
      <div className={s.cards}>
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
}

export default CarouselCards;
