import { useState } from "react";
import { SliderProductProps } from "../../interface/props";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import s from "./SliderProduct.module.css";

function SliderProduct({ images }: SliderProductProps) {
  const [index, setIndex] = useState(0);
  return (
    <div className={s.product__view}>
      <div className={s.image}>
        <InnerImageZoom
          src={images[index]}
          zoomType="hover"
          zoomPreload={true}
          width={600}
          height={600}
        />
      </div>
      <div className={s.images}>
        {images.map((item, idx) => (
          <button key={idx} onClick={() => setIndex(idx)}>
            <img src={item} alt="image" />
          </button>
        ))}
      </div>
    </div>
  );
}
export default SliderProduct;
