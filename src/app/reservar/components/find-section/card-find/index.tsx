import Image, { StaticImageData } from "next/image";
import s from "./index.module.css";

interface Props {
  image: StaticImageData;
  title: string;
  description: string;
  contact: string;
}
export const CardFind = ({ image, title, description, contact }: Props) => {
  return (
    <div className={s.card}>
      <div className={s.card__icon}>
        <Image src={image} alt="icon" />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <span>{contact}</span>
    </div>
  );
};
