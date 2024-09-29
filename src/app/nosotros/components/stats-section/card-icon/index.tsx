import { useEffect, useState } from "react";
import s from "./index.module.css";
import Image, { StaticImageData } from "next/image";

interface Props {
  img: StaticImageData;
  title: string;
  text: string;
}
export const CardIcon = ({ img, title, text }: Props) => {
  const [start, setStart] = useState(0);
  const number = Number(title);

  useEffect(() => {
    const interval = setInterval(() => {
      if (start === number) return;
      setStart(start + 1);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [number, start]);

  return (
    <div className={s.card}>
      <Image src={img} alt="icon" />
      <h2>{start}</h2>
      <p>{text}</p>
    </div>
  );
};
