import s from "./Carousel.module.css";
import { CarouselProps } from "../../interface/props";
import { useEffect, useState } from "react";

function Carousel({ images, speed }: CarouselProps) {
  const [image, setImage] = useState('')

  useEffect(() => {
    let idx = 0;
    const int = setInterval(() => {
      idx += 1;
      if (idx >= images.length) idx = 0;
      setImage(images[idx])
    }, speed);

    return () => {
      clearInterval(int);
    };
  }, [speed, images]);
  return (
    <div className={s.carousel}>
      <img className={s.image}  src={image} alt="image" />
    </div>
  );
}
export default Carousel;
