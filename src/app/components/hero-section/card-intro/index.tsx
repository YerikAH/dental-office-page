"use client";
import Image, { StaticImageData } from "next/image";
import s from "./index.module.css";

export interface Props {
  text: string;
  title: string;
  image: StaticImageData;
  button: string;
}
export const CardIntro = ({ image, text, title, button }: Props) => {
  return (
    <div className={s.card}>
      <div className={s.image}>
        <Image src={image} alt={title} />
      </div>
      <div className={s.separate} />
      <h3 className={`${s["text--bold"]}`}>{title}</h3>
      <p className={s.text}>{text}</p>
      <button className={`${s["text--bold"]} ${s.button}`}>{button}</button>
    </div>
  );
};
