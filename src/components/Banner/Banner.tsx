import s from "./Banner.module.css";
import { BannerProps } from "../../interface/props";
import { useState, useEffect } from "react";

function Banner({ image, title, text }: BannerProps) {
  const [hasText, setHasText] = useState("");
  useEffect(() => {
    if (title === undefined && text === undefined) setHasText("--active");
    else setHasText("");
  }, [text, title]);
  return (
    <div className={s.banner}>
      <img
        src={image}
        alt="image"
        id={`${s[`banner__image${hasText}`]}`}
      />
      <div className={`${s[`banner__contain${hasText}`]}`}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
export default Banner;
