"use client";
import s from "./index.module.css";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

export interface Props {
  image: StaticImageData;
  title?: string;
  text?: string;
}

export const Banner = ({ image, title, text }: Props) => {
  const [hasText, setHasText] = useState("");
  useEffect(() => {
    if (title === undefined && text === undefined) setHasText("--active");
    else setHasText("");
  }, [text, title]);
  return (
    <div className={s.banner}>
      <Image src={image} alt="image" id={`${s[`banner__image${hasText}`]}`} />
      <div className={`${s[`banner__contain${hasText}`]}`}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};
