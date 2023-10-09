import { useState } from "react";
import { SliderProductProps } from "../../interface/props";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import s from "./SliderProduct.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function SliderProduct({ images }: SliderProductProps) {
  const [index, setIndex] = useState(0);
  return (
    <div className={s.product__view}>
      <div className={s.image}>
        <InnerImageZoom
          src={images[index]}
          zoomType="hover"
          zoomPreload={true}
          zoomScale={2}
          className={s.image__zoom}
        />
      </div>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        rewind={true}
        spaceBetween={40}
      >
        {images.map((item, idx) => (
          <SwiperSlide key={idx}>
            <button onClick={() => setIndex(idx)} className={s.images}>
              <img src={item} alt="image" />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default SliderProduct;
