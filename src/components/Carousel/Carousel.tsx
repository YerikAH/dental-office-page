import s from "./Carousel.module.css";
import { CarouselProps } from "../../interface/props";
import { useEffect, useState } from "react";

function Carousel({ images, speed }: CarouselProps) {
  const [image, setImage] = useState("");
  const [flash, setFlash] = useState(false);

  function activeFlash() {
    setFlash(true);
    setTimeout(() => {
      setFlash(false);
    }, 1000);
  }
  
  useEffect(() => {
    setImage(images[0])

    let idx = 0;
    const int = setInterval(() => {
      idx += 1;
      if (idx >= images.length) idx = 0;
      setImage(images[idx]);
      if (images.length > 1) activeFlash();
    }, speed);

    return () => {
      clearInterval(int);
    };
  }, [speed, images]);

  return (
    <div className={s.carousel}>
      {flash && <div className={s.flash}></div>}
      <img className={s.image} src={image} alt="image" />
    </div>
  );
}
export default Carousel;
